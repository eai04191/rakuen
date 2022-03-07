import {
    ArgumentsHost,
    Catch,
    ExceptionFilter,
    HttpException,
} from "@nestjs/common";

@Catch()
export class FallbackFilter implements ExceptionFilter {
    catch(exception: HttpException, host: ArgumentsHost) {
        const Sequence = host.switchToHttp().getRequest().body.Sequence;
        host.switchToHttp()
            .getResponse()
            .status(200)
            .send({
                ErrorCode: 0,
                Result: null,
                Sequence: Sequence + 1,
            });
    }
}
