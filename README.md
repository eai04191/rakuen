<!-- <p align="center">
  <img src="" width="320" alt="Rakuen" />
</p> -->

# Rakuen

**Rakuen** is a game "Last Origin" (Japanese, WebGL Version) that has been restored to a state that can be started.

The server is implemented from scratch.

## Philosophy

Rakuen provides a way to allow users to launch their own clients even if the official gaming service is terminated or the server is taken offline.

Also, the play style of this game is to farm the battle as much as possible and make a lot of profits. However, players cannot read the story while they are farming, and they cannot farm while they are reading the story. rakuen provides a way for players to enjoy the story while farming in such cases.

This is not a project to recreate the actual game. It's practically impossible and meaningless. And I don't want to be sued.

## To the right holders

This repository does not contain any game data, but if you have any problems publishing this repository, please email `eai@mizle.net`.

## Status

![screenshot](https://user-images.githubusercontent.com/3516343/170075812-744d4901-2e12-4332-bbfc-850685abf9e5.png)

![screenshot](https://user-images.githubusercontent.com/3516343/170075577-384c39e9-822a-4cc0-ad7f-3e29a66b83d4.png)

Currently, there is nothing to authenticate users or persist data. Therefore, to use this, the user needs to start the server in each environment.

Most of the data is mocked, so when the user takes action, nothing changes.

The main functions that currently work are as follows:

-   [x] Login
-   [x] Read all story scenarios in the archive room
-   [x] Read all event scenarios in the archive room

## Ports

Each package uses the following ports:

-   `2052`: API Server
-   `2070`: Patch Server
-   `2114`: Client

If these are used, they may not work properly. Change it if necessary.

## Running the Game

**If you don't have the game assets, you can only see the title screen. The asset is not included in the repository, so you probably need to get it from another location.**

If you have game assets, place them in `/client` and `/patch`
The file structure is as follows:

```
📁 patch
├📁 LAOJP_DMM_WEB_N
│└📁 2.0.6
│　├📄 2dmodel_3p_alexandra_n
│　├📄 2dmodel_3p_alexandra_n_dam
│　├📄 2dmodel_3p_alexandra_ns1
│　└ ...(1330 files in total)
└📁 LAOJP_DMM_WEB_R
　└📁 2.0.6
　　├📄 2dmodel_3p_alexandra_n
　　├📄 2dmodel_3p_alexandra_n_dam
　　├📄 2dmodel_3p_alexandra_ns1
　　└ ...(1330 files in total)
📁 client
└📁 public
　└📁 data
　　├📄 DMM_N.data.unityweb
　　├📄 DMM_N.json
　　├📄 DMM_N.wasm.code.unityweb
　　├📄 DMM_N.wasm.framework.unityweb
　　├📄 DMM_R.data.unityweb
　　├📄 DMM_R.json
　　├📄 DMM_R.wasm.code.unityweb
　　└📄 DMM_R.wasm.framework.unityweb
```

Once you have your assets ready, you can start them.

```bash
# Install dependencies
$ yarn install

# Start api, patch server and client
# The browser should open if it starts successfully
$ yarn start
```

## Support

I'm not going to receive any money for this project, but you can use [GitHub Sponsors](https://github.com/sponsors/eai04191) to help me personally.

## License

Rakuen is [MIT licensed](./LICENSE).
