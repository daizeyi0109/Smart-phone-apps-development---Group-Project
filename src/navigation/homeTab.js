import React from 'react';
import { View, StyleSheet } from 'react-native';
import Ionicons from "@expo/vector-icons/Ionicons";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
// Screen
import HomeScreen from '../screens/Home/HomeScreen';
import ProfileScreen from '../screens/Profile/ProfileScreen';
import DestinationSearchScreen from '../../src/screens/Home/DestinationSearchScreen/DestinationSearchScreen';
import ExploreNavigator from './ExploreNavigator';



const Tab = createBottomTabNavigator();

const HomeTab = () => {
    return (
        // <NavigationContainer>
        <Tab.Navigator
            initialRouteName='Explore'
            shifting={true}
            screenOptions={({ route }) => ({

                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    if (route.name === "Explore") {
                        iconName = focused ? "ios-home-outline" : "ios-home-sharp";
                    }
                    else if (route.name === "Search") {
                        iconName = focused
                            ? "md-search-outline"
                            : "md-search-sharp";
                    } else if (route.name === "Profile") {
                        iconName = focused
                            ? "person-circle-outline"
                            : "person-circle-sharp";
                    }
                    return <Ionicons name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: "rgba(78,0,233,0.7)",
                tabBarInactiveTintColor: "gray",
                // tabBarShowIcon: "true",
                // headerTintColor: "white",
                // headerStyle: { backgroundColor: 'rgba(78,0,233,0.7)' },
                // tabBarStyle:{backgroundColor:'rgba(0,0,0,0.7)'},
                // headerShown: false,
                // initialRouteName: "Recommend",

                headerTransparent: true,
                headerTitle: "",
                headerBackTitle: "",
                headerBackTitleVisible: true,
                gestureEnabled: false,
                headerShown: false

            })}>

            <Tab.Screen name="Explore" component={ExploreNavigator} options={{ headerShown: false }} />
            <Tab.Screen name="Search" component={DestinationSearchScreen} options={{ headerShown: false }} />
            <Tab.Screen name="Profile" component={ProfileScreen} options={{ headerShown: false }} />

        </Tab.Navigator>
        // </NavigationContainer>
    );
}

const styles = StyleSheet.create({})

export default HomeTab;
