import { Injectable, BadRequestException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class CollectionPointsService {
  constructor(private prisma: PrismaService) {}

  async listAllActive() {
    return this.prisma.collectionPoint.findMany({
      where: { active: true },
      orderBy: { name: 'asc' },
    });
  }

  async listNearby(lat: number, lng: number, radiusKm = 2) {
    const all = await this.listAllActive();
    const R = 6371; const toRad = (v: number) => (v * Math.PI) / 180;
    return all.filter((p) => {
      const dLat = toRad(p.lat - lat);
      const dLng = toRad(p.lng - lng);
      const a = Math.sin(dLat/2)**2 + Math.cos(toRad(lat))*Math.cos(toRad(p.lat))*Math.sin(dLng/2)**2;
      const d = 2 * R * Math.asin(Math.sqrt(a));
      return d <= radiusKm;
    });
  }

  async createOne(input: { id?: string; name: string; lat: number; lng: number; address?: string; active?: boolean }) {
    const { id, name, lat, lng, address, active } = input;
    if (!name || !Number.isFinite(lat) || !Number.isFinite(lng)) {
      throw new BadRequestException('name, lat, lng são obrigatórios');
    }
    if (id) {
      return this.prisma.collectionPoint.upsert({
        where: { id },
        update: { name, lat, lng, address, active: active ?? true },
        create: { id, name, lat, lng, address, active: active ?? true },
      });
    }
    return this.prisma.collectionPoint.create({
      data: { name, lat, lng, address, active: active ?? true },
    });
  }

  async createMany(items: { id?: string; name: string; lat: number; lng: number; address?: string; active?: boolean }[]) {
    return Promise.all(items.map((i) => this.createOne(i)));
  }
}
