import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text, ImageBackground, Button, Pressable, ScrollView, FlatList, Image, ActivityIndicator, Dimensions } from 'react-native';
import { Auth } from 'aws-amplify';
import { useNavigation, useRoute } from '@react-navigation/native';

import { Ionicons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import Post from '../../../components/Post/Post';

import { API, graphqlOperation } from 'aws-amplify';
import * as queries from '../../../../src/graphql/queries';

import feed from '../../../../assets/data/feed';
import Swiper from 'react-native-swiper';
import WaterfallFlow from 'react-native-waterfall-flow'



const item = feed[1];






const HomeScreen = () => {
    const navigation = useNavigation();

    const signOut = () => {
        Auth.signOut();
        navigation.navigate('SignIn')
    };

    const onExplorePressed = () => {
        // console.warn('Explore link pressed')
        navigation.navigate('DestinationSearch')
    }

    const onSearchPressed = () => {
        // console.warn('Search link pressed')
        navigation.navigate('DestinationSearch')
    }

    const [post, setPost] = useState();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPost = async () => {
            try {
                const postResults = await API.graphql(
                    graphqlOperation(queries.listPosts)
                )
                // console.log(postResults)
                setPost(postResults.data.listPosts.items)
                setLoading(false);
            } catch (error) {
                // console.error(error);
            }
        }
        fetchPost()
    })

    // console.log(post)


    let img1url = "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/1.jpg";
    let img2url = "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/2.jpg";
    let img3url = "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/3.jpg";

    const width = Dimensions.get("window").width;

    if (loading) {
        return <ActivityIndicator />;
    }

    if (post === undefined) {
        return <Text>No data available</Text>;
    }
    else {
        return (
            <ScrollView showsVerticalScrollIndicator={false}>

                {/* <View style={{ }}>
             */}
                <View style={styles.container} >
                    {/* <Text styles={{ fontSize: 24, alignSelf: 'center' }}>
                Home,Sweet Home</Text> */}

                    {/* Search Bard */}
                    {/* <Pressable style={styles.search_button} onPress={onSearchPressed}>
                        <FontAwesome name="search" size={24} color="black" />
                        <Text style={styles.search_buttonText}>Where are you going? </Text>
                    </Pressable> */}

                    <ImageBackground source={require('../../../../assets/images/bgc.jpg')} style={styles.image}>
                        {/* Title */}
                        <Text style={styles.title}>Live Near</Text>
                        {/* Button */}
                        <Pressable style={styles.button} onPress={onExplorePressed}>
                            <Text style={styles.buttonText}>Explore nearby stays</Text>
                        </Pressable>
                    </ImageBackground>


                </View>


                <View style={styles.likeTextContainer}>
                    <FontAwesome5 name="fire-alt" size={24} color="red" />
                    <Text style={styles.likeText}>You may like</Text>
                </View>

                {/* <Post post={item} /> */}


                <View style={styles.slidecontainer}>
                    <Swiper showsButtons={false}
                        autoplay={false}
                        loop={false}
                        autoplayTimeout={10}
                        dot={
                            <View
                                style={{
                                    backgroundColor: 'white',
                                    width: 8,
                                    height: 8,
                                    borderRadius: 4,
                                    marginLeft: 3,
                                    marginRight: 3,
                                    marginTop: 3,
                                    marginBottom: 3
                                }}
                            />
                        }
                        activeDot={
                            <View
                                style={{
                                    backgroundColor: 'red',
                                    width: 16,
                                    height: 8,
                                    borderRadius: 4,
                                    marginLeft: 3,
                                    marginRight: 3,
                                    marginTop: 3,
                                    marginBottom: 3
                                }}
                            />
                        }
                    >
                        <View style={[styles.slide, styles.center]}>
                            <Image style={styles.slideimage} resizeMode="stretch" source={{ uri: img1url }} />

                        </View>
                        <View style={[styles.slide, styles.center]}>
                            <Image style={styles.slideimage} resizeMode="stretch" source={{ uri: img2url }} />

                        </View>
                        <View style={[styles.slide, styles.center]}>
                            <Image style={styles.slideimage} resizeMode="stretch" source={{ uri: img3url }} />

                        </View>
                    </Swiper>
                </View>




                {/* <FlatList
                    data={post}
                    renderItem={({ item }) => <Post post={item} />}
                    keyExtractor={item => item.id}
                /> */}
                <View style={styles.likeTextContainer}>
                    {/* <AntDesign name="like1" size={24} color="#e50e00" /> */}
                    <Ionicons name="heart-circle-outline" size={24} color="red" />
                    <Text style={styles.likeText}>Recommendation</Text>
                </View>

                <WaterfallFlow
                    data={post}
                    numColumns={2}
                    renderItem={({ item }) => <Post post={item} />}
                />



            </ScrollView>




        );

    }













}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 5,
        alignItems: 'center',
        position: 'relative',
    },
    image: {
        width: '100%',
        height: 500,
        resizeMode: 'contain',
        justifyContent: 'center',
        borderRadius: 30


    },
    title: {
        color: 'white',
        fontSize: 100,
        fontWeight: 'bold',
        width: '60%',
        // marginH: '10%'
        marginHorizontal: '5%'
    },
    button: {
        backgroundColor: '#fff',
        marginHorizontal: '5%',
        marginTop: 25,
        width: '45%',
        height: '6%',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',

    },
    buttonText: {
        fontSize: 15,
        fontWeight: 'bold',

    },
    search_button: {
        backgroundColor: '#fff',
        // marginHorizontal: '5%',
        marginTop: 15,

        width: '80%',
        height: '8%',
        borderRadius: 25,

        borderWidth: 2,

        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        zIndex: 100


    },
    search_buttonText: {
        marginLeft: 10,
        fontSize: 15,
        fontWeight: 'bold',
    },

    likeTextContainer: {
        // alignSelf: 'flex-start',
        // width: 200,
        height: 30,
        marginTop: 10,
        marginHorizontal: 14,
        // justifyContent: 'center',
        // backgroundColor: 'beige',
        // borderWidth: 5,
        flexDirection: 'row',
        alignItems: 'center',
    },
    likeText: {
        marginLeft: 10,
        fontSize: 20,
        fontFamily: 'Arial Rounded MT Bold',
    },
    slide: {
        flex: 1,
        // backgroundColor: 'blue',
    },
    center: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    slidecontainer: {
        margin: 10,
        height: 300,
        borderRadius: 10
    },
    slideimage: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
        flex: 1,
        justifyContent: 'center',
        borderRadius: 10
    }


})

export default HomeScreen;