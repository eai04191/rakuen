import { Controller, HttpCode, Post, Req } from "@nestjs/common";
import { Request } from "express";
import { SquadlistService } from "./squadlist.service";

@Controller("squadlist")
export class SquadlistController {
    constructor(private squadlistService: SquadlistService) {}

    @Post()
    @HttpCode(200)
    getSquadlist(@Req() req: Request) {
        return this.squadlistService.getSquadlist(req);
    }
}
