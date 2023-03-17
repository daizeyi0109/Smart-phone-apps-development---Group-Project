import React from 'react';
import { View, StyleSheet, Text, ImageBackground, Button, Pressable, ScrollView, FlatList } from 'react-native';
import { Auth } from 'aws-amplify';
import { useNavigation, useRoute } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import Post from '../../../components/Post/Post';

import feed from '../../../../assets/data/feed';


const item = feed[1];

const HomeScreen = () => {
    const navigation = useNavigation();

    const signOut = () => {
        Auth.signOut();
        navigation.navigate('SignIn')
    };

    const onExplorePressed = () => {
        console.warn('Explore link pressed')
        navigation.navigate('DestinationSearch')
    }

    const onSearchPressed = () => {
        console.warn('Search link pressed')
        navigation.navigate('DestinationSearch')
    }

    return (
        <ScrollView showsVerticalScrollIndicator={false}>

            {/* <View style={{ }}>
             */}
            <View style={styles.container} >
                {/* <Text styles={{ fontSize: 24, alignSelf: 'center' }}>
                Home,Sweet Home</Text> */}

                {/* Search Bard */}
                <Pressable style={styles.search_button} onPress={onSearchPressed}>
                    <FontAwesome name="search" size={24} color="black" />
                    <Text style={styles.search_buttonText}>Where are you going? </Text>
                </Pressable>

                <ImageBackground source={require('../../../../assets/images/bgc.jpg')} style={styles.image}>
                    {/* Title */}
                    <Text style={styles.title}>Go Near</Text>
                    {/* Button */}
                    <Pressable style={styles.button} onPress={onExplorePressed}>
                        <Text style={styles.buttonText}>Explore nearby stays</Text>
                    </Pressable>
                </ImageBackground>



            </View>


            <View style={styles.likeTextContainer}>
                <AntDesign name="like1" size={24} color="#e50e00" />
                <Text style={styles.likeText}>You may like</Text>
            </View>

            <Post post={item} />

            <FlatList
                data={feed}
                renderItem={({ item }) => <Post post={item} />}
                keyExtractor={item => item.id}
            />

        </ScrollView>




    );
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
    }

})

export default HomeScreen;
