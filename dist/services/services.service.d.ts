import { Repository } from 'typeorm';
import { Service } from './services.entity';
import { User } from '../users/user.entity';
export declare class ServicesService {
    private servicesRepository;
    constructor(servicesRepository: Repository<Service>);
    create(data: {
        title: string;
        category: string;
        description: string;
        price: number;
    }, provider: User): Promise<Service>;
    findAll(): Promise<any[]>;
}
