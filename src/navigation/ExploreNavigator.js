import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/Home/HomeScreen/HomeScreen';
// import SearcResultsScreen from '../screens/SearchResults';
import SearchResultsScreen from '../screens/Home/SearchResultScreen/SearchResultScreen';
import SearchResultsTabNavigator from "./SearchResultsTabNavigator";

const Stack = createStackNavigator();

const ExploreNavigator = (props) => {
    return (
        <Stack.Navigator>

            <Stack.Screen
                name={'Welcome'}
                component={HomeScreen}
                options={{
                    headerShown: false,
                }}
            />

            <Stack.Screen
                name={'SearchResults'}
                component={SearchResultsTabNavigator}
                options={{
                    title: 'Search your destination',
                }}
            />
        </Stack.Navigator>
    );
};

export default ExploreNavigator;