// src/data/repositories/CarRepository.ts
import { ICarRepository } from '../../domain/repositories/ICarRepository';
import { Car, CarMake } from '../../domain/models/Car.model';
import { CarsApi } from '../api/CarsApi';

// Este repositorio usa la API e implementa el contrato de Dominio
export class CarRepository implements ICarRepository {
    private api = new CarsApi();

    async getAllCars(): Promise<Car[]> {
        // Lógica de caché o transformación de datos aquí, si fuera necesario
        return this.api.fetchAllCars();
    }

    async getCarDetails(id: number): Promise<Car> {
        return this.api.fetchCarDetails(id);
    }

    async getAllMakes(): Promise<CarMake[]> {
        return this.api.fetchAllMakes();
    }
}