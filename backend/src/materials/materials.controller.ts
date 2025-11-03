import { Controller, Get, Post, Body } from '@nestjs/common';
import { MaterialsService } from './materials.service';

@Controller('materials')
export class MaterialsController {
  constructor(private readonly s: MaterialsService) {}

  @Get()
  list() { return this.s.findAll(); }

  // cria/atualiza 1 material
  @Post()
  createOne(@Body() dto: { name: string; unit: string; pointsPerUnit: number }) {
    return this.s.createOne(dto);
  }

  // cria/atualiza vários de uma vez
  @Post('seed')
  seed(@Body() dto: { items: { name: string; unit: string; pointsPerUnit: number }[] }) {
    return this.s.createMany(dto.items ?? []);
  }
}
