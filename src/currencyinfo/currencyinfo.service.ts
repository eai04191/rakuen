import { Injectable } from "@nestjs/common";
import { Request } from "express";

@Injectable()
export class CurrencyinfoService {
    private readonly currencyinfo = {
        ErrorCode: 0,
        CurrencyInfo: {
            Cash: 0,
            FreeCash: 2147483647,
            Metal: 0,
            FreeMetal: 2147483647,
            Nutrient: 0,
            FreeNutrient: 2147483647,
            Power: 0,
            FreePower: 2147483647,
        },
        TrainingTicket: 100,
        ChallengeTicket: 1,
    };

    getCurrencyinfo(reqest: Request) {
        return {
            ...this.currencyinfo,
            Sequence: reqest.body.Sequence + 1,
        };
    }
}
