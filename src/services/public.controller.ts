import { Controller, Get } from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { ServicesService } from './services.service';

@ApiTags('public')
@Controller('public')
export class PublicController {
  constructor(private readonly servicesService: ServicesService) {}

  @ApiOperation({ summary: 'Ver todos los servicios disponibles (público)' })
  @Get('services')
  findAll() {
    return this.servicesService.findAll();
  }
}