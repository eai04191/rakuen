import { Injectable } from "@nestjs/common";
import { Request } from "express";

@Injectable()
export class StageclearlistService {
    private readonly stage = {};
    private readonly stageclearlist = {
        ErrorCode: 0,
        Result: [],
    };

    getStageclearlist(reqest: Request) {
        return {
            ...this.stageclearlist,
            Sequence: reqest.body.Sequence + 1,
        };
    }
}
