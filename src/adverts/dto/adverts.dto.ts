import { ApiProperty } from '@nestjs/swagger';
import { IsNumber } from 'class-validator';

export class AdvertsCreateDto {
  @ApiProperty()
  @IsNumber()
  id_user_advert: number;

  @ApiProperty()
  @IsNumber()
  advert_type: number;

  @ApiProperty()
  @IsNumber()
  crypto_from: number;

  @ApiProperty()
  @IsNumber()
  crypto_to: number;

  @ApiProperty()
  @IsNumber()
  price: number;

  @ApiProperty()
  @IsNumber()
  limit: number;

  @ApiProperty()
  @IsNumber()
  available: number;

  @ApiProperty()
  @IsNumber()
  payment_method: number;

  @ApiProperty()
  @IsNumber()
  region: number;
}
