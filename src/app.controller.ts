import { Controller, Post, Req } from "@nestjs/common";
import { Request } from "express";
import { AppService } from "./app.service";

@Controller()
export class AppController {
    constructor(private readonly appService: AppService) {}

    @Post()
    getHello(@Req() request: Request): string {
        return this.appService.getHello(request);
    }
}
