import { Controller, HttpCode, Post, Req } from "@nestjs/common";
import { Request } from "express";
import { PclistService } from "./pclist.service";

@Controller("pclist")
export class PclistController {
    constructor(private pclistService: PclistService) {}

    @Post()
    @HttpCode(200)
    getPclist(@Req() req: Request) {
        return this.pclistService.getPclist(req);
    }
}
