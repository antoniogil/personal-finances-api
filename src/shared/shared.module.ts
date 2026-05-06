import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { AuthGuard } from 'src/auth/auth.guard';
import { jwtContants } from 'src/auth/constants';

@Module({
  imports: [
    JwtModule.register({
      global: true,
      secret: jwtContants.secret,
      signOptions: { expiresIn: '60m' }
    })
  ],
  providers: [AuthGuard],
  exports: [AuthGuard, JwtModule],
})
export class SharedModule { }
