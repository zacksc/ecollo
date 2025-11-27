import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ProfileService {
  constructor(private prisma: PrismaService) {}

  async upsert(publicId: string, name?: string) {
    if (!publicId) throw new BadRequestException('publicId é obrigatório');
    return this.prisma.profile.upsert({
      where: { publicId },
      update: { name },
      create: { publicId, name },
    });
  }

  async getByPublicId(publicId: string) {
    if (!publicId) throw new BadRequestException('publicId é obrigatório');
    const profile = await this.prisma.profile.findUnique({
      where: { publicId },
      include: {
        deposits: {
          orderBy: { createdAt: 'desc' },
          take: 20,
          include: {
            material: { select: { id: true, name: true, unit: true, pointsPerUnit: true } },
            collectionPoint: { select: { id: true, name: true, address: true, lat: true, lng: true } },
          },
        },
        redemptions: {
          orderBy: { createdAt: 'desc' },
          take: 20,
          include: {
            reward: {
              select: { id: true, title: true, cost: true, partner: { select: { id: true, name: true } } },
            },
          },
        },
      },
    });
    if (!profile) return { publicId, ecoins: 0, deposits: [], redemptions: [] };
    return profile;
  }
}
