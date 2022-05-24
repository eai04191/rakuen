import { Module } from "@nestjs/common";
import { ResearchquestListController } from "./researchquest-list.controller";
import { ResearchquestListService } from "./researchquest-list.service";

@Module({
    controllers: [ResearchquestListController],
    providers: [ResearchquestListService],
})
export class ResearchquestListModule {}
