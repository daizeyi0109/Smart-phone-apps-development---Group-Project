import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Marker } from 'react-native-maps'

const MapMarket = (props) => {
    // const { coordinate, price } = props
    const coordinate = props.coordinate
    const price = props.price
    const onPress = props.onPress
    const isSelected = props.isSelected
    console.log(isSelected)



    return (
        <Marker
            coordinate={coordinate} onPress={onPress}>
            <View style={[styles.market, { backgroundColor: isSelected ? "black" : "white" }]}>
                <Text style={[styles.marketText, { color: isSelected ? "white" : "black", fontWeight: "bold" }]}>${price}</Text>
            </View>
        </Marker>

    );



}

const styles = StyleSheet.create({
    market: {
        // backgroundColor: 'white',
        padding: 5,
        borderRadius: 20,
        borderColor: 'gray',
        borderWidth: 1

    },
    marketText: {
        fontFamily: 'Arial Rounded MT Bold',
        fontWeight: 'bold'

    }
})

export default MapMarket;
