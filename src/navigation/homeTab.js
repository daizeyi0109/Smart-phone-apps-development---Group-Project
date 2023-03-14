import React from 'react';
import { View, StyleSheet } from 'react-native';
import Ionicons from "@expo/vector-icons/Ionicons";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
// Screen
import HomeScreen from '../screens/Home/HomeScreen';

const Tab = createBottomTabNavigator();

const homeTab = () => {
    return (
        // <NavigationContainer>
        <Tab.Navigator
            initialRouteName='Home'
            shifting={true}
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    if (route.name === "Home") {
                        iconName = focused ? "ios-home-outline" : "ios-home-sharp";
                    }
                    else if (route.name === "Statistics") {
                        iconName = focused
                            ? "ios-bar-chart-outline"
                            : "ios-bar-chart-sharp";
                    } else if (route.name === "Profile") {
                        iconName = focused
                            ? "person-circle-outline"
                            : "person-circle-sharp";
                    } else if (route.name === "Predict") {
                        iconName = focused
                            ? "ios-analytics-outline"
                            : "ios-analytics-sharp";
                    }
                    return <Ionicons name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: "rgba(78,0,233,0.7)",
                tabBarInactiveTintColor: "gray",
                tabBarShowIcon: "true",
                headerTintColor: "white",
                headerStyle: { backgroundColor: 'rgba(78,0,233,0.7)' },
                // tabBarStyle:{backgroundColor:'rgba(0,0,0,0.7)'},
                // headerShown: false,
                initialRouteName: "Recommend",
            })}>

            <Tab.Screen name="Home" component={HomeScreen} />
        </Tab.Navigator>
        // </NavigationContainer>
    );
}

const styles = StyleSheet.create({})

export default homeTab;
