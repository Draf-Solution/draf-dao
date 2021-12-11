import { AppService } from "@/service/app.service";
import { Body, Controller, Get , Post} from "@nestjs/common";
import {
  ApiBearerAuth,
  ApiOperation,
  ApiPayloadTooLargeResponse,
  ApiResponse,
  ApiTags,
  ApiParam,
  ApiQuery
} from '@nestjs/swagger';

@Controller("api/setTgUsername")
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('/create-user')
  createUser(@Body() strUsername: string) : string {
    return this.appService.createUser(strUsername);
  }
}
