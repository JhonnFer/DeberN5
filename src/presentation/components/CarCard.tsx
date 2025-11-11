import { Image } from 'expo-image';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Car } from '../../domain/models/Car.model';
import { componentStyles, spacing } from '../../styles';

const styles = StyleSheet.create({
    cardRow: {
        flexDirection: 'row',
        marginHorizontal: spacing.lg,
        marginVertical: spacing.sm,
    },
});

interface CarCardProps {
    car: Car;
}

export const CarCard: React.FC<CarCardProps> = ({ car }) => {
    return (
        <View style={[componentStyles.cardContainer, styles.cardRow]}>
            <Image
                source={{ uri: car.imageUrl || 'https://via.placeholder.com/120' }}
                style={componentStyles.cardImage}
                contentFit="cover"
                transition={300}
            />

            <View style={componentStyles.cardContent}>
                <Text style={componentStyles.cardTitle} numberOfLines={1}>
                    {car.make}
                </Text>
                <Text style={componentStyles.cardSubtitle}>
                    Nivel: {car.model}
                </Text>
                <Text style={componentStyles.cardSubtitle}>
                    {car.description}
                </Text>
            </View>
        </View>
    );
};