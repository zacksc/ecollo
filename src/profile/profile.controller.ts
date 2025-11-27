import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ProfileService } from './profile.service';

@Controller('profile')
export class ProfileController {
  constructor(private readonly service: ProfileService) {}

  // Cria/atualiza perfil leve (sem auth) com base no publicId do app
  @Post()
  upsert(@Body() dto: { publicId: string; name?: string }) {
    return this.service.upsert(dto.publicId, dto.name);
  }

  // Retorna dados do perfil + últimos depósitos e resgates
  @Get(':publicId')
  get(@Param('publicId') publicId: string) {
    return this.service.getByPublicId(publicId);
  }
}
