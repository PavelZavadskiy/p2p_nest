import { ApiProperty } from '@nestjs/swagger';
import { IsNumber } from 'class-validator';

export class OrdersCreateDto {
  @ApiProperty()
  @IsNumber()
  id_advert: number;

  @ApiProperty()
  @IsNumber()
  id_client: number;

  @ApiProperty()
  @IsNumber()
  amount_crypto: number;

  @ApiProperty()
  @IsNumber()
  amount_fiat: number;

  @ApiProperty()
  @IsNumber()
  id_payment_method: number;
}
