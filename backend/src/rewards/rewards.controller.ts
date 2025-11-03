import { Controller, Get } from '@nestjs/common';
import { RewardsService } from './rewards.service';

@Controller('rewards')
export class RewardsController {
  constructor(private readonly service: RewardsService) {}

  @Get()
  list() {
    return this.service.listActive();
  }
}
