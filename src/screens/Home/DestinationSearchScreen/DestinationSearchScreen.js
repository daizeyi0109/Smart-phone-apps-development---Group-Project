import React, { useState } from "react";
import { View, TextInput, Text, FlatList, Pressable, StyleSheet } from "react-native";
import { useNavigation } from '@react-navigation/native';
import SuggestionRow from "./SuggestionRow";
import Hotsearch from "./Hotsearch";
import { FontAwesome } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";

import search from '../../../../assets/data/search'

const DestinationSearchScreen = (props) => {

    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <View style={styles.likeTextContainer}>
                <FontAwesome name="search" size={24} color="#4873E0" />
                <Text style={styles.likeText}>Search</Text>
            </View>
            <GooglePlacesAutocomplete
                placeholder='Where are you going?'
                onPress={(data, details = null) => {
                    // 'details' is provided when fetchDetails = true
                    console.log(data, details);
                    // navigation.navigate('Guests', { viewport: details.geometry.viewport });
                    navigation.navigate('GuestFilter', { viewport: details.geometry.viewport });
                }}
                fetchDetails
                styles={{
                    textInput: styles.textInput,
                }}
                query={{
                    key: 'AIzaSyAhQ14bNITgwLLJa9cfulH7G8Shv8QEEkA',
                    language: 'en',
                    types: '(cities)',
                }}
                suppressDefaultStyles
                renderRow={(item) => <SuggestionRow item={item} />}
            />
            <View style={styles.likeTextContainer}>
                <FontAwesome5 name="fire-alt" size={24} color="red" />
                <Text style={[styles.likeText, { fontSize: 20 }]}>Everyone is searching</Text>
            </View>

            <View style={styles.hotSearchContainer}>

                {/* <Hotsearch /> */}
                {search.map((item, index) => {
                    {/* <Hotsearch hot={item} /> */ }
                    return (
                        <Hotsearch hot={item} />
                    );

                })}
            </View>

            {/* <FlatList
                data={search}
                renderItem={({ item }) => <Hotsearch hot={item} />}
                keyExtractor={item => item.id}
            /> */}
            {/* </SafeAreaView> */}


        </View >
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
        height: '100%',
    },
    textInput: {
        fontSize: 20,
        marginBottom: 20,
        height: 50,
        borderWidth: 2,
        borderRadius: 10,
        textAlign: 'center'
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 15,
        borderBottomWidth: 1,
        borderColor: 'lightgrey',
    },
    iconContainer: {
        backgroundColor: '#e7e7e7',
        padding: 7,
        borderRadius: 10,
        marginRight: 15,
    },
    locationText: {

    },
    likeTextContainer: {
        height: 50,
        marginTop: 5,
        marginBottom: 10,
        marginHorizontal: 0,
        flexDirection: 'row',
        alignItems: 'center',
    },
    likeText: {
        marginLeft: 10,
        fontSize: 30,

    },
    hotSearchContainer: {
        width: '100%',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'flex-start',
    }
})

export default DestinationSearchScreen;
