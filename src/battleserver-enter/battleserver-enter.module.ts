import { Module } from "@nestjs/common";
import { BattleserverEnterController } from "./battleserver-enter.controller";
import { BattleserverEnterService } from "./battleserver-enter.service";

@Module({
    controllers: [BattleserverEnterController],
    providers: [BattleserverEnterService],
})
export class BattleserverEnterModule {}
