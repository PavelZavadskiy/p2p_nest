import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpException,
  HttpStatus,
  Param,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { AdvertsService } from './adverts.service';
import { AdvertsModel } from './adverts.model';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { AdvertsCreateDto } from './dto/Adverts.dto';

@Controller('adverts')
export class AdvertsController {
  constructor(private readonly advertsService: AdvertsService) {}

  @ApiOperation({ summary: 'Get all adverts' })
  @ApiResponse({
    status: 200,
    type: [AdvertsModel],
  })
  @Get()
  async findAll() {
    return await this.advertsService.findAll();
  }

  @ApiOperation({ summary: 'Get advert by id' })
  @ApiResponse({
    status: 200,
    type: AdvertsModel,
  })
  @Get(':id')
  async findById(@Param('id') id: number) {
    const result = await this.advertsService.findById(id);
    if (!result) {
      throw new HttpException('Advert not found', HttpStatus.NOT_FOUND);
    }
    return result;
  }

  @ApiOperation({ summary: 'Create new advert' })
  @ApiResponse({
    status: 201,
    type: AdvertsModel,
  })
  @UsePipes(new ValidationPipe())
  @Post()
  @HttpCode(201)
  async create(@Body() dto: AdvertsCreateDto) {
    return this.advertsService.create(dto);
  }

  @ApiOperation({ summary: 'Remove advert' })
  @ApiResponse({
    status: 200,
  })
  @Delete(':id')
  async remove(@Param('id') id: number) {
    const result = await this.advertsService.remove(id);
    if (result === 0) {
      throw new HttpException(
        'Deletion error',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
    return { mesage: 'Record deleted' };
  }
}
