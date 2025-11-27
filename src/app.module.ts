import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from './prisma/prisma.module';
import { MaterialsModule } from './materials/materials.module';
import { TipsModule } from './tips/tips.module';
import { ProfileModule } from './profile/profile.module';
import { RewardsModule } from './rewards/rewards.module';
import { CollectionPointsModule } from './collection-points/collection-points.module';
import { DepositsModule } from './deposits/deposits.module';
import { HealthController } from './health/health.controller';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    PrismaModule,
    MaterialsModule,
    TipsModule,
    ProfileModule,
    RewardsModule,
    CollectionPointsModule,
    DepositsModule,
  ],
  controllers: [HealthController],
})
export class AppModule {}
