import { Module } from "@nestjs/common";
import { DataSubController } from "../controller/dataSub.controller";
import { DataSubService } from "../service/dataSub.service";

@Module({
  controllers: [DataSubController],
  providers: [DataSubService]
})
export class DataSubModule {}
