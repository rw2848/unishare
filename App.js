// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import StartScreen from './StartScreen';
import SignUpScreen from './SignUpScreen';
import VerificationScreen from './VerificationScreen';
import TermScreen from './TermScreen';
import PaymentScreen from './PaymentScreen';
import HomeScreen from './HomeScreen';
import ItemPurchasing from './ItemPurchasing';
import ItemPickup from './ItemPickup';
import ItemLend from './ItemLend';


const Stack = createStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Start"
                    component={StartScreen}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="SignUp"
                    component={SignUpScreen}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="Verification"
                    component={VerificationScreen}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="Term"
                    component={TermScreen}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="Payment"
                    component={PaymentScreen}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="Home"
                    component={HomeScreen}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="ItemPurchasing"
                    component={ItemPurchasing}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="ItemPickup"
                    component={ItemPickup}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="ItemLend"
                    component={ItemLend}
                    options={{ headerShown: false }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
