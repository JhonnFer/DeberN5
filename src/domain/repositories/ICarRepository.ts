// src/domain/repositories/ICarRepository.ts
import { Car, CarMake } from '../models/Car.model';

export interface ICarRepository {
  getAllCars(): Promise<Car[]>;
  getCarDetails(id: number): Promise<Car>;
  getAllMakes(): Promise<CarMake[]>;
}