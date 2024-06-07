import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Passenger } from './passenger.entity';

@Entity()
export class Flight {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  flightNumber: string;

  @Column()
  departure: string;

  @Column()
  destination: string;

  @Column({ type: 'timestamp' })
  departureTime: Date;

  @Column({ type: 'timestamp' })
  arrivalTime: Date;

  @OneToMany(() => Passenger, (passenger) => passenger.flight)
  passengers: Passenger[];
}
