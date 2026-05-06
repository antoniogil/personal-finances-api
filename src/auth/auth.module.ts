import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UsersModule } from 'src/users/users.module';
import { SharedModule } from 'src/shared/shared.module';

@Module({
  providers: [AuthService],
  imports: [UsersModule, SharedModule],
  controllers: [AuthController],
})
export class AuthModule { }
