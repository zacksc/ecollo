import { Module } from '@nestjs/common';
import { CollectionPointsController } from './collection-points.controller';
import { CollectionPointsService } from './collection-points.service';

@Module({
  controllers: [CollectionPointsController],
  providers: [CollectionPointsService],
  exports: [CollectionPointsService],
})
export class CollectionPointsModule {}
