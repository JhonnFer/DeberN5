# 🔧 DEBUGGING - Digimon App

## ¿Qué cambió?

✅ Cambié de `axios` a `fetch` nativo para mejor compatibilidad con React Native
✅ Añadí logging detallado en todos los endpoints
✅ Los 3 tabs ahora llaman a los 3 endpoints de Digimon API

## 📱 Los 3 Tabs

### Tab 1: "Todos" (📚)

- Endpoint: `GET https://digimon-api.vercel.app/api/digimon`
- Archivo: `app/(tabs)/index.tsx`
- Debe mostrar: Lista completa de digimons

### Tab 2: "Niveles" (📊)

- Endpoint: `GET https://digimon-api.vercel.app/api/digimon/level/:level`
- Archivo: `app/(tabs)/makes.tsx`
- Debe mostrar: Selector de niveles con digimons filtrados

### Tab 3: "Buscar" (🔍)

- Endpoint: `GET https://digimon-api.vercel.app/api/digimon/name/:name`
- Archivo: `app/(tabs)/search.tsx`
- Debe mostrar: Campo de búsqueda con resultados filtrados

## 🐛 Cómo debuggear

1. **Abre la consola de Expo:**

   - En terminal: `npx expo start`
   - En Android: Presiona `a` luego abre Logcat
   - En iOS: Abre el simulador y ve Console.app
   - En Web: Abre DevTools (F12)

2. **Busca estos logs:**

   ```
   🌐 Llamando a: https://digimon-api.vercel.app/api/digimon
   📥 Respuesta recibida, tipo: object es array: true
   ✅ Se cargaron XXX digimons
   ```

3. **Si ves errores:**
   ```
   ❌ Error en fetchAllCars: [error message]
   ❌ Error en búsqueda: [error message]
   ```

## 🔍 Test Manual

Abre una terminal y ejecuta:

```bash
curl "https://digimon-api.vercel.app/api/digimon" | head -c 500
```

Deberías ver JSON con digimons. Si no funciona, la API está caída.

## ✅ Checklist

- [ ] La app carga sin errores
- [ ] Tab "Todos" muestra digimons
- [ ] Tab "Niveles" muestra selector de niveles
- [ ] Tab "Buscar" permite buscar por nombre
- [ ] La consola muestra logs con emojis

## 📝 Próximos pasos

Si aún no funciona, prueba:

1. Limpia el cache de Expo:

   ```bash
   expo prebuild --clean
   ```

2. Reinicia el servidor:

   ```bash
   Ctrl+C (para detener)
   npx expo start
   ```

3. En el móvil/simulador: Presiona `r` para recargar
