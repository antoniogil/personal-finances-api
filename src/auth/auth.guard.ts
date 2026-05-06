import { CanActivate, ExecutionContext, Inject, UnauthorizedException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { log } from "console";

export class AuthGuard implements CanActivate {
  constructor(@Inject() private readonly jwtService: JwtService) { }

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const token = this.extractTokenFromHeader(request);

    if (!token) {
      throw new UnauthorizedException();
    }

    try {
      const payload = await this.jwtService.verifyAsync(token);
      request['user'] = payload;
    } catch (error) {
      log(error);
      throw new UnauthorizedException();
    }

    return true;
  }


  extractTokenFromHeader(request: any) {
    const [type, token] = request.headers.authorization?.split(' ') ?? [];
    return type === 'Bearer' ? token : undefined;
  }

}
