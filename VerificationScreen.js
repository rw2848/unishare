// VerificationScreen
import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native';

export default function VerificationScreen({ navigation }) {
    const [code, setCode] = useState(['', '', '', '']);

    const handleChange = (text, index) => {
        const newCode = [...code];
        newCode[index] = text;
        setCode(newCode);
        // TODO: Focus on next field
    };

    const handleResendCode = () => {
        console.log("resend button pressed")
    };
    const renderCodeInput = () => {
        return code.map((digit, index) => (
            <TextInput
                key={index}
                style={styles.codeInput}
                onChangeText={(text) => handleChange(text, index)}
                value={digit}
                maxLength={1}
                keyboardType="numeric"
                textContentType="oneTimeCode" // for autofill from SMS
            />
        ));
    };

    const handleNext = () => {
        navigation.navigate('Term');
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
                <Text style={styles.backButtonText}>←</Text>
            </TouchableOpacity>

            <Text style={styles.instructionText}>
                Enter the 4-digit code sent to you at
            </Text>

            <Text style={styles.emailText}>uni@columbia.edu</Text>

            <View style={styles.codeInputContainer}>
                {renderCodeInput()}
            </View>

            <TouchableOpacity style={styles.resendButton} onPress={handleResendCode}>
                <Text style={styles.resendButtonText}>Resend Code</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={handleNext} >
                <Text style={styles.buttonText}>Next</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#161616',
        padding: 30,
    },
    backButton: {
        marginTop: 48,
    },
    backButtonText: {
        color: '#FFF',
        fontSize: 24,
    },

    instructionText: {
        color: '#fff',
        fontSize: 24,
        marginTop: 24,
        marginBottom: 24,
    },
    emailText: {
        color: '#fff',
        fontSize: 24,
        marginBottom: 24,
    },
    codeInputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '80%',
    },
    codeInput: {
        backgroundColor: '#161616',
        borderBottomWidth: 1,
        borderBottomColor: '#fff',
        color: '#fff',
        fontSize: 32,
        width: '12%',
        textAlign: 'center',
        marginHorizontal: 10,
    },
    resendButton: {
        // TODO: Button
    },
    resendButtonText: {
        color: '#007bff',
        textAlign: 'left',
        fontSize: 20,
        marginTop: 32,
    },
    button: {
        backgroundColor: '#000000',
        paddingVertical: 20,
        paddingHorizontal: 100,
        borderRadius: 10,
        marginTop: 324,
        marginBottom: 80,
    },
    buttonText: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 20,
    },
});
