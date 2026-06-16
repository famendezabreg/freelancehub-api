import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Service } from './services.entity';
import { User } from '../users/user.entity';

@Injectable()
export class ServicesService {
  constructor(
    @InjectRepository(Service)
    private servicesRepository: Repository<Service>,
  ) {}

  async create(data: {
    title: string;
    category: string;
    description: string;
    price: number;
  }, provider: User): Promise<Service> {
    const service = this.servicesRepository.create({ ...data, provider });
    return this.servicesRepository.save(service);
  }

  async findAll(): Promise<any[]> {
    const services = await this.servicesRepository.find();
    return services.map(s => ({
      id: s.id,
      title: s.title,
      category: s.category,
      price: s.price,
      freelancer: s.provider.name,
    }));
  }
}