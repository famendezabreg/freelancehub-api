"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PublicController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const services_service_1 = require("./services.service");
let PublicController = class PublicController {
    servicesService;
    constructor(servicesService) {
        this.servicesService = servicesService;
    }
    findAll() {
        return this.servicesService.findAll();
    }
};
exports.PublicController = PublicController;
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Ver todos los servicios disponibles (público)' }),
    (0, common_1.Get)('services'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], PublicController.prototype, "findAll", null);
exports.PublicController = PublicController = __decorate([
    (0, swagger_1.ApiTags)('public'),
    (0, common_1.Controller)('public'),
    __metadata("design:paramtypes", [services_service_1.ServicesService])
], PublicController);
//# sourceMappingURL=public.controller.js.map