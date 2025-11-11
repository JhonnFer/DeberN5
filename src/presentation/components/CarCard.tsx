// src/presentation/components/CarCard.tsx
import { Image } from "expo-image";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Car } from "../../domain/models/Car.model";

// --- ESTILOS LOCALES SIMPLES ---
const styles = StyleSheet.create({
    card: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        borderRadius: 12,
        marginVertical: 8,
        marginHorizontal: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
        overflow: 'hidden',
    },
    image: {
        width: 120,
        height: 100,
        backgroundColor: '#f0f0f0',
    },
    info: {
        flex: 1,
        padding: 10,
        justifyContent: 'center',
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333',
    },
    subtitle: {
        fontSize: 14,
        color: '#666',
        marginBottom: 4,
    },
});
// ---------------------------------

interface CarCardProps {
    car: Car;
}

export const CarCard: React.FC<CarCardProps> = ({ car }) => {
    return (
        <View style={styles.card}>
            <Image
                source={{ uri: car.imageUrl || 'https://via.placeholder.com/120' }}
                style={styles.image}
                contentFit="cover"
                transition={300}
            />

            <View style={styles.info}>
                <Text style={styles.title} numberOfLines={1}>
                    {car.make}
                </Text>
                <Text style={styles.subtitle}>
                    Nivel: {car.model}
                </Text>
                <Text style={styles.subtitle}>
                    {car.description}
                </Text>
            </View>
        </View>
    );
};