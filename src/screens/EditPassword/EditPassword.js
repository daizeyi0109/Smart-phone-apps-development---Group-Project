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


    const checkUser = async () => {
        try {
            const authUser = await Auth.currentAuthenticatedUser({ bypassCache: true });
            console.log(authUser);
            console.log('attributes:', authUser.attributes);
            setUser(authUser.username)
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
            }
        }
    );

    const pwd = watch('newPassword');


    const onConfirmPressed = async (data) => {
        // console.warn('Register button pressed')
        // navigation.navigate('ConfirmEmail')
        const { oldPassword, newPassword } = data
        try {
            const editUser = await Auth.currentAuthenticatedUser({ bypassCache: true }).then((user) => {
                return Auth.changePassword(user, oldPassword, newPassword);
            })

            Alert.alert('Oops', editUser)

            navigation.navigate('SignIn')
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
                <Text style={styles.title}>Change Your Password</Text>
                <Text style={styles.title}>{user}</Text>



                <CustomInput placeholder='Old Password' name='oldPassword' control={control}
                    rules={{
                        required: 'Old Password is required',
                        minLength: {
                            value: 8,
                            message: 'Password should be at least 8 characters long',
                        },
                    }}
                    secureTextEntry='True' />

                <CustomInput placeholder='New Password' name='newPassword' control={control}
                    rules={{
                        required: 'Password is required',
                        minLength: {
                            value: 8,
                            message: 'Password should be at least 8 characters long',
                        },
                    }}
                    secureTextEntry='True' />

                <CustomInput placeholder='Repeat New Password' name='passwordRepeat' control={control}
                    rules={{
                        validate: value => value === pwd || 'Password do not match',
                    }}
                    secureTextEntry='True' />



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
