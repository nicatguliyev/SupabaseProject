import React, { useState, useEffect } from "react";
import {
    View,
    TextInput,
    TouchableOpacity,
    Text,
    StyleSheet,
    Dimensions,
    KeyboardAvoidingView,
    ScrollView,
    Platform,
    TouchableWithoutFeedback,
    Keyboard
} from "react-native";
import Colors from "../Constants/Colors";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

const { width } = Dimensions.get('window');

const RegisterScreen = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [scrollEnabled, setScrollEnabled] = useState(false);

    useEffect(() => {
        const show = Keyboard.addListener('keyboardDidShow', () => setScrollEnabled(true));
        const hide = Keyboard.addListener('keyboardDidHide', () => setScrollEnabled(false));

        return () => {
            show.remove();
            hide.remove();
        };
    }, []);

    return (
        // 1. Klaviaturadan qaçmaq üçün əsas konteyner


        <KeyboardAwareScrollView
            style={styles.container}
            contentContainerStyle={styles.scrollContent}
            enableOnAndroid={true}
            extraScrollHeight={20}
            keyboardShouldPersistTaps="handled"
            bounces={false}
            // scrollEnabled={scrollEnabled}
            showsVerticalScrollIndicator={false}>

            <View>
                <Text style={styles.createAccountText}>Create account</Text>
                <Text style={styles.infoText}>Please enter your details</Text>

                <Text style={styles.inputLabel}>Your email</Text>
                <TextInput
                    placeholder="E-mail"
                    placeholderTextColor={Colors.gray}
                    value={email}
                    onChangeText={setEmail}
                    keyboardType="email-address"
                    autoCapitalize="none"
                    style={[styles.textInput, { fontStyle: email.length === 0 ? 'italic' : 'normal' }]}
                />

                <Text style={[styles.inputLabel, { marginTop: 25 }]}>Your password</Text>
                <TextInput
                    placeholder="Password"
                    placeholderTextColor={Colors.gray}
                    secureTextEntry
                    value={password}
                    onChangeText={setPassword}
                    style={[styles.textInput, { fontStyle: password.length === 0 ? 'italic' : 'normal' }]}
                />

                <Text style={[styles.inputLabel, { marginTop: 25 }]}>Confirm password</Text>
                <TextInput
                    placeholder="Password"
                    placeholderTextColor={Colors.gray}
                    secureTextEntry
                    value={confirmPassword}
                    onChangeText={setConfirmPassword}
                    style={[styles.textInput, { fontStyle: confirmPassword.length === 0 ? 'italic' : 'normal' }]}
                />

          


                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Create account</Text>
                </TouchableOpacity>

                <View style={{ alignItems: 'center', marginTop: 20, marginBottom: 30 }}>
                    <Text style={{ color: Colors.white, opacity: 0.8, fontWeight: '600' }}>Already have an account?</Text>
                    <TouchableOpacity style={styles.loginButton}>
                        <Text style={styles.loginButtonText}>Login</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </KeyboardAwareScrollView>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.background,
    },
    scrollContent: {
        paddingHorizontal: 20,
        paddingTop: 10, // Yuxarıdan vizual boşluq
        paddingBottom: 10, // Aşağıda rahat scroll üçün
        flexGrow: 1,
        // backgroundColor: Colors.fishOrange,
        justifyContent: 'center',
    },
    createAccountText: {
        color: Colors.white,
        fontSize: 34,
        fontWeight: 'bold',
        letterSpacing: 0.5,
    },
    infoText: {
        color: Colors.secondary,
        fontSize: 16,
        marginTop: 5,
        opacity: 0.9,
    },
    inputLabel: {
        color: Colors.primary,
        fontSize: 14,
        marginTop: 35,
        fontWeight: '600',
    },
    textInput: {
        backgroundColor: Colors.inputBg,
        color: Colors.white,
        borderColor: Colors.border,
        borderWidth: 1,
        borderRadius: 12,
        paddingHorizontal: 15,
        height: 55,
        marginTop: 10,
        fontSize: 16,
    },
    button: {
        backgroundColor: Colors.accent,
        height: 55,
        borderRadius: 12,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 40,
    },
    buttonText: {
        color: Colors.white,
        fontSize: 18,
        fontWeight: 'bold',
    },
    loginButton: {
        backgroundColor: Colors.primary,
        width: "100%",
        height: 55,
        borderRadius: 12,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 15,
    },
    loginButtonText: {
        color: Colors.background,
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default RegisterScreen;