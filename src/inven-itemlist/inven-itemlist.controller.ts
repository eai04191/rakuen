import { Controller, HttpCode, Post, Req } from "@nestjs/common";
import { Request } from "express";
import { InvenItemlistService } from "./inven-itemlist.service";

@Controller("inven_itemlist")
export class InvenItemlistController {
    constructor(private invenItemlistService: InvenItemlistService) {}

    @Post()
    @HttpCode(200)
    getInvenItemlist(@Req() req: Request) {
        return this.invenItemlistService.getInvenItemlist(req);
    }
}
