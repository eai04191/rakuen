import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    app.enableCors();
    app.use((req, res, next) => {
        req.headers["content-type"] =
            req.headers["content-type"] || "application/json";
        next();
    });
    await app.listen(3000);
}
bootstrap();
