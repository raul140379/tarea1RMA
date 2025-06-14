import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
<<<<<<< HEAD
import { Input, Button, Text } from 'react-native-elements';
=======
import { Input, Button, Text,ActivityIndicator } from 'react-native-elements';
>>>>>>> b1bcf6b (Inicio nuevo desde mi repositorio)
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../config/firebase';

export default function LoginScreen({ navigation }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
<<<<<<< HEAD
    const [error, setError] = useState('');

    const handleLogin = async () => {
=======
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const validarLoginForm = () => {
        const isEmailValid = /\S+@\S+\.\S+/.test(email);
        const isPasswordValid = password.length > 0;
        return isEmailValid && isPasswordValid;
    };

    const handleLogin = async () => {
        setLoading(true);
>>>>>>> b1bcf6b (Inicio nuevo desde mi repositorio)
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            navigation.replace('Home');
        } catch (error) {
            setError('Error al iniciar sesión: ' + error.message);
<<<<<<< HEAD
=======
        } finally {
            setLoading(false);
>>>>>>> b1bcf6b (Inicio nuevo desde mi repositorio)
        }
    };
    return (
        <View style={styles.container}>
            <Text h3 style={styles.title}>Mi Comida Favorita</Text>
            <Input
                placeholder="Email"
                value={email}

                onChangeText={setEmail}
                autoCapitalize="none"
            />
            <Input
                placeholder="Contraseña"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
            />
            {error ? <Text style={styles.error}>{error}</Text> : null}
<<<<<<< HEAD
            <Button
                title="Iniciar Sesión"
                onPress={handleLogin}
                containerStyle={styles.button}
            />
=======
            {/* loading ?(<ActivityIndicator size="large" color="#0000ff" /> ) :null */ }
            <Button
                    title="Iniciar Sesión"
                    disabled={!validarLoginForm()}
                    onPress={handleLogin}
                    containerStyle={styles.button}
                />            
>>>>>>> b1bcf6b (Inicio nuevo desde mi repositorio)
            <Button
                title="Registrarse"
                type="outline"
                onPress={() => navigation.navigate('Register')}
                containerStyle={styles.button}
            />
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        justifyContent: 'center',
    },
    title: {
        textAlign: 'center',
        marginBottom: 30,
    },
    button: {
        marginVertical: 10,
    },
    error: {
        color: 'red',
        textAlign: 'center',
        marginBottom: 10,
    },
});
