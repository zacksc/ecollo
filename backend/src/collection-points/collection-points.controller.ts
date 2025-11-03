import { Controller, Get, Post, Body, Query } from '@nestjs/common';
import { CollectionPointsService } from './collection-points.service';

@Controller('collection-points')
export class CollectionPointsController {
  constructor(private readonly service: CollectionPointsService) {}

  @Get()
  async list(
    @Query('lat') lat?: string,
    @Query('lng') lng?: string,
    @Query('radius') radius?: string,
  ) {
    const hasCoords = lat !== undefined && lng !== undefined;
    if (hasCoords) {
      const latN = Number(lat);
      const lngN = Number(lng);
      const r = radius ? Math.max(0.1, Number(radius)) : 2;
      if (Number.isFinite(latN) && Number.isFinite(lngN)) {
        return this.service.listNearby(latN, lngN, r);
      }
    }
    return this.service.listAllActive();
  }

  // ⬇️ ESTA ROTA PRECISA EXISTIR
  @Post('seed')
  seed(@Body() dto: { items: { id?: string; name: string; lat: number; lng: number; address?: string; active?: boolean }[] }) {
    return this.service.createMany(dto.items ?? []);
  }

  @Post()
  createOne(@Body() dto: { id?: string; name: string; lat: number; lng: number; address?: string; active?: boolean }) {
    return this.service.createOne(dto);
  }
}
