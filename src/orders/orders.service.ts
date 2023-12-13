import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { OrdersModel } from './orders.model';
import { OrdersCreateDto } from './dto/orders.dto';
import { AdvertsService } from 'src/adverts/adverts.service';

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
      id_advert: dto.id_advert,
      id_user_advert: advert.id_user_advert,
      id_user_client: dto.id_user_client,
      crypto_from: advert.crypto_from,
      crypto_to: advert.crypto_to,
      price: advert.price,
      amount: dto.amount,
      status: 0,
      advert_type: advert.advert_type,
      payment_method: 0,
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

  async findByClientUser(id_user_client: number): Promise<OrdersModel[]> {
    return await this.ordersRepository.findAll<OrdersModel>({
      where: {
        id_user_client,
      },
    });
  }

  async findByAdvertUser(id_user_advert: number): Promise<OrdersModel[]> {
    return await this.ordersRepository.findAll<OrdersModel>({
      where: {
        id_user_advert,
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

  async setStatusAdvertPaid(id: number): Promise<OrdersModel> {
    return await this.setStatus(id, 2);
  }

  async setStatusClientPaid(id: number): Promise<OrdersModel> {
    return await this.setStatus(id, 3);
  }

  async setStatusClose(id: number): Promise<OrdersModel> {
    return await this.setStatus(id, 4);
  }

  //TODO Поки тестова ф-ція яка повертає лейбли статусів, треба буде переробити на таблицю
  async getStatatuses(): Promise<string[]> {
    return ['Created', 'Approved', 'Advert Paid', 'Client Paid', 'Closed'];
  }

  //TODO обов'язково видалити після тестів
  async removeTable() {
    this.ordersRepository.sync({ force: true });
  }
}
