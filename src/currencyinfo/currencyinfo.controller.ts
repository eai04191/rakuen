import { Controller, HttpCode, Post, Req } from "@nestjs/common";
import { Request } from "express";
import { CurrencyinfoService } from "./currencyinfo.service";

@Controller("currencyinfo")
export class CurrencyinfoController {
    constructor(private currencyinfoService: CurrencyinfoService) {}

    @Post()
    @HttpCode(200)
    getCurrencyinfo(@Req() req: Request) {
        return this.currencyinfoService.getCurrencyinfo(req);
    }
}
