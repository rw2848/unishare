// StartScreen.js
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions } from 'react-native';

export default function StartScreen({ navigation }) {
    const handleNext = () => {
        navigation.navigate('SignUp');
    };

    return (
        <View style={styles.container}>
            <View style={styles.middleContainer}>
                <View style={styles.square}>
                    <Text style={styles.title}>UniShare</Text>
                </View>
            </View>

            <View style={styles.bottomContainer}>
                <TouchableOpacity onPress={handleNext} style={styles.button}>
                    <Text style={styles.buttonText}>Get Started →</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const squareSize = Dimensions.get('window').width * 0.5;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        justifyContent: 'center',
    },
    middleContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    bottomContainer: {
        paddingBottom: 100,
    },
    button: {
        backgroundColor: '#007bff',
        paddingVertical: 20,
        paddingHorizontal: 100,
        borderRadius: 10,
        alignSelf: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 20,
    },
    square: {
        width: squareSize,
        height: squareSize,
        backgroundColor: '#007bff',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
    },
    title: {
        color: '#fff',
        fontSize: 32,
        fontWeight: 'normal',
    },
});
