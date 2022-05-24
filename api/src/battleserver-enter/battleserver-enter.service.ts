import { Injectable } from "@nestjs/common";
import { Request } from "express";
import { CurrencyInfo } from "src/constants";

@Injectable()
export class BattleserverEnterService {
    private readonly battleserverEnter = {
        ErrorCode: 0,
        MonsterList: [
            {
                Aid: 1,
                Index: "MOB_MP_Hirume_N",
                Grade: 5,
                Level: 1,
                MaxHP: 320000,
                MaxAP: 0,
                HP: 320000,
                AP: 0,
                GridPosIndex: 8,
                TeamId: 1,
                WaveStep: 0,
            },
        ],
        PCList: [
            {
                Aid: 100000019,
                PCID: 100000019,
                Index: "Char_3P_Labiata_N",
                Grade: 5,
                Level: 100,
                MaxHP: 9999,
                MaxAP: 0,
                HP: 9999,
                GridPosIndex: 3,
                TeamId: 0,
                IsFriend: 0,
            },
        ],
        CurrencyInfo: CurrencyInfo,
    };
    getBattleserverEnter(req: Request) {
        return {
            ...this.battleserverEnter,
            Sequence: req.body.Sequence + 2,
        };
    }
}
