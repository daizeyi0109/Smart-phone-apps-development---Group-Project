import React from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
// import Entypo from "react-native-vector-icons/Entypo";
import { FontAwesome5 } from '@expo/vector-icons';
const SuggestionRow = ({ item }) => (
    <View style={styles.row}>
        <View style={styles.iconContainer}>
            {/* <Entypo name={"location-pin"} size={30} /> */}
            <FontAwesome5 name="location-arrow" size={24} color="black" />
        </View>
        <Text style={styles.locationText}>{item.description}</Text>
    </View>
)

const styles = StyleSheet.create({
    container: {
        padding: 20,
        height: '100%',
        // backgroundColor: 'white'
    },
    textInput: {
        fontSize: 20,
        marginBottom: 20,
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


    }
})

export default SuggestionRow;