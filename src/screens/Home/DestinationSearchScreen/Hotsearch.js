import React, { useState } from 'react';
import { View, StyleSheet, Text, Pressable, Alert } from 'react-native';

const Hotsearch = (props) => {
    const [search, setSearch] = useState(props.hot.hot);

    const onHotsearchPress = () => {
        Alert.alert("onHotsearchPress", search);
    }
    return (
        <Pressable style={styles.container} onPress={onHotsearchPress}>
            <Text style={styles.hotText}>{props.hot.hot}</Text>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    container: {
        borderWidth: 2,
        borderColor: '#fa620c',
        borderRadius: 10,
        // marginHorizontal: 5,
        margin: 5,
        width: '30%',
        height: 30,
        justifyContent: 'center',
        alignItems: 'center'
    },
    hotText: {

        fontSize: 13,
        color: '#fa620c'

    }
})

export default Hotsearch;
