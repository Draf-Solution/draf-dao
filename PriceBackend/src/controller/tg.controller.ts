import { TgService } from "@/service/tg.service";
import { Body, Controller, Get , Post, Query} from "@nestjs/common";
import {
  ApiBearerAuth,
  ApiOperation,
  ApiPayloadTooLargeResponse,
  ApiResponse,
  ApiTags,
  ApiParam,
  ApiQuery
} from '@nestjs/swagger';

@Controller("tg")
export class TgController {
  constructor(private readonly tgService: TgService) {}

  @Post('send-msg')
  @ApiQuery({name: 'username'})
  @ApiQuery({name: 'message'})
  async sendMsg(@Query('username') strUsername: string,
              @Query('message') strMsg : string) : Promise<string> {
    return await this.tgService.sendMsg(strUsername, strMsg);
  }
  

}
