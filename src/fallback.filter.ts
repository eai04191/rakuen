import {
    ArgumentsHost,
    Catch,
    ExceptionFilter,
    HttpException,
} from "@nestjs/common";

@Catch()
export class FallbackFilter implements ExceptionFilter {
    catch(exception: HttpException, host: ArgumentsHost) {
        host.switchToHttp().getResponse().status(200).send({
            ErrorCode: 0,
        });
    }
}
