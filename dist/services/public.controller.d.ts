import { ServicesService } from './services.service';
export declare class PublicController {
    private readonly servicesService;
    constructor(servicesService: ServicesService);
    findAll(): Promise<any[]>;
}
