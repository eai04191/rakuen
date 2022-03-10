import { Injectable } from "@nestjs/common";
import { Request } from "express";

@Injectable({})
export class SquadlistService {
    private readonly squad = {
        LeaderPCID: 100000000,
        SquadSlotList: [
            { PCId: 100000010 },
            { PCId: 100000011 },
            { PCId: 100000019 },
            { PCId: /*100000013*/ 0 },
            { PCId: /*100000014*/ 0 },
            { PCId: /*100000015*/ 0 },
            { PCId: /*100000016*/ 0 },
            { PCId: /*100000017*/ 0 },
            { PCId: /*100000018*/ 0 },
        ],
    };
    private readonly squadlist = {
        ErrorCode: 0,
        Result: [
            {
                ...this.squad,
                SquadIndex: 1,
            },
        ],
    };

    getSquadlist(req: Request) {
        return {
            ...this.squadlist,
            Sequence: req.body.Sequence + 2,
        };
    }
}
