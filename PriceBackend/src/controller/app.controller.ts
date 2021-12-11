import { AppService } from "@/service/app.service";
import { Controller, Get , Post} from "@nestjs/common";

@Controller("api/setTgUsername")
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  createUser(): string {
    return this.appService.createUser("Smilalot");
  }
}
