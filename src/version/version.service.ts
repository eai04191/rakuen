import { Injectable } from "@nestjs/common";
import { Request } from "express";

@Injectable()
export class VersionService {
    private readonly version = {
        ErrorCode: 0,
    };

    getVersion(req: Request) {
        return {
            ...this.version,
            Sequence: req.body.Sequence + 2,
        };
    }
}
