import { rest } from "msw";

export const handlers = [
    rest.post(
        "https://neptune-api.line.games/api/langCulture/game/useList",
        (req, res, ctx) => {
            return res(
                ctx.status(200),
                ctx.json({
                    isSuccess: true,
                    msg: "request success",
                    data: [
                        {
                            langCulture: "ko_KR",
                            name: "한국어(대한민국)",
                            displayName: "한국어",
                        },
                        {
                            langCulture: "ja_JP",
                            name: "일본어(일본)",
                            displayName: "日本語",
                        },
                    ],
                })
            );
        }
    ),

    rest.post(
        "https://real-cf-api-integ.line.games/api/api_version/getClientVersionInfo",
        (req, res, ctx) => {
            return res(
                ctx.status(200),
                ctx.json({
                    isSuccess: true,
                    msg: "request success",
                    data: {
                        game_cd: "LAOJP",
                        os: "WINDOWS",
                        client_version: "2.0.6",
                        client_version_status: "ONLINE",
                        server_addr: "http://localhost:2052",
                        patch_addr: "http://localhost:2070/",
                        maintenanceEndUnixTS: null,
                        maintenance_msg:
                            "サービスメンテナンス中です。\r\n*詳細は公式ツイッターにてご確認ください。\r\n*[確認]ボタンを押すと、公式ツイッターに移動します。",
                        guest_mode_on_yn: "N",
                        applied_white_yn: "N",
                        out_link_url: null,
                        countryInfo: {
                            countryCd: "JP",
                            gdprTargetYn: "N",
                        },
                        countryTermsInfos: [
                            {
                                cd: "TERMS_OF_SERVICES",
                                required: true,
                                url: "https://pig.games/ja/terms.html",
                            },
                            {
                                cd: "PRIVACY_POLICY",
                                required: true,
                                url: "https://pig.games/ja/privacy.html",
                            },
                            {
                                cd: "TRANSFER_OF_PERSONAL_DATA_OUTSIDE_THE_EU",
                                required: true,
                                url: "https://pig.games/ja/transfer.html",
                            },
                            {
                                cd: "USE_OF_PUSH_NOTIFICATIONS",
                                required: false,
                                url: "https://pig.games/ja/pushagree.html",
                            },
                        ],
                        gdprAgeCheckUrl: null,
                        customValue: "",
                    },
                })
            );
        }
    ),

    rest.post(
        "https://neptune-api.line.games/api/v1/login/dmm/pc/browser/getLoginToken",
        (req, res, ctx) => {
            return res(
                ctx.status(200),
                ctx.json({
                    isSuccess: true,
                    msg: "request success",
                    data: {
                        newGnidYn: "N",
                        gnidHash: "gnidHash",
                        pfSessionToken: "pfSessionToken",
                        countryCreated: "JP",
                        policyAgreeInfo: {
                            termsAgreeUnixTS: 1653397200,
                            privacyAgreeUnixTS: 1653397200,
                            ageCheckCompletedUnixTS: null,
                            privacyTransferAgreeUnixTS: null,
                            pushAgreeYn: "Y",
                            pushAgreeUnixTS: 1653397200,
                            nightPushAgreeYn: "Y",
                            nightPushAgreeUnixTS: 1653397200,
                            needAgreePushYn: "N",
                            needReAgreePolicyYn: "N",
                        },
                        linkedPlatformIdList: [120],
                    },
                })
            );
        }
    ),

    rest.post(
        "https://neptune-api.line.games/api/gameServer/list",
        (req, res, ctx) => {
            return res(
                ctx.status(200),
                ctx.json({
                    isSuccess: true,
                    msg: "request success",
                    data: [
                        {
                            gameServerId: "LAOJP-JP-01",
                            gameServerNm: "LAOJP-JP-01",
                        },
                    ],
                })
            );
        }
    ),
];
