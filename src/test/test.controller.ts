import {
  Body,
  Controller,
  Get,
  HttpCode,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';

import { users } from './test-users';
import { fiats } from './fiats';
import { cryptos } from './cryptos';
import { payment_methods } from './payment-methods';
import { regions } from './regions';
import { advert_types } from './advert-types';

type UserTest = {
  id: number;
  email: string;
  avatar: string;
  balance_usdt: number;
  balance_btc: number;
};

class UpdateBalance {
  id: number;
  amount: number;
}

@Controller('test')
export class TestController {
  @HttpCode(200)
  @Get('users')
  async getAllUsers() {
    return users;
  }

  @Post('users/minus-balance-usdt')
  @HttpCode(200)
  async minusBalanceUsdt(@Body() dto: UpdateBalance): Promise<UserTest> {
    users[dto.id].balance_usdt -= dto.amount;
    return users[dto.id];
  }

  @UsePipes(new ValidationPipe())
  @Post('users/minus-balance-btc')
  @HttpCode(200)
  async minusBalanceBtc(@Body() dto: UpdateBalance): Promise<UserTest> {
    users[dto.id].balance_btc -= dto.amount;
    return users[dto.id];
  }

  @Post('users/minus-balance-eth')
  @HttpCode(200)
  async minusBalanceEth(@Body() dto: UpdateBalance): Promise<UserTest> {
    users[dto.id].balance_eth -= dto.amount;
    return users[dto.id];
  }

  @Post('users/minus-balance-dai')
  @HttpCode(200)
  async minusBalanceDai(@Body() dto: UpdateBalance): Promise<UserTest> {
    users[dto.id].balance_dai -= dto.amount;
    return users[dto.id];
  }

  @Post('users/plus-balance-usdt')
  @HttpCode(200)
  async plusBalanceUsdt(@Body() dto: UpdateBalance): Promise<UserTest> {
    users[dto.id].balance_usdt += dto.amount;
    return users[dto.id];
  }

  @Post('users/plus-balance-btc')
  @HttpCode(200)
  async plusBalanceBtc(@Body() dto: UpdateBalance): Promise<UserTest> {
    users[dto.id].balance_btc += dto.amount;
    return users[dto.id];
  }

  @Post('users/plus-balance-eth')
  @HttpCode(200)
  async plusBalanceEth(@Body() dto: UpdateBalance): Promise<UserTest> {
    users[dto.id].balance_eth += dto.amount;
    return users[dto.id];
  }

  @Post('users/plus-balance-dai')
  @HttpCode(200)
  async plusBalanceDai(@Body() dto: UpdateBalance): Promise<UserTest> {
    users[dto.id].balance_dai += dto.amount;
    return users[dto.id];
  }

  @HttpCode(200)
  @Get('fiats')
  async getAllFiats() {
    return fiats;
  }

  @HttpCode(200)
  @Get('cryptos')
  async getAllCryptos() {
    return cryptos;
  }

  @HttpCode(200)
  @Get('payment-methods')
  async getAllPaymentMethods() {
    return payment_methods;
  }

  @HttpCode(200)
  @Get('regions')
  async getAllRegions() {
    return regions;
  }

  @HttpCode(200)
  @Get('advert-types')
  async getAdvertTypes() {
    return advert_types;
  }
}
