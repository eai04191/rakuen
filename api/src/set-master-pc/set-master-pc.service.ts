import { Injectable } from "@nestjs/common";
import { Request } from "express";

@Injectable({})
export class SetMasterPCService {
    SetMasterPC (req: Request) {
        return {
            ErrorCode: 0,
            MasterPCID: req.body.TargetPCID,
            PresetIndex: 0,
            Sequence: req.body.Sequence + 2,
        };
    }
}
