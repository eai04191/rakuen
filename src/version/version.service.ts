import { Injectable } from "@nestjs/common";
import { Request } from "express";

@Injectable()
export class VersionService {
    private readonly version = {
        ErrorCode: 0,
    };

    getVersion(request: Request) {
        return {
            ...this.version,
            Sequence: request.body.Sequence + 1,
        };
    }
}
