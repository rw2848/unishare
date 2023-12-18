import React from 'react';
import { View, Text, TouchableOpacity, TextInput, Image, FlatList, StyleSheet, ScrollView } from 'react-native';

const itemsData = [
    { id: '1', title: 'Swiffer', location: 'Carman 12', price: '$5/hour', image: require('./assets/images/emoji4.png') },
    { id: '2', title: 'Cast Iron Pan', location: 'Carman 12', price: '$10/hour', image: require('./assets/images/emoji4.png') },
];

const upcomingPickups = [
    { id: '1', title: 'Vacuum', time: '9:00am tomorrow', image: require('./assets/images/emoji5.png') },
];

export default function HomeScreen({ navigation }) {

    const handleLend = () => {
        navigation.navigate('ItemLend');
    };
    const handlePurchasing = (item) => {
        navigation.navigate('ItemPurchasing', { item });
    };

    const handlePickup = (item) => {
        navigation.navigate('ItemPickup', { item });
    };
    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <TouchableOpacity>
                    <Text style={styles.headerButton}>Get an item</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={handleLend}>
                    <Text style={styles.headerButton}>Lend an item</Text>
                </TouchableOpacity>
            </View>

            <TextInput
                style={styles.searchBar}
                placeholder="Search for item"
                placeholderTextColor="#aaa"
            />

            <Text style={styles.sectionTitle}>Items near you</Text>
            <FlatList style={styles.itemList}
                data={itemsData}
                horizontal
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <TouchableOpacity style={styles.itemContainer} onPress={() => handlePurchasing(item)}>
                        <Image source={item.image} style={styles.itemImage} />
                        <Text style={styles.itemTitle}>{item.title}</Text>
                        <Text style={styles.itemLocation}>{item.location}</Text>
                        <Text style={styles.itemPrice}>{item.price}</Text>
                    </TouchableOpacity>
                )}
            />

            <Text style={styles.sectionTitle}>Upcoming Pickups</Text>
            <FlatList style={styles.pickupList}
                data={upcomingPickups}
                horizontal
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <TouchableOpacity style={styles.itemContainer} onPress={() => handlePickup(item)}>
                        <Image source={item.image} style={styles.itemImage} />
                        <Text style={styles.pickupTitle}>{item.title}</Text>
                        <Text style={styles.pickupTime}>{item.time}</Text>
                    </TouchableOpacity>
                )}
            />
        </View>
    );
};

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
    searchBar: {
        backgroundColor: '#252525',
        borderRadius: 10,
        color: 'white',
        padding: 18,
        marginTop: 32,
        marginHorizontal: 20,
        height: 48,
    },
    sectionTitle: {
        color: 'white',
        fontSize: 36,
        marginLeft: 16,
        marginTop: 20,
        paddingHorizontal: 4,
    },
    itemList: {

    },
    pickupList: {
        marginBottom: 60,
    },
    itemContainer: {
        width: 172,
        height: 320,
        padding: 28,
    },
    itemImage: {
        width: 100,
        height: 100,
    },
    itemTitle: {
        fontSize: 18,
        fontWeight: "bold",
        color: 'white',
        marginTop: 10,
    },
    itemLocation: {
        color: 'white',
    },
    itemPrice: {
        color: 'white',
    },
    pickupImage: {
        width: 100,
        height: 100,
    },
    pickupTitle: {
        fontSize: 18,
        fontWeight: "bold",
        color: 'white',
        marginTop: 10,
    },
    pickupTime: {
        color: 'white',
    },
});
