import { Injectable } from "@nestjs/common";
import { Request } from "express";
import { Pc } from "src/pc.interface";

@Injectable()
export class PclistService {
    private readonly pclist: Record<string, any> & { Result: Pc[] } = {
        ErrorCode: 0,
        FavorPCList: [],
        MaxHavePCSlot: 99999,
        Result: [
            {
                PCId: 1,
                Index: "Char_BR_Gnome_N",
                Grade: 2,
                Level: 1,
                CurrentExp: 0,
                HP: 210,
                MaxHP: 0,
                ATK: 0,
                DEF: 0,
                EVADE: 0,
                TURNSPEED: 0,
                RESFIRE: 0,
                RESICE: 0,
                RESLIGHTNING: 0,
                CreateTime: 1637810763,
                HaveSkillList: [
                    {
                        SkillKeyString: "Skill_BR_Gnome_N_1",
                        SkillLevel: 1,
                        SkillExp: 0,
                    },
                    {
                        SkillKeyString: "Skill_BR_Gnome_N_2",
                        SkillLevel: 1,
                        SkillExp: 0,
                    },
                ],
                PCEquipSlotList: null,
                MaxEnchantCount: 0,
                PCEnchantAttrInfoList: null,
                PCMaxEnchantAttrInfo: {
                    MaxAtkValue: 30,
                    MaxAtkExp: 0,
                    MaxDefValue: 30,
                    MaxDefExp: 0,
                    MaxHPValue: 30,
                    MaxHPExp: 0,
                    MaxAccValue: 30,
                    MaxAccExp: 0,
                    MaxEvadeValue: 30,
                    MaxEvadeExp: 0,
                    MaxCriValue: 30,
                    MaxCriExp: 0,
                },
                IsFirstGainPC: 1,
                IsUseCoreSlotRef: 0,
                IsLock: 1,
                FavorPoint: 0,
                MaxFavorPoint: 10000,
                LastGiveFavorPointTime: 1637637963,
                SetSkinKeyString: "",
                HaveSkinList: null,
                Destroyed: 0,
                CoreLinkBonus_KeyString: "",
            },
        ],
    };

    getPclist(reqest: Request) {
        return {
            ...this.pclist,
            Sequence: reqest.body.Sequence + 1,
        };
    }
}
