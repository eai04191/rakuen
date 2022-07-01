import { Module } from "@nestjs/common";
import { CollectionListNewController } from "./collection_list_new.controller";
import { CollectionListNewService } from "./collection_list_new.service";

@Module({
    controllers: [CollectionListNewController],
    providers: [CollectionListNewService],
})
export class CollectionListNewModule {}
