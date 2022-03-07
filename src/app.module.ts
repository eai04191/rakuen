import { MiddlewareConsumer, Module, NestModule } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { SequenceMiddleware } from "./middleware/sequence.middleware";
import { ServerlistController } from "./serverlist/serverlist.controller";
import { ServerlistModule } from "./serverlist/serverlist.module";

@Module({
    imports: [ServerlistModule],
    controllers: [AppController, ServerlistController],
    providers: [AppService],
})
export class AppModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
        consumer.apply(SequenceMiddleware).forRoutes("/");
    }
}
