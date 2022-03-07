import { MiddlewareConsumer, Module, NestModule } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { SequenceMiddleware } from "./middleware/sequence.middleware";
import { ServerlistModule } from "./serverlist/serverlist.module";
import { VersionModule } from "./version/version.module";
import { LoginModule } from "./login/login.module";

@Module({
    imports: [ServerlistModule, VersionModule, LoginModule],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
        consumer.apply(SequenceMiddleware).forRoutes("*");
    }
}
