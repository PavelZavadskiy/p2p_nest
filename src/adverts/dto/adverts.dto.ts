import { ApiProperty } from '@nestjs/swagger';
import { IsNumber } from 'class-validator';

export class AdvertsCreateDto {
  @ApiProperty()
  @IsNumber()
  id_owner: number;

  @ApiProperty()
  @IsNumber()
  id_advert_type: number;

  @ApiProperty()
  @IsNumber()
  id_crypto: number;

  @ApiProperty()
  @IsNumber()
  id_fiat: number;

  @ApiProperty()
  @IsNumber()
  priceType: number;

  @ApiProperty()
  @IsNumber()
  price: number;

  @ApiProperty()
  @IsNumber()
  pricePercent: number;

  @ApiProperty()
  @IsNumber()
  limitMin: number;

  @ApiProperty()
  @IsNumber()
  limitMax: number;

  @ApiProperty()
  @IsNumber()
  available: number;

  @ApiProperty()
  @IsNumber()
  commision: number;

  @ApiProperty()
  @IsNumber({}, { each: true })
  id_payment_methods: number[];

  @ApiProperty()
  @IsNumber()
  id_region: number;
}

export class AdvertsDto {
  @ApiProperty()
  id: number;

  @ApiProperty()
  id_owner: number;

  @ApiProperty()
  id_advert_type: number;

  @ApiProperty()
  id_crypto: number;

  @ApiProperty()
  id_fiat: number;

  @ApiProperty()
  @IsNumber()
  priceType: number;

  @ApiProperty()
  price: number;

  @ApiProperty()
  @IsNumber()
  pricePercent: number;

  @ApiProperty()
  @IsNumber()
  limitMin: number;

  @ApiProperty()
  @IsNumber()
  limitMax: number;

  @ApiProperty()
  available: number;

  @ApiProperty()
  commision: number;

  @ApiProperty()
  id_payment_methods: number[];

  @ApiProperty()
  id_region: number;

  @ApiProperty()
  is_active: boolean;

  // @ApiProperty()
  // createdAt: string;

  // @ApiProperty()
  // updatedAt: string;
}
