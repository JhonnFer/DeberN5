// app/(tabs)/search.tsx
import React, { useState } from 'react';
import { ActivityIndicator, Button, FlatList, StyleSheet, Text, TextInput, View } from 'react-native';
import { CarsApi } from '../../src/data/api/CarsApi';
import { Car } from '../../src/domain/models/Car.model';
import { CarCard } from '../../src/presentation/components/CarCard';

const carsApi = new CarsApi();

export default function SearchScreen() {
    const [searchText, setSearchText] = useState('');
    const [digimons, setDigimons] = useState<Car[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [searched, setSearched] = useState(false);

    const handleSearch = async () => {
        if (!searchText.trim()) {
            setError('Por favor ingresa un nombre para buscar');
            return;
        }

        setLoading(true);
        setError(null);
        setSearched(true);

        try {
            console.log('🔄 Buscando digimons:', searchText);
            const data = await carsApi.fetchAllCars();
            console.log('✅ Total de digimons:', data.length);
            // Filtrar por nombre (búsqueda local)
            const filtered = data.filter(d =>
                d.make.toLowerCase().includes(searchText.toLowerCase())
            );

            console.log('🔍 Resultados encontrados:', filtered.length);

            if (filtered.length === 0) {
                setError(`No se encontraron Digimons con el nombre: ${searchText}`);
                setDigimons([]);
            } else {
                setDigimons(filtered);
            }
        } catch (err: any) {
            console.error('❌ Error en búsqueda:', err);
            setError('Error al buscar Digimons: ' + (err?.message || 'Error desconocido'));
            setDigimons([]);
        } finally {
            setLoading(false);
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.searchContainer}>
                <Text style={styles.title}>🔍 Buscar Digimons</Text>

                <TextInput
                    style={styles.input}
                    placeholder="Ingresa el nombre del Digimon..."
                    value={searchText}
                    onChangeText={setSearchText}
                    placeholderTextColor="#999"
                />

                <Button
                    title={loading ? 'Buscando...' : 'Buscar'}
                    onPress={handleSearch}
                    disabled={loading}
                />
            </View>

            {loading && (
                <ActivityIndicator size="large" style={{ marginTop: 20 }} />
            )}

            {error && (
                <View style={styles.errorView}>
                    <Text style={styles.errorText}>{error}</Text>
                </View>
            )}

            {searched && !loading && digimons.length > 0 && (
                <FlatList
                    data={digimons}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => (
                        <View style={styles.cardWrapper}>
                            <CarCard
                                car={item}
                            />
                        </View>
                    )}
                    scrollEnabled={true}
                />
            )}

            {searched && !loading && digimons.length === 0 && !error && (
                <View style={styles.emptyView}>
                    <Text style={styles.emptyText}>No hay resultados</Text>
                </View>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
        paddingTop: 10,
    },
    searchContainer: {
        backgroundColor: '#fff',
        padding: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
        color: '#333',
    },
    input: {
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 8,
        paddingHorizontal: 12,
        paddingVertical: 10,
        marginBottom: 10,
        fontSize: 16,
        backgroundColor: '#fafafa',
    },
    cardWrapper: {
        marginVertical: 5,
        paddingHorizontal: 5,
    },
    errorView: {
        marginTop: 15,
        marginHorizontal: 15,
        padding: 12,
        backgroundColor: '#ffebee',
        borderRadius: 8,
        borderLeftWidth: 4,
        borderLeftColor: '#f44336',
    },
    errorText: {
        color: '#c62828',
        fontSize: 14,
        fontWeight: '500',
    },
    emptyView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    emptyText: {
        fontSize: 16,
        color: '#999',
        fontWeight: '500',
    },
});
