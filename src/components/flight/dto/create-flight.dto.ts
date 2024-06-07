import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsDateString, IsUUID } from 'class-validator';

export class CreateFlightDto {
  @ApiProperty()
  @IsString()
  flightNumber: string;

  @ApiProperty()
  @IsString()
  departure: string;

  @ApiProperty()
  @IsString()
  destination: string;

  @ApiProperty()
  @IsDateString()
  departureTime: Date;

  @ApiProperty()
  @IsDateString()
  arrivalTime: Date;
}
