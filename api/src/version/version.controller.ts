import { Controller, HttpCode, Post, Req } from "@nestjs/common";
import { Request } from "express";
import { VersionService } from "./version.service";

@Controller("version")
export class VersionController {
    constructor(private versionService: VersionService) {}

    @Post()
    @HttpCode(200)
    getVersion(@Req() req: Request) {
        return this.versionService.getVersion(req);
    }
}
