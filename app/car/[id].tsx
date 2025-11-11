// app/car/[id].tsx
import { Stack, useLocalSearchParams } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Alert, Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { Car } from '../../src/domain/models/Car.model';
import { GetCarDetailsUseCase } from '../../src/domain/usecases/GetCarDetails.usecase';

const getCarDetailsUseCase = new GetCarDetailsUseCase();

const CarDetailScreen = () => {
    const { id } = useLocalSearchParams();
    const [car, setCar] = useState<Car | null>(null);
    const [loading, setLoading] = useState(true);

    // Asegura que id sea un número. Expo Router devuelve string o array de string.
    const carId = Array.isArray(id) ? parseInt(id[0]) : parseInt(id || '0');

    useEffect(() => {
        if (carId) {
            fetchCarDetails(carId);
        } else {
            setLoading(false);
            Alert.alert("Error", "ID del Digimon no encontrado.");
        }
    }, [carId]);

    const fetchCarDetails = async (carId: number) => {
        try {
            const data = await getCarDetailsUseCase.execute(carId);
            setCar(data);
        } catch (error) {
            console.error("Error al cargar detalles:", error);
            Alert.alert("Error", "No se pudieron cargar los detalles del Digimon.");
        } finally {
            setLoading(false);
        }
    };

    if (loading) {
        return <ActivityIndicator size="large" style={styles.center} />;
    }

    if (!car) {
        return <Text style={styles.center}>Digimon no encontrado.</Text>;
    }

    return (
        <ScrollView style={styles.container}>
            <Stack.Screen options={{ title: `${car.make}` }} />
            <Image source={{ uri: car.imageUrl }} style={styles.carImage} resizeMode="cover" />

            <View style={styles.infoContainer}>
                <Text style={styles.title}>{car.make}</Text>

                <View style={styles.detailRow}>
                    <Text style={styles.label}>Nivel:</Text>
                    <Text style={styles.value}>{car.model}</Text>
                </View>

                <Text style={styles.descriptionTitle}>Descripción:</Text>
                <Text style={styles.descriptionText}>{car.description}</Text>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    center: { flex: 1, justifyContent: 'center', alignItems: 'center' },
    container: { flex: 1, backgroundColor: '#fff' },
    carImage: { width: '100%', height: 250, backgroundColor: '#f0f0f0' },
    infoContainer: { padding: 20 },
    title: { fontSize: 24, fontWeight: 'bold', marginBottom: 15, color: '#333' },
    detailRow: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 8, paddingBottom: 5, borderBottomWidth: 1, borderBottomColor: '#eee' },
    label: { fontSize: 16, color: '#666', fontWeight: '500' },
    value: { fontSize: 16, color: '#333' },
    descriptionTitle: { fontSize: 18, fontWeight: 'bold', marginTop: 15, marginBottom: 5 },
    descriptionText: { fontSize: 16, color: '#333', lineHeight: 24 },
});

export default CarDetailScreen;