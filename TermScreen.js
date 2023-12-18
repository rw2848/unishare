import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';

export default function TermsScreen({ navigation }){
    const [agree, setAgree] = useState(false);

    const handleNext = () => {
        navigation.navigate('Payment');
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
                <Text style={styles.backButtonText}>←</Text>
            </TouchableOpacity>

            <View style={styles.middleContainer}>
                <Image
                    source={require('./assets/icon.png')} // Todo: image
                    style={styles.userIcon}
                />
            </View>

            <Text style={styles.text}>
                By selecting "Next", you agree to UniShare's Terms of Use and acknowledge that you have read our Privacy Policy
            </Text>
            <TouchableOpacity
                style={styles.checkboxContainer}
                onPress={() => setAgree(!agree)}
            >
                <Text style={styles.checkboxText}>
                    Check the box to indicate that you are at least 18 years of age, agree to the Terms & Conditions, and acknowledge the Privacy Policy.
                </Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={handleNext} style={styles.button}>
                <Text style={styles.buttonText}> Next</Text>
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

    middleContainer: {
        flex: 1,
        alignItems: 'center',
    },

    userIcon: {
        width: 160,
        height: 160,
        borderRadius: 20,
        marginTop: 80,
    },

    text: {
        color: '#fff',
        fontSize: 20,
        marginTop: 60,
        marginBottom: 80,
    },
    checkboxContainer: {
    },
    checkboxText: {
        fontSize: 14,
        color: '#fff',
    },
    button: {
        backgroundColor: '#000000',
        paddingVertical: 20,
        paddingHorizontal: 100,
        borderRadius: 10,
        marginTop: 60,
        marginBottom: 68,
    },
    buttonText: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 20,
    },
});
