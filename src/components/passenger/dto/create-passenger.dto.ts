import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsUUID } from 'class-validator';


export class CreatePassengerDto {
  @ApiProperty()
  @IsString()
  name: string;

  @ApiProperty()
  @IsString()
  passportNumber: string;

  @ApiProperty()
  @IsUUID()
  flightId: string;
}
