import { Injectable } from "@nestjs/common";
import { Request } from "express";
import { Serverlist } from "src/serverlist.interface";

@Injectable({})
export class ServerlistService {
    private readonly serverlist: Omit<Serverlist, "Sequence"> = {
        ErrorCode: 0,
        Result: [
            {
                GateServerVersion: "",
                ServerName: "",
                LoginServerIP: "",
                LoginServerPort: "",
                GateServerIP: "",
                GateServerPort: "",
                RankServerIP: "",
                RankServerPort: "",
                ChatServerIP: "",
                ChatServerPort: "",
                OrderedNumber: "",
                IsVisible: "",
            },
        ],
        WaitingIndex: 0,
        WaitingPeopleCount: 0,
        FrontAccessToken: "LoGateFrontAccessToken",
    };

    getServerlist(reqest: Request): Serverlist {
        return {
            ...this.serverlist,
            Sequence: reqest.body.Sequence + 1,
        };
    }
}
