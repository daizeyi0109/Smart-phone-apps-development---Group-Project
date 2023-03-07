import { View, Text, StyleSheet, Pressable, Image } from 'react-native'
import React from 'react'


const CustomButtonIcon = ({ onPress, text, type = "PRIMARY", bgColor, fgColor, imgsrc = '' }) => {
    return (
        <Pressable onPress={onPress}
            style={[styles.container,
            styles[`container_${type}`],
            bgColor ? { backgroundColor: bgColor } : {}]}>
            {/* Tab 上面的重音符号 */}
            {/* {imgsrc ?
                <Image source={imgsrc} style={styles.button_icon} resizeMode='contain' />
                : null

            } */}
            <Image source={imgsrc} style={styles.button_icon} resizeMode='contain' />
            <Text
                style={[styles.text,
                styles[`text_${type}`],
                fgColor ? { color: fgColor } : {}]}>{text}</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    button_icon: {
        flex: 2,
        width: 25,
        height: 25,
    },
    container: {
        width: '100%',
        // height: 50,

        padding: 15,
        marginVertical: 5,

        alignItems: 'center',
        borderRadius: 5,

        justifyContent: 'center',
        flexDirection: "row",
    },

    container_PRIMARY: {
        backgroundColor: '#3B71F3',
    },

    container_SECONDARY: {
        borderColor: '#3B71F3',
        borderWidth: 2,
    },

    container_TERTIARY: {},

    text: {
        flex: 3,
        fontWeight: 'bold',
        color: 'white',
    },

    text_SECONDARY: {
        color: '#3B71F3',
    },

    text_TERTIARY: {
        color: 'gray',
    },
})

export default CustomButtonIcon