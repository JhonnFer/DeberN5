import { Ionicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import React from 'react';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#007AFF', // Azul para el tab activo
        tabBarInactiveTintColor: '#888',
        headerShown: false, // Ocultar el header por defecto, las pantallas internas pueden mostrarlo
        tabBarStyle: {
          paddingTop: 5,
          paddingBottom: 5,
          height: 60, // Altura cómoda para el móvil
        }
      }}
    >
      {/* PESTAÑA 1: CATÁLOGO DE DIGIMONS - /api/digimon */}
      <Tabs.Screen
        name="index"
        options={{
          title: 'Todos',
          tabBarIcon: ({ color }) => (
            <Ionicons name="grid-outline" size={24} color={color} />
          ),
        }}
      />

      {/* PESTAÑA 2: DIGIMONS POR NIVEL - /api/digimon/level/:level */}
      <Tabs.Screen
        name="makes"
        options={{
          title: 'Niveles',
          tabBarIcon: ({ color }) => (
            <Ionicons name="layers-outline" size={24} color={color} />
          ),
        }}
      />

      {/* PESTAÑA 3: BUSCAR POR NOMBRE - /api/digimon/name/:name */}
      <Tabs.Screen
        name="search"
        options={{
          title: 'Buscar',
          tabBarIcon: ({ color }) => (
            <Ionicons name="search-outline" size={24} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}