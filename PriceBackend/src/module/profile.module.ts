import { Module } from "@nestjs/common";
//import { ConfigModule } from "@nestjs/config";
import { ProfileController } from "../controller/profile.controller";
import { ProfileService } from "../service/profile.service";


@Module({
  /*
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    BlockchainModule,
    DataSubModule
  ],
  */
  controllers: [ProfileController],
  providers: [ProfileService]
})
export class ProfileModule {}
