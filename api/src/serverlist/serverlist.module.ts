import { Module } from "@nestjs/common";
import { ServerlistController } from "./serverlist.controller";
import { ServerlistService } from "./serverlist.service";

@Module({
    controllers: [ServerlistController],
    providers: [ServerlistService],
})
export class ServerlistModule {}
