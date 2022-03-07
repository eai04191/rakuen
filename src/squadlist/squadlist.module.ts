import { Module } from "@nestjs/common";
import { SquadlistController } from "./squadlist.controller";
import { SquadlistService } from "./squadlist.service";

@Module({
    controllers: [SquadlistController],
    providers: [SquadlistService],
})
export class SquadlistModule {}
