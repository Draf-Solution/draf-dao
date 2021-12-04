import {
  Controller,
  Body,
  Post,
  Request,
  Logger,
  Query,
  Get
} from "@nestjs/common";
import { CRPService } from "../service/crp.service";
import { Response } from "../dto/response.dto";
import {
  ApiBearerAuth,
  ApiOperation,
  ApiPayloadTooLargeResponse,
  ApiResponse,
  ApiTags,
  ApiParam,
  ApiQuery
} from "@nestjs/swagger";

@Controller("acc/cp")
export class CRPController {
  constructor(private crpService: CRPService) {}

  @Post("list")
  async getList() {
    const strRse = this.crpService.getList();
    return strRse;
  }
}
