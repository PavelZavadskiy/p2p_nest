import { Injectable } from '@nestjs/common';
import { AdvertsModel } from './adverts.model';
import { InjectModel } from '@nestjs/sequelize';
import { AdvertsCreateDto, AdvertsDto } from './dto/Adverts.dto';
// import { Op } from 'sequelize';

@Injectable()
export class AdvertsService {
  constructor(
    @InjectModel(AdvertsModel)
    private advertsRepository: typeof AdvertsModel,
  ) {}

  async create(dto: AdvertsCreateDto): Promise<AdvertsDto> {
    const result = await this.advertsRepository.create({
      ...dto,
      id_payment_methods: dto.id_payment_methods.join('-'),
      is_active: true,
    });
    return {
      ...result.dataValues,
      id_payment_methods: result.dataValues.id_payment_methods
        .split('-')
        .map((item) => Number(item)),
    };
  }

  async findAll(): Promise<AdvertsDto[]> {
    const result = await this.advertsRepository.findAll<AdvertsModel>();
    return result.map((item) => ({
      ...item.dataValues,
      id_payment_methods: item.dataValues.id_payment_methods
        .split('-')
        .map((item) => Number(item)),
    }));
  }

  async findById(id: number): Promise<AdvertsDto> {
    const result = await this.advertsRepository.findOne<AdvertsModel>({
      where: {
        id,
      },
    });
    return {
      ...result.dataValues,
      id_payment_methods: result.dataValues.id_payment_methods
        .split('-')
        .map((item) => Number(item)),
    };
  }

  async findByCrypto(id_crypto: number): Promise<AdvertsDto[]> {
    const result = await this.advertsRepository.findAll<AdvertsModel>({
      where: {
        id_crypto,
      },
    });
    return result.map((item) => ({
      ...item.dataValues,
      id_payment_methods: item.dataValues.id_payment_methods
        .split('-')
        .map((item) => Number(item)),
    }));
  }

  async findByFiat(id_fiat: number): Promise<AdvertsDto[]> {
    const result = await this.advertsRepository.findAll<AdvertsModel>({
      where: {
        id_fiat,
      },
    });
    return result.map((item) => ({
      ...item.dataValues,
      id_payment_methods: item.dataValues.id_payment_methods
        .split('-')
        .map((item) => Number(item)),
    }));
  }

  async findByCryptoAndFiat(
    id_crypto: number,
    id_fiat: number,
  ): Promise<AdvertsDto[]> {
    const result = await this.advertsRepository.findAll<AdvertsModel>({
      where: {
        id_crypto,
        id_fiat,
      },
    });
    return result.map((item) => ({
      ...item.dataValues,
      id_payment_methods: item.dataValues.id_payment_methods
        .split('-')
        .map((item) => Number(item)),
    }));
  }

  async findByOwner(id_owner: number): Promise<AdvertsDto[]> {
    const result = await this.advertsRepository.findAll<AdvertsModel>({
      where: {
        id_owner,
      },
    });
    return result.map((item) => ({
      ...item.dataValues,
      id_payment_methods: item.dataValues.id_payment_methods
        .split('-')
        .map((item) => Number(item)),
    }));
  }

  async remove(id: number): Promise<number> {
    return await this.advertsRepository.destroy({
      where: {
        id,
      },
    });
  }
}
