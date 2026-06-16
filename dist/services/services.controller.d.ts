import { ServicesService } from './services.service';
export declare class CreateServiceDto {
    title: string;
    category: string;
    description: string;
    price: number;
}
export declare class ServicesController {
    private readonly servicesService;
    constructor(servicesService: ServicesService);
    create(dto: CreateServiceDto, req: any): Promise<import("./services.entity").Service>;
}
