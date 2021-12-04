import { CRPController } from "@/controller/crp.controller";
import { CRPService } from "@/service/crp.service";
import { Module } from "@nestjs/common";

@Module({
  providers: [CRPService],
  controllers: [CRPController]
})
export class BlockchainModule {}
