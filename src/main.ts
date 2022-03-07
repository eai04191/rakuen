import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { FallbackFilter } from "./fallback.filter";

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    app.enableCors();
    app.use((req, res, next) => {
        req.headers["content-type"] =
            req.headers["content-type"] || "application/json";
        next();
    });
    app.useGlobalFilters(new FallbackFilter());
    await app.listen(3000);
}
bootstrap();
