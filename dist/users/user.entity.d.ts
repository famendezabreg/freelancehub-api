import { Service } from '../services/services.entity';
export declare class User {
    id: number;
    email: string;
    name: string;
    password: string;
    services: Service[];
}
