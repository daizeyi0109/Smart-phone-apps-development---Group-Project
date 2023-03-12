import React from 'react';
import { View, StyleSheet, Text, ImageBackground, Button, Pressable, ScrollView, FlatList } from 'react-native';
import { Auth } from 'aws-amplify';
import { useNavigation, useRoute } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons';
import Post from '../../components/Post/Post';
import WaterfallFlow from 'react-native-waterfall-flow'
import feed from '../../../assets/data/feed';


const item = feed[1];

const HomeScreen = () => {
    const navigation = useNavigation();
    const signOut = () => {
        Auth.signOut();
        navigation.navigate('SignIn')
    };

    const onExplorePressed = () => {
        console.warn('Explore link pressed')
    }

    const onSearchPressed = () => {
        console.warn('Search link pressed')
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

                <ImageBackground source={require('../../../assets/images/bgc.jpg')} style={styles.image}>
                    {/* Title */}
                    <Text style={styles.title}>Go Near</Text>
                    {/* Button */}
                    <Pressable style={styles.button} onPress={onExplorePressed}>
                        <Text style={styles.buttonText}>Explore nearby stays</Text>
                    </Pressable>
                </ImageBackground>
                {/* <Text
                    onPress={signOut}
                    style={{
                        width: '100%',
                        textAlign: 'center',
                        color: 'red',
                        marginTop: 'auto',
                        marginVertical: 20,
                        fontSize: 20,
                    }}>
                    Sign out
                </Text> */}


            </View>


            <View style={styles.likeTextContainer}>
                <Text style={styles.likeText}>You may like</Text>
            </View>

            <Post post={item} />

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

        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        zIndex: 100

    },
    search_buttonText: {
        fontSize: 15,
        fontWeight: 'bold',
    },

    likeTextContainer: {
        // alignSelf: 'flex-start',
        width: 200,
        height: 50,
        marginTop: 20,
        marginHorizontal: 10,
        justifyContent: 'center',
        // backgroundColor: 'beige',
        // borderWidth: 5,
    },
    likeText: {
        fontSize: 20,
        fontFamily: 'Arial Rounded MT Bold',
    }

})

export default HomeScreen;
