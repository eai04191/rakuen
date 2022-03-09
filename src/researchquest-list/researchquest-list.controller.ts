import { Controller, HttpCode, Post, Req } from "@nestjs/common";
import { Request } from "express";
import { ResearchquestListService } from "./researchquest-list.service";

@Controller("researchquest_list")
export class ResearchquestListController {
    constructor(private researchquestListService: ResearchquestListService) {}

    @Post()
    @HttpCode(200)
    getResearchquestList(@Req() req: Request) {
        return this.researchquestListService.getResearchquestList(req);
    }
}
