import { Module } from "@nestjs/common";
import { PcMarriageListController } from "./pc-marriage-list.controller";
import { PcMarriageListService } from "./pc-marriage-list.service";

@Module({
    controllers: [PcMarriageListController],
    providers: [PcMarriageListService],
})
export class PcMarriageListModule {}
