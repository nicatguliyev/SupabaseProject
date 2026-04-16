import React, { useState } from "react";
import { View, TextInput, TouchableOpacity, Text, StyleSheet, Dimensions } from "react-native";
// SVG-ni komponent kimi import edirik
import TankmateLogo from "../../assets/images/Tankmate-logo";


const { width } = Dimensions.get('window');

const LoginScreen = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <View style={styles.container}>
            <View style={styles.logoWrapper}>
                <TankmateLogo width={300} />
                <Text style={styles.appName}>VibeX</Text>
            </View>

            <View style={styles.inputContainer}>
                <TextInput
                    placeholder="E-poçt"
                    placeholderTextColor="#666"
                    onChangeText={setEmail}
                    value={email}
                    style={styles.textInput}
                />
                <TextInput
                    placeholder="Şifrə"
                    placeholderTextColor="#666"
                    onChangeText={setPassword}
                    value={password}
                    secureTextEntry
                    style={styles.textInput}
                />
                
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Daxil Ol</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        backgroundColor: '#000', 
        alignItems: 'center',
        justifyContent: 'center',
    },
    logoWrapper: {
        alignItems: 'center',
        marginBottom: 50,
    },
    appName: {
        color: '#fff',
        fontSize: 32,
        fontWeight: 'bold',
        marginTop: 10,
    },
    inputContainer: {
        width: width * 0.85,
    },
    textInput: {
        backgroundColor: '#1A1A1A',
        color: '#fff',
        borderRadius: 15,
        paddingHorizontal: 20,
        height: 55,
        marginBottom: 15,
        borderWidth: 1,
        borderColor: '#333',
    },
    button: {
        backgroundColor: '#9b4c4c',
        height: 55,
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    }
});

export default LoginScreen;