import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Service } from './services.entity';
import { ServicesService } from './services.service';
import { ServicesController } from './services.controller';
import { PublicController } from './public.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Service])],
  providers: [ServicesService],
  controllers: [ServicesController, PublicController],
})
export class ServicesModule {}