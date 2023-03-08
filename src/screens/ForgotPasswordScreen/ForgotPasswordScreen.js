import { View, Text, Image, StyleSheet, useWindowDimensions, ScrollView } from 'react-native'
import { useState } from 'react';
import React from 'react'

import Logo from '../../../assets/images/Logo_2.png'
import CustomInput from '../../components/CustomInput'
import CustomButton from '../../components/CustomButton'
import SocialSignButton from '../../components/SocialSignButton';
import { useNavigation } from '@react-navigation/native';

import { useForm } from 'react-hook-form';



const ForgotPasswordScreen = () => {
    // const [username, setUsername] = useState('');
    const navigation = useNavigation();

    const { control, handleSubmit, watch } = useForm();

    const onSendPressed = (data) => {
        console.warn(data);
        console.warn('Confirm button pressed')
        navigation.navigate('NewPassword')
    }
    const onResendPressed = () => {
        console.warn('Terms link pressed')
    }
    const onBackPressed = () => {
        console.warn('Conditions link pressed')
        navigation.navigate('SignIn')
    }

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.root}>
                <Text style={styles.title}>Reset your password</Text>

                {/* <CustomInput placeholder='Enter your Username' value={username} setValue={setUsername} /> */}
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

                <CustomButton onPress={handleSubmit(onSendPressed)} text='Send' />

                <CustomButton onPress={onBackPressed} text='Back to Sign In' type='TERTIARY' />

                {/* <CustomButton onPress={onSignUpPressed} text="Don't have an account? Create one" type='TERTIARY' /> */}
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
export default ForgotPasswordScreen