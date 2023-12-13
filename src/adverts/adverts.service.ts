import { Injectable } from '@nestjs/common';
import { AdvertsModel } from './adverts.model';
import { InjectModel } from '@nestjs/sequelize';
import { AdvertsCreateDto } from './dto/Adverts.dto';
// import { Op } from 'sequelize';

@Injectable()
export class AdvertsService {
  constructor(
    @InjectModel(AdvertsModel)
    private advertsRepository: typeof AdvertsModel,
  ) {}

  async create(dto: AdvertsCreateDto): Promise<AdvertsModel> {
    return await this.advertsRepository.create({
      id_user_advert: dto.id_user_advert,
      advert_type: dto.advert_type,
      crypto_from: dto.crypto_from,
      crypto_to: dto.crypto_to,
      price: dto.price,
      limit: dto.limit,
      available: dto.available,
      payment_method: dto.payment_method,
      region: dto.region,
    });
  }

  async findAll(): Promise<AdvertsModel[]> {
    return await this.advertsRepository.findAll<AdvertsModel>();
  }

  async findById(id: number): Promise<AdvertsModel> {
    return await this.advertsRepository.findOne<AdvertsModel>({
      where: {
        id,
      },
    });
  }

  async findByCryptoFrom(crypto_from: number): Promise<AdvertsModel[]> {
    return await this.advertsRepository.findAll<AdvertsModel>({
      where: {
        crypto_from,
      },
    });
  }

  async findByCryptoTo(crypto_to: number): Promise<AdvertsModel[]> {
    return await this.advertsRepository.findAll<AdvertsModel>({
      where: {
        crypto_to,
      },
    });
  }

  async findByCryptoFromTo(
    crypto_from: number,
    crypto_to: number,
  ): Promise<AdvertsModel[]> {
    return await this.advertsRepository.findAll<AdvertsModel>({
      where: {
        crypto_from,
        crypto_to,
      },
    });
  }

  async remove(id: number): Promise<number> {
    return await this.advertsRepository.destroy({
      where: {
        id,
      },
    });
  }
}
