import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Flight } from './flight.entity';

@Entity({ name: 'passengers' })
export class Passenger {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  passportNumber: string;

  @Column({ name: 'flight_id', type: 'varchar', nullable: true })
  flightId: string;
  @ManyToOne(() => Flight)
  @JoinColumn({ name: 'flight_id' })
  flight: Flight;
}
