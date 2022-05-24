import { Injectable } from "@nestjs/common";
import { Request } from "express";

@Injectable()
export class ResearchquestListService {
    private readonly researchquestList = {
        ErrorCode: 0,
        QuestList: null,
    };

    getResearchquestList(req: Request) {
        return {
            ...this.researchquestList,
            Sequence: req.body.Sequence + 2,
        };
    }
}
