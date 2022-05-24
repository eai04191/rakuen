import { Controller, HttpCode, Post, Req } from "@nestjs/common";
import { Request } from "express";
import { StageclearlistService } from "./stageclearlist.service";

@Controller("stageclearlist")
export class StageclearlistController {
    constructor(private stageclearlistService: StageclearlistService) {}

    @Post()
    @HttpCode(200)
    getStageclearlist(@Req() req: Request) {
        return this.stageclearlistService.getStageclearlist(req);
    }
}
