import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { OrdersModel } from './orders.model';
import { OrdersCreateDto } from './dto/orders.dto';
import { AdvertsService } from 'src/adverts/adverts.service';
import { OrderStatuses, OrderStatusesType } from './constants/order-statuses';

@Injectable()
export class OrdersService {
  constructor(
    @InjectModel(OrdersModel)
    private ordersRepository: typeof OrdersModel,
    @Inject(AdvertsService)
    private advertsService: AdvertsService,
  ) {}

  //TODO Додати перевірку що сумма знаходиться поміж мін та макс
  //TODO Придумати як будуть задаватися статуси, чи enum, чи зберігати в таблиці з вказівником наступного кроку, бо може з'являться нові статуси
  //TODO [create, approved, advert_paid, client_paid, close]
  //TODO Придумати як буде задаватися payment_method. Вони можуть додаватися і видалятися, тож теж у таблиці потрібно зберігати їх.
  async create(dto: OrdersCreateDto): Promise<OrdersModel> {
    const advert = await this.advertsService.findById(dto.id_advert);
    if (!advert) {
      throw new HttpException(
        'Wrong advert id',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }

    return await this.ordersRepository.create({
      ...dto,
      id_owner: advert.id_owner,
      id_crypto: advert.id_crypto,
      id_fiat: advert.id_fiat,
      price: advert.price,
      status: 0,
      id_advert_type: advert.id_advert_type,
    });
  }

  async findAll(): Promise<OrdersModel[]> {
    return await this.ordersRepository.findAll<OrdersModel>();
  }

  async findById(id: number): Promise<OrdersModel> {
    return await this.ordersRepository.findOne<OrdersModel>({
      where: {
        id,
      },
    });
  }

  async findByClient(id_client: number): Promise<OrdersModel[]> {
    return await this.ordersRepository.findAll<OrdersModel>({
      where: {
        id_client,
      },
    });
  }

  async findByOwner(id_owner: number): Promise<OrdersModel[]> {
    return await this.ordersRepository.findAll<OrdersModel>({
      where: {
        id_owner,
      },
    });
  }

  // [create, approved, advert_paid, client_paid, close]

  async setStatus(id: number, status: number): Promise<OrdersModel> {
    const result = await this.ordersRepository.update(
      {
        status,
      },
      {
        where: {
          id,
        },
      },
    );

    if (!result) {
      throw new HttpException(
        'Wrong advert id',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }

    return await this.findById(id);
  }

  async setStatusApproved(id: number): Promise<OrdersModel> {
    return await this.setStatus(id, 1);
  }

  async setStatusRejected(id: number): Promise<OrdersModel> {
    return await this.setStatus(id, 2);
  }

  async setStatusOwnerPaid(id: number): Promise<OrdersModel> {
    return await this.setStatus(id, 3);
  }

  async setStatusApprovedOwnerPaid(id: number): Promise<OrdersModel> {
    return await this.setStatus(id, 4);
  }

  async setStatusRejectedOwnerPaid(id: number): Promise<OrdersModel> {
    return await this.setStatus(id, 5);
  }

  async setStatusClientPaid(id: number): Promise<OrdersModel> {
    return await this.setStatus(id, 6);
  }

  async setStatusApprovedClientPaid(id: number): Promise<OrdersModel> {
    return await this.setStatus(id, 7);
  }

  async setStatusRejectedClientPaid(id: number): Promise<OrdersModel> {
    return await this.setStatus(id, 8);
  }

  async setStatusClose(id: number): Promise<OrdersModel> {
    return await this.setStatus(id, 9);
  }

  async getStatatuses(): Promise<OrderStatusesType[]> {
    return OrderStatuses;
  }

  //TODO обов'язково видалити після тестів
  async removeTable() {
    this.ordersRepository.sync({ force: true });
  }
}
