import { ApiProperty } from '@nestjs/swagger';
import { DataTypes } from 'sequelize';
import { Column, DataType, Model, Table } from 'sequelize-typescript';

// enum AdvertType {
//   Buying = 'Buying',
//   Selling = 'Selling',
// }

@Table({ tableName: 'ads' })
export class AdvertsModel extends Model {
  @ApiProperty()
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty()
  @Column({
    type: DataType.INTEGER,
  })
  id_owner: number;

  @ApiProperty()
  @Column({
    type: DataType.INTEGER,
  })
  id_advert_type: number;

  @ApiProperty()
  @Column({
    type: DataType.INTEGER,
  })
  id_crypto: number;

  @ApiProperty()
  @Column({
    type: DataType.INTEGER,
  })
  id_fiat: number;

  //0-Fixed 1-Floating
  @ApiProperty()
  @Column({
    type: DataType.INTEGER,
  })
  priceType: number;

  @ApiProperty()
  @Column({
    type: DataType.DECIMAL(24, 8),
  })
  price: number;

  @ApiProperty()
  @Column({
    type: DataType.INTEGER,
  })
  pricePercent: number;

  @ApiProperty()
  @Column({
    type: DataType.DECIMAL(24, 8),
  })
  limitMin: number;

  @ApiProperty()
  @Column({
    type: DataType.DECIMAL(24, 8),
  })
  limitMax: number;

  @ApiProperty()
  @Column({
    type: DataType.DECIMAL(24, 8),
  })
  available: number;

  @ApiProperty()
  @Column({
    type: DataType.DECIMAL(24, 8),
  })
  commision: number;

  // SQL не зберігає масиви тому будемо зберігати як string з сепаратором '-'
  @ApiProperty()
  @Column({
    type: DataTypes.STRING,
  })
  id_payment_methods: string;

  @ApiProperty()
  @Column({
    type: DataType.INTEGER,
  })
  id_region: number;

  @ApiProperty()
  @Column({
    type: DataType.BOOLEAN,
  })
  is_active: boolean;
}
