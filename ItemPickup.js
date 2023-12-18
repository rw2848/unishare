import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, Dimensions, Alert } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function ItemPickup({ route, navigation }) {
    const { item } = route.params;
    const screenWidth = Dimensions.get('window').width;
    const [isConfirmed, setIsConfirmed] = useState(false);

    const confirmPickup = () => {
        setIsConfirmed(true);
        Alert.alert("Pickup Confirmed", "You have successfully confirmed the pickup of the item.");
        // Add additional logic here if needed, like updating a database or notifying other users.
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
                <MaterialIcons name="arrow-back" size={24} color="white" />
            </TouchableOpacity>

            <Image
                source={item.image}
                style={[styles.itemImage, { width: screenWidth * 0.8 }]}
                onError={(e) => console.log('Image load error:', e)}
            />
            <Text style={styles.itemTitle}>{item.title}</Text>
            <Text style={styles.itemDetail}>Location: {item.location}</Text>
            <Text style={styles.itemDetail}>Pickup Time: {item.time}</Text>
            <Text style={styles.itemDetail}>Price: {item.price}</Text>

            {!isConfirmed && (
                <TouchableOpacity onPress={confirmPickup} style={styles.confirmButton}>
                    <Text style={styles.confirmButtonText}>Confirm Pickup</Text>
                </TouchableOpacity>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#202020',
    },
    backButton: {
        position: 'absolute',
        top: 72,
        left: 15,
        padding: 10,
    },
    itemImage: {
        height: 200,
        resizeMode: 'contain',
        marginBottom: 20,
        borderRadius: 10,
    },
    itemTitle: {
        color: '#FFF',
        fontSize: 26,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    itemDetail: {
        color: '#FFF',
        fontSize: 18,
        marginBottom: 4,
    },
    confirmButton: {
        marginTop: 20,
        backgroundColor: '#4CAF50',
        padding: 10,
        borderRadius: 5,
    },
    confirmButtonText: {
        color: '#FFF',
        fontSize: 18,
    },
});
