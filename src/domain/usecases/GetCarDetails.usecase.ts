// src/domain/usecases/GetCarDetails.usecase.ts
import { Car } from '../models/Car.model';
import { ICarRepository } from '../repositories/ICarRepository';
import { CarRepository } from '../../data/repositories/CarRepository';

const carRepository: ICarRepository = new CarRepository();

export class GetCarDetailsUseCase {
  async execute(id: number): Promise<Car> {
    if (!id) {
        throw new Error("Se requiere el ID del coche para obtener detalles.");
    }
    return carRepository.getCarDetails(id);
  }
}