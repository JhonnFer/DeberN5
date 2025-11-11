// app/(tabs)/index.tsx
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Button, FlatList, StyleSheet, Text, View } from 'react-native';
import { AuthRepository } from '../../src/data/repositories/AuthRepository';
import { Car } from '../../src/domain/models/Car.model';
import { GetCarsUseCase } from '../../src/domain/usecases/GetCars.usecase';
import { CarCard } from '../../src/presentation/components/CarCard';

const getCarsUseCase = new GetCarsUseCase();
const authRepository = new AuthRepository();

const CarsScreen = () => {
  const [cars, setCars] = useState<Car[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchCars();
  }, []);

  const fetchCars = async () => {
    setLoading(true);
    setError(null);
    try {
      console.log('🔄 Cargando digimons...');
      const data = await getCarsUseCase.execute();
      console.log('✅ Digimons cargados:', data.length);
      setCars(data);
    } catch (err: any) {
      console.error('❌ Error en fetchCars:', err);
      setError("Error al cargar los Digimons. " + (err?.message || "Verifique la conexión a internet."));
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    try {
      await authRepository.logout();
      // La redirección a login la maneja useAuth
    } catch (error) {
      console.error("Fallo el logout", error);
    }
  };

  if (loading) {
    return <ActivityIndicator size="large" style={{ flex: 1, justifyContent: 'center' }} />;
  }

  if (error) {
    return (
      <View style={styles.centerView}>
        <Text style={styles.errorText}>{error}</Text>
        <Button title="Reintentar" onPress={fetchCars} />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>📚 Todos los Digimons</Text>
        <Button title="Cerrar Sesión" onPress={handleLogout} color="#FF3B30" />
      </View>
      <FlatList
        data={cars}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <CarCard car={item} />}
        contentContainerStyle={{ paddingBottom: 20 }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#eef2f5' },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 15, backgroundColor: '#fff', borderBottomWidth: 1, borderBottomColor: '#ddd' },
  headerTitle: { fontSize: 20, fontWeight: 'bold' },
  centerView: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  errorText: { color: 'red', marginBottom: 10, fontSize: 16 },
});

export default CarsScreen;