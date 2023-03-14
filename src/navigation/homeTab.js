import React from 'react';
import { View, StyleSheet } from 'react-native';
import Ionicons from "@expo/vector-icons/Ionicons";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
// Screen
import HomeScreen from '../screens/Home/HomeScreen';
import ProfileScreen from '../screens/Profile/ProfileScreen';
import ChatScreen from '../screens/Chat/ChatScreen';
import SaveScreen from '../screens/Save/SaveScreen';


const Tab = createBottomTabNavigator();

const HomeTab = () => {
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
                    else if (route.name === "Chat") {
                        iconName = focused
                            ? "ios-chatbox-outline"
                            : "ios-chatbox-sharp";
                    } else if (route.name === "Profile") {
                        iconName = focused
                            ? "person-circle-outline"
                            : "person-circle-sharp";
                    } else if (route.name === "Save") {
                        iconName = focused
                            ? "heart-circle-outline"
                            : "heart-circle-sharp";
                    }
                    return <Ionicons name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: "rgba(78,0,233,0.7)",
                tabBarInactiveTintColor: "gray",
                tabBarShowIcon: "true",
                // headerTintColor: "white",
                // headerStyle: { backgroundColor: 'rgba(78,0,233,0.7)' },
                // tabBarStyle:{backgroundColor:'rgba(0,0,0,0.7)'},
                // headerShown: false,
                initialRouteName: "Recommend",
            })}>

            <Tab.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
            <Tab.Screen name="Chat" component={ChatScreen} options={{ headerShown: false }} />
            <Tab.Screen name="Save" component={SaveScreen} options={{ headerShown: false }} />
            <Tab.Screen name="Profile" component={ProfileScreen} options={{ headerShown: false }} />

        </Tab.Navigator>
        // </NavigationContainer>
    );
}

const styles = StyleSheet.create({})

export default HomeTab;
