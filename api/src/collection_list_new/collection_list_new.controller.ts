import { Controller, HttpCode, Post, Req } from "@nestjs/common";
import { Request } from "express";
import { CollectionListNewService } from "./collection_list_new.service";

@Controller("collection_list_new")
export class CollectionListNewController {
    constructor(private collectionListNewService: CollectionListNewService) {}

    @Post()
    @HttpCode(200)
    getInvenItemlist(@Req() req: Request) {
        return this.collectionListNewService.getCollectionListNew(req);
    }
}
