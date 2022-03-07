import { Injectable } from "@nestjs/common";
import { Request } from "express";

@Injectable()
export class AppService {
    getHello(request: Request): any {
        return {
            Sequence: request.body.Sequence + 1,
            message: "Hello World!",
        };
    }
}
