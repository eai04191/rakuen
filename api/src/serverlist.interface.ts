export interface Serverlist {
    ErrorCode: number;
    Result: {
        GateServerVersion: string;
        ServerName: string;
        LoginServerIP: string;
        LoginServerPort: string;
        GateServerIP: string;
        GateServerPort: string;
        RankServerIP: string;
        RankServerPort: string;
        ChatServerIP: string;
        ChatServerPort: string;
        OrderedNumber: string;
        IsVisible: string;
    }[];
    WaitingIndex: number;
    WaitingPeopleCount: number;
    FrontAccessToken: string;
    Sequence: number;
}
