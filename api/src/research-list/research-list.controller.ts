import { Controller, HttpCode, Post, Req } from "@nestjs/common";
import { Request } from "express";
import { ResearchListService } from "./research-list.service";

@Controller("research_list")
export class ResearchListController {
    constructor(private researchListService: ResearchListService) {}

    @Post()
    @HttpCode(200)
    getResearchList(@Req() req: Request) {
        return this.researchListService.getResearchList(req);
    }
}
