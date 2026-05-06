import { Controller, Get, HttpCode, HttpStatus, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from 'src/auth/auth.guard';
import { UsersService } from './users.service';

@UseGuards(AuthGuard)
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) { }

  @HttpCode(HttpStatus.OK)
  @Get('profile')
  async getProfile(@Req() req) {
    return req.user;
  }

  @Get('profile/:id')
  async getUser(@Req() id: number) {
    return this.usersService.findOneById(id);
  }

}
