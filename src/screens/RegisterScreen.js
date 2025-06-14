<<<<<<< HEAD
import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Input, Button, Text } from 'react-native-elements';
=======
import React, { useState, useRef } from 'react';
import { View, StyleSheet } from 'react-native';
import { Input, Button, Text, ActivityIndicator } from 'react-native-elements';
>>>>>>> b1bcf6b (Inicio nuevo desde mi repositorio)
import { createUserWithEmailAndPassword } from 'firebase/auth';

import { auth } from '../config/firebase';

export default function RegisterScreen({ navigation }) {
<<<<<<< HEAD
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const handleRegister = async () => {
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            navigation.replace('Home');
        } catch (error) {
            setError('Error al registrarse: ' + error.message);
=======

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmapassword, setConfirmaPassword] = useState('');
    const passwordRef = useRef(null);
    const confPasswordRef = useRef(null);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const [estado, setEstado] = useState(true);

    const validarPassword = (pass) => {
        const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
        return regex.test(pass);
    };
    const validarEmail = (email) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email.toLowerCase());
    };


    const handleRegister = async () => {

        if (!email || !password) {
            setError("Error, Por favor completa todos los campos");
            //error.message="no puede estar vacia";
            return;
        }
      /*   if (!validarEmail(email)) {
            setError("Error, formato de email no valido, introduzca uno valido");
            // Alert.alert("email");
            return;
        }
        if (!validarPassword(password)) {
            setError("Error, la contraseña debe tener al menos 8 caracteres, una mayúscula y un número");
            //  Alert.alert("pw");
            return;
        }
        
        if (password !== confirmapassword) {
            setError('Las contraseñas no coinciden');
        } */
        setEstado(false);
        setLoading(true);
        try {

            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            //const user = userCredential.user;
            navigation.replace('Home');

        } catch (error) {
            setError('Error al registrarse: ' + error.message);

        } finally {
            setLoading(false);
>>>>>>> b1bcf6b (Inicio nuevo desde mi repositorio)
        }
    };

    return (
        <View style={styles.container}>
            <Text h3 style={styles.title}>Registro</Text>
            <Input
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
                autoCapitalize="none"
<<<<<<< HEAD
            />
            <Input
=======
                onSubmitEditing={() => {
                    if (!validarEmail(email)) {
                        setError('Correo inválido: /^[^\s@]+@[^\s@]+\.[^\s@]+$/');
                    } else {
                        passwordRef.current.focus(); // Enfocar el siguiente campo
                    }
                }}
            />
            <Input
                ref={passwordRef}
>>>>>>> b1bcf6b (Inicio nuevo desde mi repositorio)
                placeholder="Contraseña"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
<<<<<<< HEAD
            />
            {error ? <Text style={styles.error}>{error}</Text> : null}
            <Button
                title="Registrarse"
                onPress={handleRegister}
=======
                onSubmitEditing={() => {
                    if (!validarPassword1(password)) {
                        setError('PW inicial: tiene que tener minimo 8 caracteres(May,min,simbolo,numero');
                    } else {
                        confPasswordRef.current.focus(); // Enfocar el siguiente campo
                    }
                }}
            />
            <Input
                ref={confPasswordRef}
                placeholder="Confirma Contraseña"
                value={confirmapassword}
                onChangeText={setConfirmaPassword}
                secureTextEntry
                onSubmitEditing={() => {
                    if (!validarPassword1(confirmapassword)) {
                        setError('PW confirmacion inválido :: tiene que tener minimo 8 caracteres(May,min,simbolo,numero');
                    } else {
                        if (password !== confirmapassword) {
                            setError('Las contraseñas no coinciden, revice');
                        }
                       // confPasswordRef.current.focus(); // Enfocar el siguiente campo
                       setEstado(false);
                    }
                }}
            />
            {error ? <Text style={styles.error}>{error}</Text> : null}
            {/* loading ? (<ActivityIndicator size="large" color="#0000ff" />
            ) : null */ }
            <Button
                title={loading ? "Registrando..." : "Registrar"}
                onPress={handleRegister}
                disabled={estado}
>>>>>>> b1bcf6b (Inicio nuevo desde mi repositorio)
                containerStyle={styles.button}
            />
            <Button
                title="Volver al Login"
                type="outline"
                onPress={() => navigation.navigate('Login')}
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