import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

type CreateDepositInput = {
  publicId: string;            // id público salvo no app
  collectionPointId: string;   // existente/ativo
  materialId: string;          // existente
  quantity: number;            // > 0
};

@Injectable()
export class DepositsService {
  constructor(private prisma: PrismaService) {}

  async create(input: CreateDepositInput) {
    const { publicId, collectionPointId, materialId, quantity } = input;

    if (!publicId || !collectionPointId || !materialId)
      throw new BadRequestException('Dados obrigatórios ausentes');

    const qty = Number(quantity);
    if (!Number.isFinite(qty) || qty <= 0)
      throw new BadRequestException('quantity inválida');

    // validações básicas
    const [cp, material] = await Promise.all([
      this.prisma.collectionPoint.findUnique({ where: { id: collectionPointId } }),
      this.prisma.materialType.findUnique({ where: { id: materialId } }),
    ]);
    if (!cp || !cp.active) throw new BadRequestException('collectionPointId inválido/inativo');
    if (!material) throw new BadRequestException('materialId inválido');

    // cria/garante perfil por publicId
    const profile = await this.prisma.profile.upsert({
      where: { publicId },
      update: {},
      create: { publicId },
    });

    const points = Math.max(1, Math.floor(qty * material.pointsPerUnit));

    // transação: cria depósito e soma ecoins
    const result = await this.prisma.$transaction(async (tx) => {
      const dep = await tx.deposit.create({
        data: {
          profileId: profile.id,
          collectionPointId,
          materialId,
          quantity: qty,
          pointsEarned: points,
        },
        include: {
          material: { select: { id: true, name: true, unit: true, pointsPerUnit: true } },
          collectionPoint: { select: { id: true, name: true, address: true, lat: true, lng: true } },
        },
      });

      await tx.profile.update({
        where: { id: profile.id },
        data: { ecoins: { increment: points } },
      });

      return dep;
    });

    return { ...result, ecoinsAdded: points };
  }
}
