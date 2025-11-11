// src/domain/models/Car.model.ts

export interface Car {
  id: number;
  make: string; // Nombre del Digimon
  model: string; // Nivel del Digimon
  year: number; // Año (no usado para Digimon)
  horsepower: number; // Potencia (no usado para Digimon)
  price: number; // Precio (no usado para Digimon)
  imageUrl: string; // URL de la imagen
  description: string; // Descripción detallada
}

export interface CarMake {
  id: number;
  name: string;
}

export interface User {
  uid: string;
  email: string | null;
}
