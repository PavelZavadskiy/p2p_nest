import {
  Body,
  Controller,
  Delete,
  // Delete,
  Get,
  HttpCode,
  HttpException,
  HttpStatus,
  Param,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { OrdersService } from './orders.service';
import { OrdersModel } from './orders.model';
import { OrdersCreateDto } from './dto/orders.dto';

@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @ApiOperation({ summary: 'Create new order' })
  @ApiResponse({
    status: 201,
    type: OrdersModel,
  })
  @UsePipes(new ValidationPipe())
  @Post()
  @HttpCode(201)
  async create(@Body() dto: OrdersCreateDto) {
    return this.ordersService.create(dto);
  }

  @ApiOperation({ summary: 'Get all orders' })
  @ApiResponse({
    status: 200,
    type: [OrdersModel],
  })
  @Get()
  async findAll() {
    return await this.ordersService.findAll();
  }

  @ApiOperation({ summary: 'Get order by id' })
  @ApiResponse({
    status: 200,
    type: OrdersModel,
  })
  @Get(':id')
  async findById(@Param('id') id: number) {
    const result = await this.ordersService.findById(id);
    if (!result) {
      throw new HttpException('Order not found', HttpStatus.NOT_FOUND);
    }
    return result;
  }

  @ApiOperation({ summary: 'Set status Approved' })
  @ApiResponse({
    status: 200,
    type: OrdersModel,
  })
  @UsePipes(new ValidationPipe())
  @Post('status-approved/:id')
  @HttpCode(200)
  async setStatusApproved(@Param('id') id: number) {
    const result = await this.ordersService.setStatusApproved(id);
    if (!result) {
      throw new HttpException('Status update error', HttpStatus.NOT_FOUND);
    }
    return result;
  }

  @ApiOperation({ summary: 'Set status Rejected' })
  @ApiResponse({
    status: 200,
    type: OrdersModel,
  })
  @UsePipes(new ValidationPipe())
  @Post('status-rejected/:id')
  @HttpCode(200)
  async setStatusRejected(@Param('id') id: number) {
    const result = await this.ordersService.setStatusRejected(id);
    if (!result) {
      throw new HttpException('Status update error', HttpStatus.NOT_FOUND);
    }
    return result;
  }

  @ApiOperation({ summary: 'Set status Owner Paid' })
  @ApiResponse({
    status: 200,
    type: OrdersModel,
  })
  @UsePipes(new ValidationPipe())
  @Post('status-owner-paid/:id')
  @HttpCode(200)
  async setStatusOwnerPaid(@Param('id') id: number) {
    const result = await this.ordersService.setStatusOwnerPaid(id);
    if (!result) {
      throw new HttpException('Status update error', HttpStatus.NOT_FOUND);
    }
    return result;
  }

  @ApiOperation({ summary: 'Set status Approved Owner Paid' })
  @ApiResponse({
    status: 200,
    type: OrdersModel,
  })
  @UsePipes(new ValidationPipe())
  @Post('status-approved-owner-paid/:id')
  @HttpCode(200)
  async setStatusApprovedOwnerPaid(@Param('id') id: number) {
    const result = await this.ordersService.setStatusApprovedOwnerPaid(id);
    if (!result) {
      throw new HttpException('Status update error', HttpStatus.NOT_FOUND);
    }
    return result;
  }

  @ApiOperation({ summary: 'Set status Rejected Owner Paid' })
  @ApiResponse({
    status: 200,
    type: OrdersModel,
  })
  @UsePipes(new ValidationPipe())
  @Post('status-rejected-owner-paid/:id')
  @HttpCode(200)
  async setStatusRejectedOwnerPaid(@Param('id') id: number) {
    const result = await this.ordersService.setStatusRejectedOwnerPaid(id);
    if (!result) {
      throw new HttpException('Status update error', HttpStatus.NOT_FOUND);
    }
    return result;
  }

  @ApiOperation({ summary: 'Set status Client Paid' })
  @ApiResponse({
    status: 200,
    type: OrdersModel,
  })
  @UsePipes(new ValidationPipe())
  @Post('status-client-paid/:id')
  @HttpCode(200)
  async setStatusClientPaid(@Param('id') id: number) {
    const result = await this.ordersService.setStatusClientPaid(id);
    if (!result) {
      throw new HttpException('Status update error', HttpStatus.NOT_FOUND);
    }
    return result;
  }

  @ApiOperation({ summary: 'Set status Approved Client Paid' })
  @ApiResponse({
    status: 200,
    type: OrdersModel,
  })
  @UsePipes(new ValidationPipe())
  @Post('status-approved-client-paid/:id')
  @HttpCode(200)
  async setStatusApprovedClientPaid(@Param('id') id: number) {
    const result = await this.ordersService.setStatusApprovedClientPaid(id);
    if (!result) {
      throw new HttpException('Status update error', HttpStatus.NOT_FOUND);
    }
    return result;
  }

  @ApiOperation({ summary: 'Set status Approved Client Paid' })
  @ApiResponse({
    status: 200,
    type: OrdersModel,
  })
  @UsePipes(new ValidationPipe())
  @Post('status-rejected-client-paid/:id')
  @HttpCode(200)
  async setStatusRejectedClientPaid(@Param('id') id: number) {
    const result = await this.ordersService.setStatusRejectedClientPaid(id);
    if (!result) {
      throw new HttpException('Status update error', HttpStatus.NOT_FOUND);
    }
    return result;
  }

  @ApiOperation({ summary: 'Set status close' })
  @ApiResponse({
    status: 200,
    type: OrdersModel,
  })
  @UsePipes(new ValidationPipe())
  @Post('status-close/:id')
  @HttpCode(200)
  async setStatusClose(@Param('id') id: number) {
    const result = await this.ordersService.setStatusClose(id);
    if (!result) {
      throw new HttpException('Status update error', HttpStatus.NOT_FOUND);
    }
    return result;
  }

  @ApiOperation({ summary: 'Get statuses' })
  @ApiResponse({
    status: 200,
  })
  @Get('/statuses/all')
  async getStatatuses() {
    return await this.ordersService.getStatatuses();
  }

  //TODO обов'язково видалити після тестів
  @Delete()
  async removeTable() {
    await this.ordersService.removeTable();
  }
}
