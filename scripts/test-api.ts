// Prueba rápida para ver qué devuelve la API
// Ejecutar: npx ts-node scripts/test-api.ts

import axios from "axios";

const BASE_URL = "https://myfakeapi.com/api";

async function testAPI() {
  try {
    console.log("Probando GET /api/cars...");
    const response = await axios.get(`${BASE_URL}/cars`);
    console.log("Respuesta:", JSON.stringify(response.data, null, 2));
  } catch (error) {
    console.error("Error:", error);
  }
}

testAPI();
