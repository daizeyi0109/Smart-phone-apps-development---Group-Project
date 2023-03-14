import React from 'react';
import { View, StyleSheet, Image, Pressable, Text, useWindowDimensions, } from 'react-native';

const Post = (props) => {

    const days = 7

    const post = props.post


    const goToPostPage = () => {
        console.warn('ToPost button pressed')
    }
    return (
        <Pressable onPress={goToPostPage} style={styles.container}>

            <Image
                // style={[styles.image, { height: height * 0.5 }]}
                style={styles.image}
                source={{ uri: post.image }}
            />


            {/* Bed & Bedroom  */}
            <Text style={styles.bedrooms}>
                {post.bedroom} bed {post.bedroom} bedroom

            </Text>

            {/* Type & Description */}
            <Text style={styles.description} numberOfLines={2}>
                {post.type}. {post.title}
            </Text>

            {/*  Old price & new price */}
            <Text style={styles.prices}>
                <Text style={styles.oldPrice}>${post.oldPrice}</Text>
                <Text style={styles.price}>  ${post.newPrice} </Text>
                / night

            </Text>

            {/*  Total price */}
            <Text style={styles.totalPrice}>${post.newPrice * days} total</Text>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    container: {
        margin: 10,
    },
    image: {
        width: '100%',
        height: 300,
        borderColor: 'red',
        resizeMode: 'stretch',
        borderRadius: 20,
    },

    bedrooms: {
        marginVertical: 10,
        marginHorizontal: 10,
        color: '#5b5b5b',
        fontSize: 15,
    },
    description: {
        fontSize: 18,
        lineHeight: 26,
    },
    prices: {
        fontSize: 18,
        marginVertical: 10,
    },
    oldPrice: {
        color: '#5b5b5b',
        textDecorationLine: 'line-through',
    },
    price: {
        fontWeight: 'bold',
    },
    totalPrice: {
        color: '#5b5b5b',
        textDecorationLine: 'underline',
    }
})

export default Post;
