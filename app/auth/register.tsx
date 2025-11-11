import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Alert, Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { AuthRepository } from '../../src/data/repositories/AuthRepository';

const registerRepository = new AuthRepository();

const RegisterScreen = () => {
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [loading, setLoading] = useState(false);

    const handleRegister = async () => {
        // Validaciones
        if (!email.trim()) {
            Alert.alert("Error", "El email es requerido");
            return;
        }

        if (!password.trim()) {
            Alert.alert("Error", "La contraseña es requerida");
            return;
        }

        if (password.length < 6) {
            Alert.alert("Error", "La contraseña debe tener al menos 6 caracteres");
            return;
        }

        if (password !== confirmPassword) {
            Alert.alert("Error", "Las contraseñas no coinciden");
            return;
        }

        setLoading(true);
        try {
            await registerRepository.register(email, password);
            Alert.alert(
                "¡Éxito!",
                "Usuario registrado correctamente. Ahora inicia sesión.",
                [
                    {
                        text: "OK",
                        onPress: () => router.push('/auth/login'), // Va a login
                    },
                ]
            );
        } catch (error: any) {
            Alert.alert("Error de Registro", error.message || "Fallo al registrarse.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>📝 Crear Cuenta</Text>

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
                placeholder="Contraseña (mínimo 6 caracteres)"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
                editable={!loading}
            />

            <TextInput
                style={styles.input}
                placeholder="Confirmar contraseña"
                value={confirmPassword}
                onChangeText={setConfirmPassword}
                secureTextEntry
                editable={!loading}
            />

            <View style={styles.buttonContainer}>
                <Button
                    title={loading ? "Registrando..." : "Registrarse"}
                    onPress={handleRegister}
                    disabled={loading}
                />
            </View>

            <View style={styles.buttonContainer}>
                <Button
                    title="Volver al Login"
                    onPress={() => router.push('/auth/login')}
                    color="#666"
                    disabled={loading}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#f5f5f5',
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 30,
        textAlign: 'center',
    },
    input: {
        width: '100%',
        padding: 12,
        marginBottom: 15,
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 8,
        backgroundColor: '#fff',
    },
    buttonContainer: {
        width: '100%',
        marginBottom: 10,
    },
});

export default RegisterScreen;
