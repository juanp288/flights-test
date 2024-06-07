import { Module } from '@nestjs/common';
import { FlightService } from './flight.service';
import { FlightController } from './flight.controller';
import { FlightRepository } from 'src/common/repositories/flight.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Flight } from 'src/common/entities';

@Module({
  imports: [TypeOrmModule.forFeature([Flight])],
  controllers: [FlightController],
  providers: [FlightService, FlightRepository],
  exports: [FlightService],
})
export class FlightModule {}
