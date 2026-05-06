import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { ApiProperty } from '@nestjs/swagger';

class SingingRequest {
  @ApiProperty()
  username: string;
  @ApiProperty()
  password: string;
}

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) { }

  @HttpCode(HttpStatus.OK)
  @Post(`login`)
  async login(@Body() signInDto: SingingRequest): Promise<string> {
    return await this.authService.singIn(signInDto.username, signInDto.password);
  }
}

