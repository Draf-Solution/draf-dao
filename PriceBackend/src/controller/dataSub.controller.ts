import { DataSubService } from "@/service/dataSub.service";
import { Controller, Get } from "@nestjs/common";

@Controller("/data-submission")
export class DataSubController {
  constructor(private dataSubService: DataSubService) {}

  @Get()
  hello() {
    if (true) {
      const a = 1;
      console.log(a);
      this.dataSubService.hello();
    }
  }
}
