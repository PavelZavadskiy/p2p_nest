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
  id_owner: number;

  @ApiProperty()
  @Column({
    type: DataType.INTEGER,
  })
  id_client: number;

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

  @ApiProperty()
  @Column({
    type: DataType.DECIMAL(24, 8),
  })
  price: number;

  @ApiProperty()
  @Column({
    type: DataType.DECIMAL(24, 8),
  })
  amount_crypto: number;

  @ApiProperty()
  @Column({
    type: DataType.DECIMAL(24, 8),
  })
  amount_fiat: number;

  @ApiProperty()
  @Column({
    type: DataType.INTEGER,
  })
  status: number;

  @ApiProperty()
  @Column({
    type: DataType.INTEGER,
  })
  id_advert_type: number;

  @ApiProperty()
  @Column({
    type: DataType.INTEGER,
  })
  id_payment_method: number;
}
