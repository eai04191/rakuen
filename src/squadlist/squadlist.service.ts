import { Injectable } from "@nestjs/common";
import { Request } from "express";

@Injectable({})
export class SquadlistService {
    private readonly squad = {
        LeaderPCID: 100000000,
        SquadSlotList: [
            { PCId: 100000010 },
            { PCId: 100000011 },
            { PCId: 100000012 },
            { PCId: 100000013 },
            { PCId: 100000014 },
            { PCId: 100000015 },
            { PCId: 100000016 },
            { PCId: 100000017 },
            { PCId: 100000018 },
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
