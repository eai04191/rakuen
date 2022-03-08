import { Injectable } from "@nestjs/common";
import { Request } from "express";

@Injectable()
export class StageclearlistService {
    private readonly stage = {};
    private readonly stageclearlist = {
        ErrorCode: 0,
        Result: null,
    };

    getStageclearlist(req: Request) {
        return {
            ...this.stageclearlist,
            Sequence: req.body.Sequence + 2,
        };
    }
}
