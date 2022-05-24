import { Injectable } from "@nestjs/common";
import { Request } from "express";
import { Login } from "src/login.interface";

@Injectable()
export class LoginService {
    private readonly result: Omit<
        Login["Result"],
        "CreateTime" | "LastLoginTime" | "LastGiveCurrencyTime"
    > = {
        WID: 1,
        NickName: "Dreamer",
        AccountLevel: 999,
        AccountExp: 0,
        LoginCount: 1,
        AccessToken: "LoGateAccessToken",
        MasterPCID: 100000002,
        IsChangeNickName: 1,
        ProfileText: "in Rakuen Project",
        MasterSquadIndex: 1,
        LastStage: "",
        AcceptTerms: 0,
    };
    private readonly login: Omit<Login, "Sequence" | "Result" | "ServerTime"> =
        {
            ErrorCode: 0,
            ChatServerIP: "",
            ChatServerPort: "",
            IsMasterPCGiveToFavorPoint: 0,
            TutorialSqIndex: 2000,
            BlockType: 0,
            IsLeave: 0,
            IsBlock: 0,
            BlockReason: "",
            BlockStartTime: 0,
            BlockEndTime: 0,
            GNID: "0",
            IsNew: 0,
            PresetSlotCount: 10,
            PresetIndex: 0,
            PresetInfoList: null,
            BGKeyList: ["LobbyBG_Beach", "LobbyBG_OrcaMain"],
            BoostInfoList: null,
        };

    getLogin(req: Request): Login {
        const now = Math.trunc(new Date().getTime() / 1000);
        return {
            ...this.login,
            Result: {
                ...this.result,
                CreateTime: now,
                LastGiveCurrencyTime: now,
                LastLoginTime: now,
            },
            ServerTime: now,
            Sequence: req.body.Sequence + 1000000,
        };
    }
}
