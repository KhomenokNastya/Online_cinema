import { Module } from '@nestjs/common'
import { TypegooseModule } from 'nestjs-typegoose'
import { UserModule } from 'src/user/user.module'
import { MovieController } from './movie.controller'
import { MovieModel } from './movie.model'
import { MovieService } from './movie.service'
import { TelegramModule } from '../telegram/telegram.module'

@Module({
  controllers: [MovieController],
  imports: [
    TypegooseModule.forFeature([
      {
        typegooseClass: MovieModel,
        schemaOptions: {
          collection: 'Movie',
        },
      },
    ]),
    UserModule,
    TelegramModule,
  ],
  providers: [MovieService],
  exports: [MovieService],
})
export class MovieModule {}
