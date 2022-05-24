import { Injectable } from "@nestjs/common";
import { Request } from "express";

@Injectable()
export class AppService {
    getHello(req: Request): any {
        return {
            Sequence: req.body.Sequence + 2,
            message: "Hello World!",
        };
    }
}
