import { Injectable } from "@nestjs/common";
import { Request } from "express";

@Injectable()
export class PcMarriageListService {
    private readonly pcMarriageList = {
        ErrorCode: 0,
        PCMarriageInfos: null,
    };

    getPcMarriageList(reqest: Request) {
        return {
            ...this.pcMarriageList,
            Sequence: reqest.body.Sequence + 1,
        };
    }
}
