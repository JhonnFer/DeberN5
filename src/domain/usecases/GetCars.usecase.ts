// src/domain/usecases/GetCars.usecase.ts
import { CarRepository } from "../../data/repositories/CarRepository";
import { Car } from "../models/Car.model";
import { ICarRepository } from "../repositories/ICarRepository";

const carRepository: ICarRepository = new CarRepository();

export class GetCarsUseCase {
  async execute(): Promise<Car[]> {
    // Lógica de negocio: Filtrar, ordenar, etc., antes de devolver los datos
    const digimons = await carRepository.getAllCars();
    return digimons.sort((a, b) => a.make.localeCompare(b.make)); // Ordenar por nombre (Digimon)
  }
}
