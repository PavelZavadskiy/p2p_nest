import { ApiProperty } from '@nestjs/swagger';
import { Column, DataType, Model, Table } from 'sequelize-typescript';

@Table({ tableName: 'orders' })
export class OrdersModel extends Model {
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
  id_advert: number;

  @ApiProperty()
  @Column({
    type: DataType.INTEGER,
  })
  id_user_advert: number;

  @ApiProperty()
  @Column({
    type: DataType.INTEGER,
  })
  id_user_client: number;

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
  amount: number;

  @ApiProperty()
  @Column({
    type: DataType.INTEGER,
  })
  status: number;

  @ApiProperty()
  @Column({
    type: DataType.INTEGER,
  })
  advert_type: number;

  @ApiProperty()
  @Column({
    type: DataType.INTEGER,
  })
  payment_method: number;
}
