import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports:[ MongooseModule.forRoot('mongodb+srv://sergio:uzumymw@clusterusers.g3pkq9g.mongodb.net/test'),
            UsersModule,
          ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
