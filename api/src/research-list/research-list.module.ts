import { Module } from "@nestjs/common";
import { ResearchListController } from "./research-list.controller";
import { ResearchListService } from "./research-list.service";

@Module({
    controllers: [ResearchListController],
    providers: [ResearchListService],
})
export class ResearchListModule {}
