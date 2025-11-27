import { Injectable, BadRequestException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class MaterialsService {
  constructor(private prisma: PrismaService) {}

  findAll() {
    return this.prisma.materialType.findMany({ orderBy: { name: 'asc' } });
  }

  async createOne(input: { name: string; unit: string; pointsPerUnit: number }) {
    const { name, unit, pointsPerUnit } = input;
    if (!name || !unit || !Number.isFinite(pointsPerUnit)) {
      throw new BadRequestException('name, unit, pointsPerUnit são obrigatórios');
    }
    // idempotente pelo @@unique([name, unit]) do schema
    return this.prisma.materialType.upsert({
      where: { name_unit: { name, unit } },
      update: { pointsPerUnit },
      create: { name, unit, pointsPerUnit },
    });
  }

 async createMany(items: { name: string; unit: string; pointsPerUnit: number }[]) {
  const results: any[] = [];
  for (const item of items) {
    results.push(await this.createOne(item));
  }
  return results;
}

}