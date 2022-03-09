import { Module } from "@nestjs/common";
import { InvenItemlistController } from "./inven-itemlist.controller";
import { InvenItemlistService } from "./inven-itemlist.service";

@Module({
    controllers: [InvenItemlistController],
    providers: [InvenItemlistService],
})
export class InvenItemlistModule {}
