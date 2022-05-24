import { Controller, HttpCode, Post, Req } from "@nestjs/common";
import { Request } from "express";
import { ServerlistService } from "./serverlist.service";

@Controller("serverlist")
export class ServerlistController {
    constructor(private serverlistService: ServerlistService) {}

    @Post()
    @HttpCode(200)
    getServerlist(@Req() req: Request) {
        return this.serverlistService.getServerlist(req);
    }
}
