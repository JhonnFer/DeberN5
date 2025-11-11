// src/data/api/CarsApi.ts
import { Car, CarMake } from "../../domain/models/Car.model";

// API: Digimon API - Super simple y funcional
const BASE_URL = "https://digimon-api.vercel.app/api";

export class CarsApi {
  async fetchAllCars(): Promise<Car[]> {
    try {
      console.log("🌐 Llamando a:", BASE_URL + "/digimon");
      const response = await fetch(BASE_URL + "/digimon");

      if (!response.ok) {
        throw new Error(`HTTP Error: ${response.status}`);
      }

      let data = await response.json();
      console.log(
        "📥 Respuesta recibida, tipo:",
        typeof data,
        "es array:",
        Array.isArray(data)
      );

      if (!Array.isArray(data)) {
        if (data?.digimons && Array.isArray(data.digimons)) {
          data = data.digimons;
        } else if (data?.data && Array.isArray(data.data)) {
          data = data.data;
        } else {
          console.error("❌ La API no devolvió un array");
          return [];
        }
      }

      if (!Array.isArray(data) || data.length === 0) {
        console.warn("⚠️ La API devolvió un array vacío");
        return [];
      }

      console.log(`✅ Se cargaron ${data.length} digimons`);

      return data.map((item: any, index: number): Car => {
        return {
          id: index + 1,
          make: item.name || "Unknown",
          model: item.level || "Digimon",
          year: 2024,
          horsepower: 0,
          price: 0,
          imageUrl: item.img || "https://via.placeholder.com/200",
          description: `${item.name || "Digimon"} - ${item.level || ""}`.trim(),
        };
      });
    } catch (error: any) {
      console.error("❌ Error en fetchAllCars:", error.message);
      throw error;
    }
  }

  async fetchCarDetails(id: number): Promise<Car> {
    try {
      // Primero obtenemos todos los digimons para obtener el nombre por ID
      const allResponse = await fetch(BASE_URL + "/digimon");
      const allData = await allResponse.json();
      const allDatos = Array.isArray(allData) ? allData : [];
      const digimon = allDatos[id - 1]; // ID comienza en 1

      if (!digimon) {
        throw new Error(`Digimon con ID ${id} no encontrado`);
      }

      // Luego obtenemos el detalle usando el endpoint de nombre
      const response = await fetch(BASE_URL + `/digimon/name/${digimon.name}`);
      const responseData = await response.json();
      let item = Array.isArray(responseData)
        ? responseData[0]
        : responseData?.data || responseData;

      return {
        id: id,
        make: item.name || "Unknown",
        model: item.level || "Digimon",
        year: 2024,
        horsepower: 0,
        price: 0,
        imageUrl: item.img || "https://via.placeholder.com/200",
        description: `${item.name || "Digimon"} - ${item.level || ""}`.trim(),
      } as Car;
    } catch (error) {
      console.error("Error en fetchCarDetails:", error);
      throw error;
    }
  }

  async fetchAllMakes(): Promise<CarMake[]> {
    try {
      // Obtenemos todos los digimons y extraemos los niveles únicos
      const response = await fetch(BASE_URL + "/digimon");
      let data = await response.json();

      if (!Array.isArray(data)) {
        if (data?.digimons && Array.isArray(data.digimons)) {
          data = data.digimons;
        } else if (data?.data && Array.isArray(data.data)) {
          data = data.data;
        } else {
          console.warn("La API no devolvió datos de digimons");
          return [];
        }
      }

      if (!Array.isArray(data) || data.length === 0) {
        console.warn("La API no devolvió datos de digimons");
        return [];
      }

      // Extraemos los niveles únicos
      const uniqueLevels = [
        ...new Set(data.map((d: any) => d.level).filter(Boolean)),
      ].sort();

      console.log(`✅ Se cargaron ${uniqueLevels.length} niveles`);

      return uniqueLevels.map(
        (level: any, index: number): CarMake => ({
          id: index + 1,
          name: level || "Unknown",
        })
      );
    } catch (error) {
      console.error("Error en fetchAllMakes:", error);
      throw error;
    }
  }

  /**
   * Obtiene digimons por nivel usando /api/digimon/level/:level
   */
  async fetchDigimonsByLevel(level: string): Promise<Car[]> {
    try {
      console.log("🌐 Llamando a:", BASE_URL + `/digimon/level/${level}`);
      const response = await fetch(BASE_URL + `/digimon/level/${level}`);
      const responseData = await response.json();
      let data = Array.isArray(responseData) ? responseData : [];

      if (data.length === 0) {
        console.warn(`⚠️ No hay digimons con nivel: ${level}`);
        return [];
      }

      console.log(`✅ Se cargaron ${data.length} digimons de nivel: ${level}`);

      return data.map((item: any, index: number): Car => {
        return {
          id: index + 1,
          make: item.name || "Unknown",
          model: item.level || "Digimon",
          year: 2024,
          horsepower: 0,
          price: 0,
          imageUrl: item.img || "https://via.placeholder.com/200",
          description: `${item.name || "Digimon"} - ${item.level || ""}`.trim(),
        };
      });
    } catch (error) {
      console.error(`Error en fetchDigimonsByLevel (${level}):`, error);
      throw error;
    }
  }
}
