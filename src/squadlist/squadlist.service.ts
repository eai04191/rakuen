import { Injectable } from "@nestjs/common";
import { Request } from "express";

@Injectable({})
export class SquadlistService {
    private readonly squad = {
        LeaderPCID: 1,
        SquadSlotList: [
            { PCId: 1 },
            { PCId: 1 },
            { PCId: 1 },
            { PCId: 1 },
            { PCId: 1 },
            { PCId: 1 },
            { PCId: 1 },
            { PCId: 1 },
            { PCId: 1 },
        ],
    };
    private readonly squadlist = {
        ErrorCode: 0,
        Result: [
            {
                ...this.squad,
                SquadIndex: 1,
            },
            {
                ...this.squad,
                SquadIndex: 2,
            },
            {
                ...this.squad,
                SquadIndex: 3,
            },
            {
                ...this.squad,
                SquadIndex: 4,
            },
        ],
    };

    getSquadlist(reqest: Request) {
        return {
            ...this.squadlist,
            Sequence: reqest.body.Sequence + 1,
        };
    }
}
