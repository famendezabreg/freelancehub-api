import { Controller, Post, Body, UseGuards, Request } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiTags, ApiBearerAuth, ApiOperation } from '@nestjs/swagger';
import { IsString, IsNumber } from 'class-validator';
import { ServicesService } from './services.service';

export class CreateServiceDto {
  @IsString()
  title!: string;

  @IsString()
  category!: string;

  @IsString()
  description!: string;

  @IsNumber()
  price!: number;
}

@ApiTags('services')
@ApiBearerAuth()
@UseGuards(AuthGuard('jwt'))
@Controller('services')
export class ServicesController {
  constructor(private readonly servicesService: ServicesService) {}

  @ApiOperation({ summary: 'Publicar un servicio (requiere JWT)' })
  @Post()
  create(@Body() dto: CreateServiceDto, @Request() req) {
    return this.servicesService.create(dto, req.user);
  }
}