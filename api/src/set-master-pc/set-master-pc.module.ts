import { Module } from "@nestjs/common";
import { SetMasterPCController } from "./set-master-pc.controller";
import { SetMasterPCService } from "./set-master-pc.service";

@Module({
    controllers: [SetMasterPCController],
    providers: [SetMasterPCService],
})
export class SetMasterPCModule {}
