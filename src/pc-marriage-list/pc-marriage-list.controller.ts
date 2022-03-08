import { Controller, HttpCode, Post, Req } from "@nestjs/common";
import { Request } from "express";
import { PcMarriageListService } from "./pc-marriage-list.service";

@Controller("pc_marriage_list")
export class PcMarriageListController {
    constructor(private pcMarriageListService: PcMarriageListService) {}

    @Post()
    @HttpCode(200)
    getPcMarriageList(@Req() req: Request) {
        return this.pcMarriageListService.getPcMarriageList(req);
    }
}
