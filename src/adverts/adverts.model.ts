import { ApiProperty } from '@nestjs/swagger';
import { Column, DataType, Model, Table } from 'sequelize-typescript';

// enum AdvertType {
//   Buying = 'Buying',
//   Selling = 'Selling',
// }

@Table({ tableName: 'adverts' })
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
  id_user_advert: number;

  @ApiProperty()
  @Column({
    type: DataType.INTEGER,
  })
  advert_type: number;

  @ApiProperty()
  @Column({
    type: DataType.INTEGER,
  })
  crypto_from: number;

  @ApiProperty()
  @Column({
    type: DataType.INTEGER,
  })
  crypto_to: number;

  @ApiProperty()
  @Column({
    type: DataType.DECIMAL(24, 8),
  })
  price: number;

  @ApiProperty()
  @Column({
    type: DataType.DECIMAL(24, 8),
  })
  limit: number;

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

  @ApiProperty()
  @Column({
    type: DataType.INTEGER,
  })
  payment_method: number; //TODO Тут скоріше треба передавати массив можливих оплат

  @ApiProperty()
  @Column({
    type: DataType.INTEGER,
  })
  region: number;
}
