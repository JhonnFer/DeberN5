// app/(auth)/login.tsx
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Alert, Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { LoginUseCase } from '../../src/domain/usecases/Login.usecase';

const loginUseCase = new LoginUseCase();

const LoginScreen = () => {
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);

    const handleLogin = async () => {
        if (!email.trim() || !password.trim()) {
            Alert.alert("Error", "Por favor completa todos los campos");
            return;
        }

        setLoading(true);
        try {
            await loginUseCase.execute(email, password);
            // El useAuth en _layout.tsx se encargará de la redirección
        } catch (error: any) {
            Alert.alert("Error de Login", error.message || "Fallo la autenticación.");
        } finally {
            setLoading(false);
        }
    };

    const handleRegisterNav = () => {
        router.push('/auth/register');
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>🎮 Digimon App</Text>

            <TextInput
                style={styles.input}
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
                editable={!loading}
            />
            <TextInput
                style={styles.input}
                placeholder="Contraseña"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
                editable={!loading}
            />

            <View style={styles.buttonContainer}>
                <Button title={loading ? "Cargando..." : "Iniciar Sesión"} onPress={handleLogin} disabled={loading} />
            </View>

            <View style={styles.buttonContainer}>
                <Button title="Crear Nueva Cuenta" onPress={handleRegisterNav} disabled={loading} color="#4CAF50" />
            </View>

            {/* Demo Info */}
            <View style={styles.demoBox}>
                <Text style={styles.demoTitle}>📝 Modo Demo</Text>
                <Text style={styles.demoText}>Email: demo@demo.com</Text>
                <Text style={styles.demoText}>Password: demo123</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', padding: 20, backgroundColor: '#f0f0f0' },
    title: { fontSize: 28, fontWeight: 'bold', marginBottom: 30, textAlign: 'center' },
    input: { height: 50, borderColor: '#ccc', borderWidth: 1, marginBottom: 15, paddingHorizontal: 10, borderRadius: 8, backgroundColor: '#fff' },
    buttonContainer: { marginBottom: 10 },
    demoBox: { marginTop: 30, padding: 15, backgroundColor: '#E3F2FD', borderRadius: 8, borderLeftWidth: 4, borderLeftColor: '#2196F3' },
    demoTitle: { fontSize: 14, fontWeight: 'bold', color: '#1976D2', marginBottom: 8 },
    demoText: { fontSize: 12, color: '#1976D2', marginBottom: 4 },
});

export default LoginScreen;