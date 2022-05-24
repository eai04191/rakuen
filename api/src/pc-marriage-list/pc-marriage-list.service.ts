import { Injectable } from "@nestjs/common";
import { Request } from "express";

@Injectable()
export class PcMarriageListService {
    private readonly pcMarriageList = {
        ErrorCode: 0,
        PCMarriageInfos: null,
    };

    getPcMarriageList(req: Request) {
        return {
            ...this.pcMarriageList,
            Sequence: req.body.Sequence + 2,
        };
    }
}
