import {
    HttpException,
    HttpStatus,
    Injectable,
    NestMiddleware,
} from "@nestjs/common";
import { NextFunction, Request, Response } from "express";

@Injectable()
export class SequenceMiddleware implements NestMiddleware {
    use(req: Request, res: Response, next: NextFunction) {
        const { Sequence } = req.body;

        if (typeof Sequence === "number") {
            next();
        } else {
            next(
                new HttpException(
                    "Sequence must be a number",
                    HttpStatus.BAD_REQUEST
                )
            );
        }
    }
}
