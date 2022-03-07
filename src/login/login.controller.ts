import { Controller, HttpCode, Post, Req } from "@nestjs/common";
import { Request } from "express";
import { LoginService } from "./login.service";

@Controller("login")
export class LoginController {
    constructor(private loginService: LoginService) {}

    @Post()
    @HttpCode(200)
    getLogin(@Req() request: Request) {
        return this.loginService.getLogin(request);
    }
}
