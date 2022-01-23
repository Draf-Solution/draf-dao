import { ProfileService } from "../service/profile.service";
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

@Controller("api/setTgUsername")
export class ProfileController {
  constructor(private readonly profileService: ProfileService) {}

  @Post('/create-user')
  @ApiQuery({name: 'username'})
  createUser(@Query('username') strUsername: string) : string {
    return this.profileService.createUser(strUsername);
  }

  @Post('/get-user')
  @ApiQuery({name: 'username'})
  getTgUser(@Query('username') strUsername: string) : string {
    return this.profileService.getUser(strUsername);
  }
}
