import { Controller, HttpCode, Post, Req } from "@nestjs/common";
import { Request } from "express";
import { SetMasterPCService } from "./set-master-pc.service";

@Controller("set_master_pc")
export class SetMasterPCController {
    constructor(private setMasterPcService: SetMasterPCService) {}

    @Post()
    @HttpCode(200)
    getSquadlist(@Req() req: Request) {
        return this.setMasterPcService.SetMasterPC(req);
    }
}
