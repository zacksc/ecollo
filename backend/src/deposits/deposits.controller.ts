import { Body, Controller, Post } from '@nestjs/common';
import { DepositsService } from './deposits.service';

@Controller('deposits')
export class DepositsController {
  constructor(private readonly service: DepositsService) {}

  @Post()
  create(
    @Body()
    dto: {
      publicId: string;
      collectionPointId: string;
      materialId: string;
      quantity: number;
    },
  ) {
    return this.service.create(dto);
  }
}
