import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image,
    TouchableWithoutFeedback, Keyboard, ScrollView, Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

export default function ItemLend({ navigation }) {
    const [itemTitle, setItemTitle] = useState('');
    const [itemDescription, setItemDescription] = useState('');
    const [itemPrice, setItemPrice] = useState('');
    const [itemImage, setItemImage] = useState(null);

    const selectImage = async () => {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
            Alert.alert('Sorry, we need camera roll permissions to make this work!');
            return;
        }

        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        if (!result.canceled) {
            setItemImage({ uri: result.uri });
        }
    };

    const handleLendItem = () => {
        console.log('Lending item:', itemTitle, itemDescription, itemPrice);
    };

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.container}>
                <View style={styles.headerContainer}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Text style={styles.headerButton}>Get an item</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={styles.headerButton}>Lend an item</Text>
                    </TouchableOpacity>
                </View>

                <ScrollView style={styles.scrollView}>
                    <Text style={styles.title}>Lend an Item</Text>

                    <TextInput
                        style={styles.input}
                        placeholder="Item Title"
                        placeholderTextColor="#aaa"
                        value={itemTitle}
                        onChangeText={setItemTitle}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Item Description"
                        placeholderTextColor="#aaa"
                        value={itemDescription}
                        onChangeText={setItemDescription}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Item Price"
                        placeholderTextColor="#aaa"
                        value={itemPrice}
                        onChangeText={setItemPrice}
                    />

                    {itemImage ? (
                        <Image source={itemImage} style={styles.image} />
                    ) : (
                        <View style={styles.imagePlaceholder} />
                    )}

                    <TouchableOpacity style={styles.button} onPress={selectImage}>
                        <Text style={styles.buttonText}>Upload Picture</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.lendButton} onPress={handleLendItem}>
                        <Text style={styles.lendButtonText}>Lend This Item</Text>
                    </TouchableOpacity>
                </ScrollView>
            </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#161616',
    },
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: 'black',
        paddingTop: 80,
        paddingBottom: 10,
        paddingHorizontal: 48,
    },
    headerButton: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16,
    },
    button: {
        backgroundColor: '#007bff',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
        marginBottom: 15,
    },
    buttonText: {
        color: '#FFF',
        fontSize: 18,
        fontWeight: 'bold',
    },
    image: {
        width: 200,
        height: 200,
        resizeMode: 'contain',
        marginBottom: 20,
        alignSelf: 'center',
    },
    imagePlaceholder: {
        width: 200,
        height: 200,
        backgroundColor: '#333',
        borderRadius: 10,
        marginBottom: 20,
        alignSelf: 'center',
    },
    scrollView: {
        margin: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
        marginBottom: 20,
    },
    input: {
        backgroundColor: '#252525',
        borderRadius: 10,
        color: 'white',
        padding: 15,
        marginBottom: 15,
    },
    lendButton: {
        backgroundColor: '#4CAF50',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
    },
    lendButtonText: {
        color: '#FFF',
        fontSize: 18,
        fontWeight: 'bold',
    },
});
