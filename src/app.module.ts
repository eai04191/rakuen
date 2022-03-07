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
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
        consumer.apply(SequenceMiddleware).forRoutes("*");
    }
}
