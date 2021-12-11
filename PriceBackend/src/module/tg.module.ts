import { Module } from "@nestjs/common";
//import { ConfigModule } from "@nestjs/config";
import { TgController } from "../controller/tg.controller";
import { TgService } from "../service/tg.service";


@Module({
  /*
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    BlockchainModule,
    DataSubModule
  ],
  */
  controllers: [TgController],
  providers: [TgService]
})
export class TgModule {}
