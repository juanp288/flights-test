import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { Passenger } from '../entities';

@Injectable()
export class PassengerRepository extends Repository<Passenger> {}
