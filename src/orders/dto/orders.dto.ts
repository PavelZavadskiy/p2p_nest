import { ApiProperty } from '@nestjs/swagger';
import { IsNumber } from 'class-validator';

export class OrdersCreateDto {
  @ApiProperty()
  @IsNumber()
  id_advert: number;

  @ApiProperty()
  @IsNumber()
  id_user_client: number;

  @ApiProperty()
  @IsNumber()
  amount: number;

  @ApiProperty()
  @IsNumber()
  payment_method: number;
}
