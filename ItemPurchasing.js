import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, Alert, Dimensions } from 'react-native';
import {MaterialIcons} from "@expo/vector-icons";

export default function ItemPurchasing({ route, navigation }) {
    const { item } = route.params;
    const screenWidth = Dimensions.get('window').width;

    const handleRent = () => {
        Alert.alert("Rent Item", "You've chosen to rent the item.");
    };

    const handleMessageLister = () => {
        Alert.alert("Message Lister", "You're about to message the lister.");
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
                <MaterialIcons name="arrow-back" size={24} color="white" />
            </TouchableOpacity>

            <Image source={item.image} style={[styles.itemImage, { width: screenWidth * 0.8 }]} />
            <Text style={styles.itemTitle}>{item.title}</Text>
            <Text style={styles.itemDetail}>Location: {item.location}</Text>
            <Text style={styles.itemDetail}>Pickup Time: {item.time}</Text>
            <Text style={styles.itemDetail}>Price: {item.price}</Text>

            <View style={styles.buttonContainer}>
                <TouchableOpacity onPress={handleRent} style={styles.actionButton}>
                    <Text style={styles.buttonText}>Rent</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={handleMessageLister} style={styles.actionButton}>
                    <Text style={styles.buttonText}>Message Lister</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#161616',
        padding: 20,
    },
    backButton: {
        position: 'absolute',
        top: 72,
        left: 20,
    },
    backButtonText: {
        color: '#FFF',
        fontSize: 20,
    },
    itemImage: {
        height: 200,
        resizeMode: 'contain',
        marginBottom: 20,
        borderRadius: 10,
    },
    itemTitle: {
        color: '#FFF',
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    itemDetail: {
        color: '#FFF',
        fontSize: 18,
        marginBottom: 5,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
        marginTop: 20,
    },
    actionButton: {
        backgroundColor: '#4CAF50',
        padding: 12,
        borderRadius: 5,
    },
    buttonText: {
        color: '#FFF',
        fontSize: 16,
    },
});
