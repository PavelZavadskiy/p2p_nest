import { Module } from '@nestjs/common';
import { OrdersController } from './orders.controller';
import { OrdersService } from './orders.service';
import { DatabaseModule } from 'src/database/database.module';
import { OrdersModel } from './orders.model';
import { getModelToken } from '@nestjs/sequelize';
import { AdvertsModule } from 'src/adverts/adverts.module';

@Module({
  imports: [DatabaseModule, AdvertsModule],
  controllers: [OrdersController],
  providers: [
    OrdersService,
    {
      provide: getModelToken(OrdersModel),
      useValue: OrdersModel,
    },
  ],
})
export class OrdersModule {}
