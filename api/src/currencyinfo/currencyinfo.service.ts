import { Injectable } from "@nestjs/common";
import { Request } from "express";
import { CurrencyInfo } from "src/constants";

@Injectable()
export class CurrencyinfoService {
    private readonly currencyinfo = {
        ErrorCode: 0,
        CurrencyInfo: CurrencyInfo,
        TrainingTicket: 100,
        ChallengeTicket: 1,
    };

    getCurrencyinfo(req: Request) {
        return {
            ...this.currencyinfo,
            Sequence: req.body.Sequence + 2,
        };
    }
}
