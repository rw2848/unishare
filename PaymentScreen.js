import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function PaymentMethodScreen ({ navigation }) {

    const handleNext = () => {
        navigation.navigate('Home');
    };
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
                <Text style={styles.backButtonText}>←</Text>
            </TouchableOpacity>
            <Text style={styles.titleText}>Select your preferred payment method</Text>
            <TouchableOpacity style={styles.paymentButton}>
                <Text style={styles.paymentButtonIcon}>Credit or Debit Card</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.paymentButton}>
                <Text style={styles.paymentButtonIcon}>Paypal</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleNext} style={styles.button}>
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

    titleText: {
        color: '#fff',
        fontSize: 18,
        marginTop: 40,
        marginBottom: 40,
    },
    paymentButton: {
        width: '80%',
        marginBottom: 20,
    },
    paymentButtonIcon: {
        backgroundColor: 'grey',
        paddingVertical: 20,
        paddingHorizontal: 10,
        borderRadius: 10,
    },
    button: {
        backgroundColor: '#000000',
        paddingVertical: 20,
        paddingHorizontal: 100,
        borderRadius: 10,
        marginTop: 320,
        marginBottom: 80,
    },
    buttonText: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 20,
    },
});
