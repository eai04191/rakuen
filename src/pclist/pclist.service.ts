import { Injectable } from "@nestjs/common";
import { Request } from "express";
import { Pc } from "src/pc.interface";

@Injectable()
export class PclistService {
    private createPc = ({
        PCId = Math.trunc(Math.random() * 100000),
        Index = "Char_PECS_DutchGirl_N",
        ...rest
    }: Partial<Pc>): Pc => {
        return {
            PCId,
            Index,
            Grade: 5,
            Level: 100,
            CurrentExp: 0,
            HP: 156,
            MaxHP: 0,
            ATK: 0,
            DEF: 0,
            EVADE: 0,
            TURNSPEED: 0,
            RESFIRE: 0,
            RESICE: 0,
            RESLIGHTNING: 0,
            CreateTime: 1646683045,
            HaveSkillList: [
                {
                    SkillKeyString: `Skill_${Index.replace("Char_", "")}_1`,
                    SkillLevel: 10,
                    SkillExp: 0,
                },
                {
                    SkillKeyString: `Skill_${Index.replace("Char_", "")}_2`,
                    SkillLevel: 10,
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
            LastGiveFavorPointTime: 1646510245,
            SetSkinKeyString: "",
            HaveSkinList: null,
            Destroyed: 0,
            CoreLinkBonus_KeyString: "",
            ...rest,
        };
    };

    private readonly pclist: Record<string, any> & { Result: Pc[] } = {
        ErrorCode: 0,
        MaxHavePCSlot: 100,
        FavorPCList: [100000000],
        Result: [
            this.createPc({ PCId: 100000000 }),
            this.createPc({ PCId: 100000001, Index: "Char_Core_Normal_N" }),
            this.createPc({ PCId: 100000002, Index: "Char_Core_Special_N" }),
            this.createPc({ PCId: 100000010, Index: "Char_PECS_Azaz_N" }),
            this.createPc({ PCId: 100000011, Index: "Char_PECS_LRL_N" }),
            this.createPc({ PCId: 100000012, Index: "Char_PECS_MightyR_N" }),
            this.createPc({ PCId: 100000013, Index: "Char_BR_NightAngel_N" }),
            this.createPc({ PCId: 100000014, Index: "Char_BR_InvDragon_N" }),
            this.createPc({ PCId: 100000015, Index: "Char_BR_Echidna_N" }),
            this.createPc({ PCId: 100000016, Index: "Char_AGS_SpartanA_N" }),
            this.createPc({ PCId: 100000017, Index: "Char_AGS_SpartanB_N" }),
            this.createPc({ PCId: 100000018, Index: "Char_AGS_SpartanC_N" }),
            this.createPc({ PCId: 100000019, Index: "Char_3P_Labiata_N" }),
        ],
    };

    getPclist(req: Request) {
        return {
            ...this.pclist,
            Sequence: req.body.Sequence + 2,
        };
    }
}
