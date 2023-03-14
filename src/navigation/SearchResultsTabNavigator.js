import React, { useState, useEffect } from "react";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import SearchResults from '../screens/Home/SearchResultScreen/SearchResultScreen';
import SearchResultsMap from '../screens/Home/SearchResultMap/SearchResultMap';
import { useRoute } from "@react-navigation/native";

const Tab = createMaterialTopTabNavigator();

const SearchResultsTabNavigator = (props) => {

    const [posts, setPosts] = useState([]);

    const route = useRoute();

    return (
        <Tab.Navigator tabBarOptions={{
            activeTintColor: '#f15454',
            indicatorStyle: {
                backgroundColor: '#f15454',
            }
        }}>
            {/* <Tab.Screen name={"list"}>
                {() => (
                    <SearchResults posts={posts} />
                )}
            </Tab.Screen>
            <Tab.Screen name={"map"}>
                {() => (
                    <SearchResultsMap posts={posts} />
                )}
            </Tab.Screen> */}
            <Tab.Screen name={'SearchResults'} component={SearchResults} />
            <Tab.Screen name={'SearchResultsMap'} component={SearchResultsMap} />


        </Tab.Navigator>
    );
};

export default SearchResultsTabNavigator;