import { View, Text, StyleSheet, ScrollView, Alert } from 'react-native'
import { useState } from 'react';
import React from 'react'
import { useNavigation } from '@react-navigation/native';


import CustomInput from '../../../components/CustomInput/CustomInput'
import CustomButton from '../../../components/CustomButton/CustomButton'
import SocialSignButton from '../../../components/SocialSignButton/SocialSignButton';

import { useForm } from 'react-hook-form';

import { Auth } from 'aws-amplify';


const EMAIL_REGEX =
    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

const SignUpScreen = () => {
    // const [username, setUsername] = useState('');
    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');
    // const [passwordRepeat, setPasswordRepeat] = useState('');

    const navigation = useNavigation();

    const { control, handleSubmit, watch } = useForm(
        {
            defaultValues: {
                username: 'Default username',
            }
        }
    );
    // formState: { errors },

    const pwd = watch('password');


    const onRegisterPressed = async (data) => {
        // console.warn('Register button pressed')
        // navigation.navigate('ConfirmEmail')
        const { username, password, email, name } = data
        try {
            const response = Auth.signUp({
                username,
                password,
                attributes: { email, name },
            })
            console.log(response)
            navigation.navigate('ConfirmEmail', { username })
        } catch (error) {
            Alert.alert('Oops', error.message)
        }
    };


    const onTermsPressed = () => {
        console.warn('Terms link pressed')
    }
    const onConditionsPressed = () => {
        console.warn('Conditions link pressed')
    }

    const onSignInPressed = () => {
        console.warn('Sign Up button pressed')
        navigation.navigate('SignIn')
    }

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.root}>
                <Text style={styles.title}>Create an account</Text>

                {/* <CustomInput placeholder='Username' value={username} setValue={setUsername} />
                <CustomInput placeholder='Email' value={email} setValue={setEmail} />
                <CustomInput placeholder='Password' value={password} setValue={setPassword} secureTextEntry='True' />
                <CustomInput placeholder='Repeat Password' value={passwordRepeat} setValue={setPasswordRepeat} secureTextEntry='True' /> */}

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
                <CustomInput placeholder='Username' name='username' control={control} rules={{
                    required: 'Username is required',
                    minLength: {
                        value: 3,
                        message: 'Username should be at least 3 characters long',
                    },
                    maxLength: {
                        value: 24,
                        message: 'Username should be max 24 characters long',
                    },
                }} />
                <CustomInput placeholder='Email' name='email' control={control} rules={{
                    required: 'Email is required',
                    pattern: { value: EMAIL_REGEX, message: 'Email is invalid' },
                }} />

                <CustomInput placeholder='Password' name='password' control={control}
                    rules={{
                        required: 'Password is required',
                        minLength: {
                            value: 8,
                            message: 'Password should be at least 8 characters long',
                        },
                    }}
                    secureTextEntry='True' />

                <CustomInput placeholder='Repeat Password' name='passwordRepeat' control={control}
                    rules={{
                        validate: value => value === pwd || 'Password do not match',
                    }}
                    secureTextEntry='True' />



                <CustomButton onPress={handleSubmit(onRegisterPressed)} text='Register' />
                <Text style={styles.text}>
                    By registering, you confirm that you have read and understood the
                    <Text style={styles.link} onPress={onTermsPressed}> terms</Text> and <Text style={styles.link} onPress={onConditionsPressed}>conditions</Text>
                </Text>

                <SocialSignButton />


                <CustomButton onPress={onSignInPressed} text="Have an account? Sign In" type='TERTIARY' />
            </View>
        </ScrollView>
    )
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
export default SignUpScreen