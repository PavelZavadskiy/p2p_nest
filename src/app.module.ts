import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { AdvertsModule } from './adverts/adverts.module';
import { OrdersModule } from './orders/orders.module';
import { TestModule } from './test/test.module';

import { SocketModule } from './socket/socket.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `.env.${process.env.NODE_ENV as string}`,
    }),
    AdvertsModule,
    OrdersModule,

    //TODO For tests
    TestModule,
    SocketModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
