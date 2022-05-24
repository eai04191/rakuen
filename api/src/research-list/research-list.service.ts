import { Injectable } from "@nestjs/common";
import { Request } from "express";

@Injectable()
export class ResearchListService {
    private readonly researchList = {
        ErrorCode: 0,
        ResearchList: [
            {
                UID: 93667,
                ResearchKeyString: "Research_SubmarineFacility",
                Status: 1,
                ResultType: 17,
                EffectValue: "0",
            },
            {
                UID: 93687,
                ResearchKeyString: "Research_CommandModule",
                Status: 1,
                ResultType: 16,
                EffectValue: "0",
            },
            {
                UID: 94786,
                ResearchKeyString: "Research_AI_Simulator_Lv1",
                Status: 1,
                ResultType: 12,
                EffectValue: "0",
            },
            {
                UID: 135963,
                ResearchKeyString: "Research_Robot_Making",
                Status: 1,
                ResultType: 1,
                EffectValue: "0",
            },
            {
                UID: 136048,
                ResearchKeyString: "Research_Recycle_Lv1",
                Status: 1,
                ResultType: 4,
                EffectValue: "0.2",
            },
            {
                UID: 136791,
                ResearchKeyString: "Robot_Robotics_Frame",
                Status: 1,
                ResultType: 17,
                EffectValue: "0",
            },
            {
                UID: 136841,
                ResearchKeyString: "Robot_ProtectModule",
                Status: 1,
                ResultType: 17,
                EffectValue: "0",
            },
            {
                UID: 136860,
                ResearchKeyString: "Robot_Shock_Absorber",
                Status: 1,
                ResultType: 17,
                EffectValue: "0",
            },
            {
                UID: 136882,
                ResearchKeyString: "Robot_Advanced_Frame",
                Status: 1,
                ResultType: 17,
                EffectValue: "0",
            },
            {
                UID: 136966,
                ResearchKeyString: "Research_Recycle_Lv2",
                Status: 1,
                ResultType: 4,
                EffectValue: "0.4",
            },
            {
                UID: 137053,
                ResearchKeyString: "Research_Recycle_Lv3",
                Status: 1,
                ResultType: 4,
                EffectValue: "0.6",
            },
            {
                UID: 137404,
                ResearchKeyString: "Research_Recycle_Lv4",
                Status: 1,
                ResultType: 4,
                EffectValue: "0.8",
            },
            {
                UID: 137494,
                ResearchKeyString: "Research_Recycle_Lv5",
                Status: 1,
                ResultType: 4,
                EffectValue: "1",
            },
            {
                UID: 137572,
                ResearchKeyString: "Research_Recycle_Lv6",
                Status: 1,
                ResultType: 4,
                EffectValue: "1.2",
            },
            {
                UID: 137767,
                ResearchKeyString: "Research_AI_Simulator_Lv2",
                Status: 1,
                ResultType: 13,
                EffectValue: "0",
            },
            {
                UID: 138226,
                ResearchKeyString: "Research_AIControl",
                Status: 1,
                ResultType: 17,
                EffectValue: "0",
            },
            {
                UID: 138229,
                ResearchKeyString: "Research_Precised_Exploration_Lv1",
                Status: 1,
                ResultType: 11,
                EffectValue: "0.04",
            },
            {
                UID: 138279,
                ResearchKeyString: "Research_Precised_Exploration_Lv2",
                Status: 1,
                ResultType: 11,
                EffectValue: "0.08",
            },
            {
                UID: 138620,
                ResearchKeyString: "Research_Precised_Exploration_Lv3",
                Status: 1,
                ResultType: 11,
                EffectValue: "0.12",
            },
            {
                UID: 139121,
                ResearchKeyString: "Research_Precised_Exploration_Lv4",
                Status: 1,
                ResultType: 11,
                EffectValue: "0.16",
            },
            {
                UID: 139422,
                ResearchKeyString: "Research_Precised_Exploration_Lv5",
                Status: 1,
                ResultType: 11,
                EffectValue: "0.2",
            },
            {
                UID: 139861,
                ResearchKeyString: "Research_Carriage_Lv1",
                Status: 0,
                ResultType: 0,
                EffectValue: "",
            },
        ],
    };

    getResearchList(req: Request) {
        return {
            ...this.researchList,
            Sequence: req.body.Sequence + 2,
        };
    }
}
