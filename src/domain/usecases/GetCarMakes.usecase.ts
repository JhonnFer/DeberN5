// src/domain/usecases/GetCarMakes.usecase.ts
import { CarMake } from '../models/Car.model';
import { ICarRepository } from '../repositories/ICarRepository';
import { CarRepository } from '../../data/repositories/CarRepository';

const carRepository: ICarRepository = new CarRepository();

export class GetCarMakesUseCase {
  async execute(): Promise<CarMake[]> {
    const makes = await carRepository.getAllMakes();
    return makes.sort((a, b) => a.name.localeCompare(b.name));
  }
}