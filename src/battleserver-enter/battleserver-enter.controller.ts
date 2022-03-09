import { Controller, HttpCode, Post, Req } from "@nestjs/common";
import { Request } from "express";
import { BattleserverEnterService } from "./battleserver-enter.service";

@Controller("battleserver_enter")
export class BattleserverEnterController {
    constructor(private battleserverEnterService: BattleserverEnterService) {}

    @Post()
    @HttpCode(200)
    getInvenItemlist(@Req() req: Request) {
        return this.battleserverEnterService.getBattleserverEnter(req);
    }
}
