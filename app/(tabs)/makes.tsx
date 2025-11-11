// app/(tabs)/makes.tsx
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Alert, FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { CarsApi } from '../../src/data/api/CarsApi';
import { Car, CarMake } from '../../src/domain/models/Car.model';
import { GetCarMakesUseCase } from '../../src/domain/usecases/GetCarMakes.usecase';
import { CarCard } from '../../src/presentation/components/CarCard';

const getCarMakesUseCase = new GetCarMakesUseCase();
const carsApi = new CarsApi();

const MakesScreen = () => {
    const [levels, setLevels] = useState<CarMake[]>([]);
    const [selectedLevel, setSelectedLevel] = useState<string | null>(null);
    const [digimons, setDigimons] = useState<Car[]>([]);
    const [loading, setLoading] = useState(true);
    const [loadingDigimons, setLoadingDigimons] = useState(false);

    useEffect(() => {
        fetchLevels();
    }, []);

    const fetchLevels = async () => {
        try {
            console.log('🔄 Cargando niveles...');
            const data = await getCarMakesUseCase.execute();
            console.log('✅ Niveles cargados:', data.length);
            setLevels(data);
        } catch (error) {
            console.error("❌ Error al cargar niveles:", error);
            Alert.alert("Error", "No se pudo cargar la lista de niveles.");
        } finally {
            setLoading(false);
        }
    };

    const fetchDigimonsByLevel = async (level: string) => {
        setLoadingDigimons(true);
        try {
            console.log('🔄 Cargando digimons del nivel:', level);
            const data = await carsApi.fetchDigimonsByLevel(level);
            console.log('✅ Digimons cargados:', data.length);
            setDigimons(data);
        } catch (error) {
            console.error("❌ Error al cargar digimons:", error);
            Alert.alert("Error", `No se pudo cargar Digimons de nivel: ${level}`);
        } finally {
            setLoadingDigimons(false);
        }
    };

    const handleLevelPress = (levelName: string) => {
        setSelectedLevel(levelName);
        fetchDigimonsByLevel(levelName);
    };

    if (loading) {
        return <ActivityIndicator size="large" style={styles.center} />;
    }

    if (levels.length === 0) {
        return <Text style={styles.center}>No hay niveles disponibles.</Text>;
    }

    return (
        <View style={styles.container}>
            {/* SELECTOR DE NIVELES */}
            <View style={styles.levelsContainer}>
                <Text style={styles.sectionTitle}>Selecciona un Nivel:</Text>
                <FlatList
                    data={levels}
                    keyExtractor={(item) => item.id.toString()}
                    horizontal
                    scrollEnabled
                    showsHorizontalScrollIndicator={false}
                    renderItem={({ item }) => (
                        <TouchableOpacity
                            style={[
                                styles.levelButton,
                                selectedLevel === item.name && styles.levelButtonActive,
                            ]}
                            onPress={() => handleLevelPress(item.name)}
                        >
                            <Text
                                style={[
                                    styles.levelButtonText,
                                    selectedLevel === item.name && styles.levelButtonTextActive,
                                ]}
                            >
                                {item.name}
                            </Text>
                        </TouchableOpacity>
                    )}
                />
            </View>

            {/* LISTADO DE DIGIMONS POR NIVEL */}
            {selectedLevel && (
                <View style={styles.digimonListContainer}>
                    <Text style={styles.sectionTitle}>
                        Digimons - Nivel {selectedLevel}
                    </Text>

                    {loadingDigimons && (
                        <ActivityIndicator size="large" style={{ marginTop: 20 }} />
                    )}

                    {!loadingDigimons && digimons.length === 0 && (
                        <Text style={styles.emptyText}>No hay Digimons en este nivel.</Text>
                    )}

                    {!loadingDigimons && digimons.length > 0 && (
                        <FlatList
                            data={digimons}
                            keyExtractor={(item) => item.id.toString()}
                            renderItem={({ item }) => (
                                <CarCard car={item} />
                            )}
                            scrollEnabled={false}
                        />
                    )}
                </View>
            )}

            {!selectedLevel && (
                <View style={styles.emptyView}>
                    <Text style={styles.emptyText}>👆 Selecciona un nivel para ver los Digimons</Text>
                </View>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
    },
    center: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    levelsContainer: {
        backgroundColor: '#fff',
        paddingVertical: 15,
        paddingHorizontal: 10,
        borderBottomWidth: 2,
        borderBottomColor: '#eee',
    },
    sectionTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 10,
        paddingHorizontal: 10,
        color: '#333',
    },
    levelButton: {
        marginHorizontal: 5,
        paddingHorizontal: 12,
        paddingVertical: 8,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: '#007AFF',
        backgroundColor: '#fff',
    },
    levelButtonActive: {
        backgroundColor: '#007AFF',
    },
    levelButtonText: {
        fontSize: 14,
        color: '#007AFF',
        fontWeight: '600',
    },
    levelButtonTextActive: {
        color: '#fff',
    },
    digimonListContainer: {
        flex: 1,
        paddingTop: 15,
    },
    emptyView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    emptyText: {
        fontSize: 14,
        color: '#999',
        textAlign: 'center',
        marginHorizontal: 20,
    },
});

export default MakesScreen;