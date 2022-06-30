import { Controller, HttpCode, Post, Req } from "@nestjs/common";
import { Request } from "express";
import { SetProfileTextService } from "./set-profile-text.service";

@Controller("set_profile_text")
export class SetProfileTextController {
    constructor (private setProfileTextService: SetProfileTextService) { }

    @Post()
    @HttpCode(200)
    getSquadlist (@Req() req: Request) {
        return this.setProfileTextService.SetProfileText(req);
    }
}
