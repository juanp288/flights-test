import { Injectable } from '@nestjs/common';
import { CreatePassengerDto } from './dto/create-passenger.dto';
import { UpdatePassengerDto } from './dto/update-passenger.dto';
import { Passenger } from 'src/common/entities';
import { InjectRepository } from '@nestjs/typeorm';
import { PassengerRepository } from 'src/common/repositories/passenger.repository';

@Injectable()
export class PassengerService {
  constructor(
    @InjectRepository(Passenger)
    private readonly passengerRepository: PassengerRepository,
  ) {}

  async create(data: CreatePassengerDto) {
    return await this.passengerRepository.save(data);
  }

  async findAll() {
    return await this.passengerRepository.find();
  }

  async findOne(params: { id?: string; passportNumber?: string }) {
    const { id, passportNumber } = params;
    if (!id && !passportNumber) return null;

    const conditions = [];
    if (id) conditions.push({ id });
    if (passportNumber) conditions.push({ passportNumber });

    return await this.passengerRepository.findOne({
      where: conditions.length > 1 ? conditions : conditions[0] || {},
    });
  }

  async findByFlight(flightId: string): Promise<Passenger[]> {
    return await this.passengerRepository.findBy({ flightId });
  }

  async update(id: string, data: UpdatePassengerDto) {
    await this.passengerRepository.update(id, data);
  }

  async remove(id: string) {
    const record = await this.findOne({ id });
    if (!record) return null;

    await this.passengerRepository.remove(record);
  }
}
