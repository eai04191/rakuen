# Update Scenario list

アセット配布サーバーから`textassets`をダウンロードする

```
// 例
https://patch-dmm.last-origin.com/real/real_20220307_2/LAOJP_DMM_WEB_R/2.0.6/textassets
```

AssetStudio で開き`Export` -> `Asset list to XML` -> `All assets`で XML を作成する

powershell で以下のワンライナーを実行して xml から必要なファイル名を抽出する（要 npx, jq）

```powershell
npx -p fast-xml-parser -c "fxparser .\textassets.xml"  | jq '.Assets.Asset | map(select(.Name | contains("""Stage""") and endswith("""_1.bin""")) | select(.Name | contains("""Marriage""") or contains("""SysOP""")|not) | .Name)' > textassets.js
```

出てきた配列を`src\stageclearlist\stageclearlist.service.ts`の assets にセットするとシナリオのあるすべてのステージがクリア済になり、記録室で閲覧できるはず
