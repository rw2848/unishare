// SignUpScreen
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity,
    Alert, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { auth } from './FirebaseConfig'; // Adjust the path as necessary
import { createUserWithEmailAndPassword } from "firebase/auth";
import { sendEmailVerification } from "firebase/auth";

export default function SignUpScreen({ navigation }) {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [residence, setResidence] = useState('');
    const [floor, setFloor] = useState('');

    const handleFirstNameChange = (text) => setFirstName(text);
    const handleLastNameChange = (text) => setLastName(text);
    const handleEmailChange = (text) => setEmail(text);
    const handlePhoneChange = (text) => setPhone(text);
    const handleResidenceChange = (text) => setResidence(text);
    const handleFloorChange = (text) => setFloor(text);

    const handleNext = () => {
        // Replace 'password' with your password handling logic
        createUserWithEmailAndPassword(auth, email, 'password')
            .then((userCredential) => {
                // Additional profile info can be saved in Firebase database here

                // Navigate to next screen with the user data
                navigation.navigate('Verification', {
                    firstName: firstName,
                    lastName: lastName,
                    email: email,
                    phone: phone,
                    residence: residence,
                    floor: floor
                });
            })
            .catch((error) => {
                Alert.alert("Error", error.message);
            });
    };

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.container}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
                    <Text style={styles.backButtonText}>←</Text>
                </TouchableOpacity>

                <Text style={styles.heading}>What's your name?</Text>
                <View style={styles.row}>
                    <TextInput
                        style={[styles.input, styles.inputLeft]}
                        placeholder="First"
                        placeholderTextColor="grey"
                        onChangeText={handleFirstNameChange}
                        value={firstName}
                    />
                    <TextInput
                        style={[styles.input, styles.inputRight]}
                        placeholder="Last"
                        placeholderTextColor="grey"
                        onChangeText={handleLastNameChange}
                        value={lastName}
                    />
                </View>

                <Text style={styles.heading}>What is your email?</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Columbia email"
                    keyboardType="email-address"
                    placeholderTextColor="grey"
                    onChangeText={handleEmailChange}
                    value={email}
                />

                <Text style={styles.heading}>What is your phone number?</Text>
                <TextInput
                    style={styles.input}
                    placeholder="XXX-XXX-XXXX"
                    keyboardType="phone-pad"
                    placeholderTextColor="grey"
                    onChangeText={handlePhoneChange}
                    value={phone}
                />

                <Text style={styles.heading}>Where do you live?</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Residence Hall"
                    placeholderTextColor="grey"
                    onChangeText={handleResidenceChange}
                    value={residence}
                />

                <Text style={styles.heading}>What floor?</Text>
                <View style={styles.row}>
                    <TextInput
                        style={[styles.input, styles.inputSmall]}
                        placeholder="Floor Number"
                        keyboardType="number-pad"
                        placeholderTextColor="grey"
                        onChangeText={handleFloorChange}
                        value={floor}
                    />
                </View>

                <TouchableOpacity style={styles.button} onPress={handleNext} >
                    <Text style={styles.buttonText}>Next</Text>
                </TouchableOpacity>
            </View>
        </TouchableWithoutFeedback>
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
    heading: {
        color: '#fff',
        fontSize: 24,
        marginTop: 24,
        marginBottom: 24,
    },
    input: {
        color: '#fff',
        borderBottomColor: '#fff',
        borderBottomWidth: 1,
        fontSize: 20,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    inputLeft: {
        flex: 1,
        marginRight: 48,
    },
    inputRight: {
        flex: 1,
    },
    inputSmall: {
        flex: 1,
        marginRight: 300,
    },
    button: {
        backgroundColor: '#000000',
        paddingVertical: 20,
        paddingHorizontal: 100,
        borderRadius: 10,
        marginTop: 68,
        marginBottom: 80,
    },
    buttonText: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 20,
    },
});