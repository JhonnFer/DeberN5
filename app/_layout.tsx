// app/_layout.tsx
import { Stack, router } from 'expo-router';
import { useEffect } from 'react';
import { Text } from 'react-native';
import { AuthProvider, useAuth } from '../src/presentation/hooks/useAuth';


// Componente Wrapper para manejar la redirección
const InitialLayout = () => {
  const { user, loading } = useAuth();

  useEffect(() => {
    if (loading) return;

    if (user) {
      // Usuario autenticado, redirigir a las pestañas principales
      router.replace('/(tabs)');
    } else {
      // Usuario NO autenticado, redirigir a la pantalla de login
      router.replace('auth/login' as any);
    }
  }, [user, loading]);

  if (loading) {
    return <Text>Cargando...</Text>; // Puedes usar un SplashScreen aquí
  }

  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="auth" options={{ headerShown: false }} />
      <Stack.Screen name="car/[id]" options={{ title: 'Detalle del Digimon' }} />
    </Stack>
  );
};

// Proveedor de Contexto
const RootLayout = () => {
  return (
    <AuthProvider>
      <InitialLayout />
    </AuthProvider>
  );
};

export default RootLayout;