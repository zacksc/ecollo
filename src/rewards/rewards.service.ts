import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class RewardsService {
  constructor(private prisma: PrismaService) {}

  listActive() {
    return this.prisma.reward.findMany({
      where: { active: true, stock: { gt: 0 } },
      orderBy: [{ partnerId: 'asc' }, { cost: 'asc' }],
      include: {
        partner: { select: { id: true, name: true, contact: true } },
      },
    });
  }
}
