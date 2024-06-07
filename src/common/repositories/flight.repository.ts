import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { Flight } from '../entities';

@Injectable()
export class FlightRepository extends Repository<Flight> {}
