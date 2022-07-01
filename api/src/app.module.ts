import { MiddlewareConsumer, Module, NestModule } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { SequenceMiddleware } from "./middleware/sequence.middleware";
import { ServerlistModule } from "./serverlist/serverlist.module";
import { VersionModule } from "./version/version.module";
import { LoginModule } from "./login/login.module";
import { PcMarriageListModule } from "./pc-marriage-list/pc-marriage-list.module";
import { PclistModule } from "./pclist/pclist.module";
import { SquadlistModule } from "./squadlist/squadlist.module";
import { CurrencyinfoModule } from "./currencyinfo/currencyinfo.module";
import { StageclearlistModule } from "./stageclearlist/stageclearlist.module";
import { InvenItemlistModule } from "./inven-itemlist/inven-itemlist.module";
import { BattleserverEnterModule } from "./battleserver-enter/battleserver-enter.module";
import { ResearchquestListModule } from "./researchquest-list/researchquest-list.module";
import { ResearchListModule } from "./research-list/research-list.module";
import { SetMasterPCModule } from "./set-master-pc/set-master-pc.module";
import { SetProfileTextModule } from "./set-profile-text/set-profile-text.module";
import { CollectionListNewModule } from "./collection_list_new/collection_list_new.module";

@Module({
    imports: [
        ServerlistModule,
        VersionModule,
        LoginModule,
        PcMarriageListModule,
        PclistModule,
        SquadlistModule,
        CurrencyinfoModule,
        StageclearlistModule,
        InvenItemlistModule,
        BattleserverEnterModule,
        ResearchquestListModule,
        ResearchListModule,
        SetMasterPCModule,
        SetProfileTextModule,
        CollectionListNewModule,
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
        consumer.apply(SequenceMiddleware).forRoutes("*");
    }
}
