import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { SharedModule } from 'src/shared/shared.module';

@Module({
  providers: [
    {
      provide: 'UsersService',
      useClass: UsersService,
    },
    UsersService,
  ],
  exports: [UsersService, 'UsersService'],
  controllers: [UsersController],
  imports: [SharedModule]
})
export class UsersModule {
}
