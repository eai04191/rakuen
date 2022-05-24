import { Module } from "@nestjs/common";
import { PclistController } from "./pclist.controller";
import { PclistService } from "./pclist.service";

@Module({
    controllers: [PclistController],
    providers: [PclistService],
})
export class PclistModule {}
