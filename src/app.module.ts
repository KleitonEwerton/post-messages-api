import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { PostsModule } from './posts/posts.module';
import { ProfilesModule } from './profiles/profiles.module';

@Module({
  imports: [UsersModule, PostsModule, ProfilesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
