<!-- <p align="center">
  <img src="" width="320" alt="Rakuen" />
</p> -->

# Rakuen

**Rakuen** is a fan-made backend server implementation of the game [Last Origin](https://www.last-origin.com/) (Japanese ver).

## Philosophy

Rakuen provides a way to allow users to launch their own clients even if the official gaming service is terminated or the server is taken offline.

Also, the play style of this game is to farm the battle as much as possible and make a lot of profits. However, players cannot read the story while they are farming, and they cannot farm while they are reading the story. rakuen provides a way for players to enjoy the story while farming in such cases.

This is not a project to recreate the actual game. It's practically impossible and meaningless. And I don't want to be sued.

## To the right holders

This repository does not contain any game data, but if you have any problems publishing this repository, please email `eai@mizle.net`.

## Status

![screenshot](https://user-images.githubusercontent.com/3516343/157289624-a52cd49f-2b5e-4ecf-ba9c-34d1fda3fc9a.png)

Currently, there is nothing to authenticate users or persist data. Therefore, to use this, the user needs to start the server in each environment.

Most of the data is mocked, so when the user takes action, nothing changes.

The main functions that currently work are as follows:

-   [x] Login
-   [x] Read all story scenarios in the archive room
-   [x] Read all event scenarios in the archive room

## Running the server

```bash
# install dependencies
$ yarn install

# start development server
$ yarn start

# start development server as watch mode
$ yarn start:dev

# start production server
$ yarn start:prod
```

## Connect from the client

### WebGL (Browser)

Transfer the request to `https://gate.last-origin.com/` to rakuen using software such as [HTTP Toolkit](https://httptoolkit.tech/) or [Charles Proxy](https://www.charlesproxy.com/). Details will be written here soon.

You don't need to tweak your clients to connect to Rakuen.

### Android

> ![image](https://user-images.githubusercontent.com/3516343/157277153-7f760330-55ee-41d2-a9ab-dbed348ef003.png)
>
> _A screenshot of Last Origin being started with network intercepted using the [HTTP Toolkit](https://httptoolkit.tech/). The modal says “App will be terminated because a security policy violation has been detected”._

There is something that seems to be an anti-cheat in the Android version of the game, and you cannot continue the game if the network is intercepted. Therefore, it is not possible to connect to Rakuen without modifying the client. (And if you modify the client, your account will be banned)

### iOS

As far as I know, there is no way to forward in-app requests on iOS.

## Test

There are no tests now.

```bash
# unit tests
$ yarn test

# e2e tests
$ yarn test:e2e

# test coverage
$ yarn test:cov
```

## Support

I'm not going to receive any money for this project, but you can use [GitHub Sponsors](https://github.com/sponsors/eai04191) to help me personally.

## License

Rakuen is [MIT licensed](./LICENSE).
