import { View, Text, StyleSheet, ScrollView, Alert } from 'react-native'
import { useState, useEffect } from 'react';
import React from 'react'
import { useNavigation } from '@react-navigation/native';

import CustomInput from '../../components/CustomInput/CustomInput'
import CustomButton from '../../components/CustomButton/CustomButton'
import SocialSignButton from '../../components/SocialSignButton/SocialSignButton';


import { useForm } from 'react-hook-form';

import { Auth } from 'aws-amplify';

const EMAIL_REGEX =
    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;


const EditProfileScreen = () => {

    const navigation = useNavigation();



    const [user, setUser] = useState(undefined);

    const [name, setName] = useState(undefined);


    const checkUser = async () => {
        try {
            const authUser = await Auth.currentAuthenticatedUser({ bypassCache: true });
            console.log(authUser);
            console.log('attributes:', authUser.attributes);
            // console.log(typeof authUser.name)
            setUser(authUser.username)
            setName(authUser.name)
            console.log('Test edit profile loaded');
        } catch (error) {
            setUser(null)
        }

    }

    useEffect(() => {
        checkUser();
    }, []);


    const { control, handleSubmit, watch } = useForm(
        {
            defaultValues: {
                // username: user,
                // name: 
            }
        }
    );

    const pwd = watch('newPassword');


    const onConfirmPressed = async (data) => {
        // console.warn('Register button pressed')
        // navigation.navigate('ConfirmEmail')
        const { oldPassword, newPassword, name, address } = data
        try {



            const authUser = await Auth.currentAuthenticatedUser({ bypassCache: true });

            const response = await Auth.updateUserAttributes(authUser, {
                // 'password': password,
                'name': name,
                'address': address
            });


            // console.log("Edit name wrong", response)
            Alert.alert('Oops', response)
            // navigation.navigate('ConfirmEmail', { username })
            navigation.navigate('Profile')
        } catch (error) {
            // Alert.alert('Oops', error.message)
        }
    };


    const onTermsPressed = () => {
        console.warn('Terms link pressed')
    }
    const onConditionsPressed = () => {
        console.warn('Conditions link pressed')
    }

    const onProfilePressed = () => {
        // console.warn('Sign Up button pressed')
        navigation.navigate('Profile')
    }

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.root}>
                <Text style={styles.title}>Edit Your Profile</Text>
                <Text style={styles.title}>{user}</Text>


                <CustomInput
                    name="name"
                    control={control}
                    placeholder="Name"
                    rules={{
                        required: 'Name is required',
                        minLength: {
                            value: 3,
                            message: 'Name should be at least 3 characters long',
                        },
                        maxLength: {
                            value: 24,
                            message: 'Name should be max 24 characters long',
                        },
                    }}
                />
                <CustomInput placeholder='New Address' name='address' control={control} rules={{
                    required: 'address is required',
                    // pattern: { value: EMAIL_REGEX, message: 'Email is invalid' },
                }} />





                <CustomButton onPress={handleSubmit(onConfirmPressed)} text='Confirm' />

                <Text style={styles.text}>
                    By Editing profile, you confirm that you have read and understood the
                    <Text style={styles.link} onPress={onTermsPressed}> terms</Text> and <Text style={styles.link} onPress={onConditionsPressed}>conditions</Text>
                </Text>


                <CustomButton onPress={onProfilePressed} text="Not Now ? Back" type='TERTIARY' />
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
        padding: 20,
    },
    logo: {
        width: '70%',
        maxWidth: 300,
        maxHight: 200,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#051C60',
        margin: 10
    },
    text: {
        color: 'gray',
        marginVertical: 10,
    },
    link: {
        color: "#FDB075"
    }
})

export default EditProfileScreen;
