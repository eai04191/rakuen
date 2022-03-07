import { Module } from "@nestjs/common";
import { StageclearlistController } from "./stageclearlist.controller";
import { StageclearlistService } from "./stageclearlist.service";

@Module({
    controllers: [StageclearlistController],
    providers: [StageclearlistService],
})
export class StageclearlistModule {}
