import { Injectable } from "@nestjs/common";
import { Request } from "express";

@Injectable()
export class InvenItemlistService {
    private readonly invenItemlist = {
        ErrorCode: 0,
        Result: null,
        SlotInfo: [
            {
                InvenCategory: 0,
                Count: 150,
            },
            {
                InvenCategory: 1,
                Count: 400,
            },
        ],
    };

    getInvenItemlist(req: Request) {
        return {
            ...this.invenItemlist,
            Sequence: req.body.Sequence + 2,
        };
    }
}
