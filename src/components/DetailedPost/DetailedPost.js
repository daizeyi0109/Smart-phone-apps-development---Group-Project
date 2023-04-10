import React, { useState, useEffect } from 'react';
import { View, StyleSheet, ScrollView, Image, Text, ActivityIndicator } from 'react-native';
import { API, graphqlOperation } from 'aws-amplify';
// import * as queries from '../../../graphql/queries';
import * as queries from '../../graphql/queries';

const DetailedPost = (props) => {
    const postID = props.postID;

    console.log(postID)
    const [post, setPost] = useState();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPost = async () => {
            try {
                const postResults = await API.graphql(
                    graphqlOperation(queries.listPosts, {
                        filter: {
                            id: {
                                eq: postID
                            }
                        }
                    })
                )
                console.log(postResults)
                setPost(postResults.data.listPosts.items)
                setLoading(false);
            } catch (error) {
                console.error(error);
            }
        }
        fetchPost()
    })

    if (loading) {
        return <ActivityIndicator />;
    }

    if (post === undefined) {
        return <Text>No data available</Text>;
    }
    else {
        console.log('111')
        console.log(post[0].image)
        return (
            <ScrollView>
                <View style={styles.container}>
                    {/* Image  */}
                    <Image
                        style={styles.image}
                        source={{ uri: post[0].image }}
                    />

                    {/* Bed & Bedroom  */}
                    <Text style={styles.bedrooms}>
                        {post[0].bed} bed {post[0].bedroom} bedroom
                    </Text>

                    {/* Type & Description */}
                    <Text style={styles.description} numberOfLines={2}>
                        {post[0].type}. {post[0].title}
                    </Text>

                    {/*  Old price & new price */}
                    <Text style={styles.prices}>
                        <Text style={styles.oldPrice}>${post[0].oldPrice}</Text>
                        <Text style={styles.price}>  ${post[0].newPrice} </Text>
                        / night
                    </Text>

                    {/*  Total price */}
                    <Text style={styles.totalPrice}>${post[0].totalPrice} total</Text>

                    <Text style={styles.longDescription}>
                        {post[0].description}
                    </Text>
                </View>
            </ScrollView>
        );

    }




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
