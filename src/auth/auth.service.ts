import { Inject, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
  constructor(
    @Inject('UsersService') private readonly usersService: UsersService,
    private readonly jwtService: JwtService
  ) { }

  async singIn(username: string, pass: string): Promise<any> {
    const user = await this.usersService.findOneByUsername(username);
    if (user?.password !== pass)
      throw new UnauthorizedException();

    const payload = { sub: user.userId, username: user.username };
    return {
      access_token: await this.jwtService.signAsync(payload)
    };
  }
}
