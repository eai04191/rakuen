import { Injectable } from "@nestjs/common";
import { Request } from "express";

@Injectable({})
export class SetProfileTextService {
    SetProfileText (req: Request) {
        return {
            ErrorCode: 0,
            ProfileText: req.body.ProfileText,
            Sequence: req.body.Sequence + 2,
        };
    }
}
