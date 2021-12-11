import { Module } from "@nestjs/common";
//import { ConfigModule } from "@nestjs/config";
import { AppController } from "../controller/app.controller";
import { AppService } from "../service/app.service";


@Module({
  /*
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    BlockchainModule,
    DataSubModule
  ],
  */
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
