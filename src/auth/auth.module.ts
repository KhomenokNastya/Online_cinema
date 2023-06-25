import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { TypegooseModule } from 'nestjs-typegoose'
import { UserModel } from '../user/user.model'
import { ConfigModule } from '@nestjs/config'

@Module({
  controllers: [AuthController],
  imports: [
    TypegooseModule.forFeature([
      {
        typegooseClass: UserModel,
        schemaOptions: {
          collection: 'User'
        }
      }
    ]),
    ConfigModule,
  ],
  providers: [AuthService],
})
export class AuthModule {}
