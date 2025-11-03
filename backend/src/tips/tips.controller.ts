import { Controller, Get } from '@nestjs/common';
import { TipsService } from './tips.service';

@Controller('tips')
export class TipsController {
  constructor(private readonly s: TipsService) {}
  @Get() list() { return this.s.list(); }
}
