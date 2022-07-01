import { Module } from "@nestjs/common";
import { SetProfileTextController } from "./set-profile-text.controller";
import { SetProfileTextService } from "./set-profile-text.service";

@Module({
    controllers: [SetProfileTextController],
    providers: [SetProfileTextService],
})
export class SetProfileTextModule { }
