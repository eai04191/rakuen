export interface Login {
    ErrorCode: number;
    Result: Result;
    ChatServerIP: string;
    ChatServerPort: string;
    ServerTime: number;
    IsMasterPCGiveToFavorPoint: number;
    TutorialSqIndex: number;
    BlockType: number;
    IsLeave: number;
    IsBlock: number;
    BlockReason: string;
    BlockStartTime: number;
    BlockEndTime: number;
    GNID: string;
    IsNew: number;
    PresetSlotCount: number;
    PresetIndex: number;
    PresetInfoList: PresetInfoList[];
    BGKeyList: string[];
    BoostInfoList: null;
    Sequence: number;
}

interface Result {
    WID: number;
    NickName: string;
    AccountLevel: number;
    AccountExp: number;
    LoginCount: number;
    CreateTime: number;
    LastLoginTime: number;
    AccessToken: string;
    MasterPCID: number;
    IsChangeNickName: number;
    ProfileText: string;
    MasterSquadIndex: number;
    LastGiveCurrencyTime: number;
    LastStage: string;
    AcceptTerms: number;
}

interface PresetPCInfoList {
    PCID: number;
    PositionX: number;
    PositionY: number;
    ScaleX: number;
    ScaleY: number;
    RotationY: number;
    RotationZ: number;
    SortingOrder: number;
    PartsOn: number;
    Damaged: number;
    FaceType: number;
}

interface PresetStickerInfoList {
    StickerKey: string;
    PositionX: number;
    PositionY: number;
    ScaleX: number;
    ScaleY: number;
    RotationY: number;
    RotationZ: number;
    SortingOrder: number;
}

interface PresetInfoList {
    PresetIndex: number;
    PresetName: string;
    PresetPCInfoList: PresetPCInfoList[];
    PresetStickerInfoList: PresetStickerInfoList[];
    BGKeyString: string;
}
