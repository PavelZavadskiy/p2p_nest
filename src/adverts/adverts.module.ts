import { Module } from '@nestjs/common';
import { AdvertsController } from './adverts.controller';
import { AdvertsService } from './adverts.service';
import { DatabaseModule } from 'src/database/database.module';
import { AdvertsModel } from './adverts.model';
import { getModelToken } from '@nestjs/sequelize';

@Module({
  imports: [DatabaseModule],
  controllers: [AdvertsController],
  providers: [
    AdvertsService,
    {
      provide: getModelToken(AdvertsModel),
      useValue: AdvertsModel,
    },
  ],
  exports: [AdvertsService],
})
export class AdvertsModule {}
