import React, { useState, useEffect } from "react";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import SearchResults from '../screens/Home/SearchResultScreen/SearchResultScreen';
import SearchResultsMap from '../screens/Home/SearchResultMap/SearchResultMap';
import PostScreen from "../screens/Home/PostScreen/PostScreen";
import { useRoute } from "@react-navigation/native";

const Tab = createMaterialTopTabNavigator();

const SearchResultsTabNavigator = (props) => {

    const [posts, setPosts] = useState([]);

    const route = useRoute();

    // const guests = route.params.guests;
    const guestsList = route.params;
    const guests = guestsList.params.guests;
    const viewport = guestsList.params.viewport;
    // console.log(guestsList)
    // console.log("上面是guestlist");
    // console.log(guests)

    return (
        <Tab.Navigator tabBarOptions={{
            activeTintColor: '#f15454',
            indicatorStyle: {
                backgroundColor: '#f15454',
            }
        }}>
            <Tab.Screen name={"List"}>
                {() => (
                    <SearchResults guests={guests} viewport={viewport} />
                )}
            </Tab.Screen>
            <Tab.Screen name={"Map"}>
                {() => (
                    <SearchResultsMap guests={guests} viewport={viewport} />
                )}
            </Tab.Screen>
            {/* <Tab.Screen name={'List'} component={SearchResults} />
            <Tab.Screen name={'Map'} component={SearchResultsMap} /> */}


        </Tab.Navigator>
    );
};

export default SearchResultsTabNavigator;