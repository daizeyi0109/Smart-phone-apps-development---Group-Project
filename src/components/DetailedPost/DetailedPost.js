import React from 'react';
import { View, StyleSheet, ScrollView, Image, Text } from 'react-native';

const DetailedPost = (props) => {
    const post = props.post;
    return (
        <ScrollView>
            <View style={styles.container}>
                {/* Image  */}
                <Image
                    style={styles.image}
                    source={{ uri: post.image }}
                />

                {/* Bed & Bedroom  */}
                <Text style={styles.bedrooms}>
                    {post.bed} bed {post.bedroom} bedroom
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
                <Text style={styles.totalPrice}>${post.totalPrice} total</Text>

                <Text style={styles.longDescription}>
                    {post.description}
                </Text>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        margin: 20,
    },
    image: {
        width: '100%',
        aspectRatio: 3 / 2,
        resizeMode: 'cover',
        borderRadius: 10,
    },

    bedrooms: {
        marginVertical: 10,
        color: '#5b5b5b',
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
    },
    longDescription: {
        marginVertical: 20,
        fontSize: 16,
        lineHeight: 24,
    }
});

export default DetailedPost;
