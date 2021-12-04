import { ApiProperty } from "@nestjs/swagger";
export class Response {
  @ApiProperty()
  result: string;

  @ApiProperty()
  data: any;

  @ApiProperty()
  message: string;
}
