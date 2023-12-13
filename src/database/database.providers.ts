import { Sequelize } from 'sequelize-typescript';

import * as dotenv from 'dotenv';
import { AdvertsModel } from 'src/adverts/adverts.model';
import { OrdersModel } from 'src/orders/orders.model';
dotenv.config();

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: 'mysql',
        host: process.env.DBHOST,
        port: Number(process.env.DBPORT),
        username: process.env.DBUSER,
        password: process.env.DBPASSWORD,
        database: process.env.DBNAME,
        dialectOptions: { decimalNumbers: true },
      });
      sequelize.addModels([AdvertsModel, OrdersModel]);
      //{ force: true }
      await sequelize.sync();
      return sequelize;
    },
  },
];
