import { Injectable } from '@nestjs/common';
import { CreateFlightDto } from './dto/create-flight.dto';
import { UpdateFlightDto } from './dto/update-flight.dto';
import { Flight } from 'src/common/entities';
import { FlightRepository } from 'src/common/repositories/flight.repository';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class FlightService {
  constructor(
    @InjectRepository(Flight)
    private readonly flightRepository: FlightRepository,
  ) {}

  async create(data: CreateFlightDto) {
    return await this.flightRepository.save(data);
  }

  async findAll() {
    return await this.flightRepository.find();
  }

  async findOne(params: { id?: string; flightNumber?: string }) {
    const { id, flightNumber } = params;
    if (!id && !flightNumber) return null;

    const conditions = [];
    if (id) conditions.push({ id });
    if (flightNumber) conditions.push({ flightNumber });

    return await this.flightRepository.findOne({
      where: conditions.length > 1 ? conditions : conditions[0] || {},
    });
  }

  async update(id: string, data: UpdateFlightDto) {
    await this.flightRepository.update(id, data);
  }

  async remove(id: string) {
    const record = await this.findOne({ id });
    if (!record) return null;

    await this.flightRepository.remove(record);
  }
}
