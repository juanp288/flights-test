import { Module } from '@nestjs/common';
import { PassengerService } from './passenger.service';
import { PassengerController } from './passenger.controller';
import { PassengerRepository } from 'src/common/repositories/passenger.repository';
import { Passenger } from 'src/common/entities';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Passenger])],
  controllers: [PassengerController],
  providers: [PassengerService, PassengerRepository],
})
export class PassengerModule {}
