import { Module } from "@nestjs/common";
//import { ConfigModule } from "@nestjs/config";
import { TgModule } from "./tg.module";
import { ProfileModule } from "./profile.module";



@Module({

  imports: [
    TgModule,
    ProfileModule
  ],
})
export class AppModule {}
