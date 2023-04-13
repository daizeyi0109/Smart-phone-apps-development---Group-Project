import { View, Text, Image, StyleSheet, useWindowDimensions, ScrollView, Alert } from 'react-native'
import { useState } from 'react';
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { useRoute } from '@react-navigation/native';

import Logo from '../../../../assets/images/Logo_2.png'
import CustomInput from '../../../components/CustomInput'
import CustomButton from '../../../components/CustomButton'
import SocialSignButton from '../../../components/SocialSignButton';

import { useForm } from 'react-hook-form';

import { Auth } from 'aws-amplify';


const ConfirmEmailScreen = () => {
    // const [code, setCode] = useState('');
    const route = useRoute();

    const { control, handleSubmit, watch } = useForm(
        {
            defaultValues: {
                username: route.params.username,
            }
        }
    );

    const username = watch('username');

    const navigation = useNavigation();


    const onConfirmPressed = async (data) => {
        try {
            const response = await Auth.confirmSignUp(data.username, data.code);
            console.log(response);
            navigation.navigate('SignIn')
        } catch (error) {
            Alert.alert('Oops', error.message)
        }
    }
    const onResendPressed = async () => {
        console.warn('Terms link pressed')
        try {
            await Auth.resendSignUp(username)
            Alert.alert('Success', 'Code was resent to your email')
        } catch (error) {
            Alert.alert('Oops', error.message)
        }
    }
    const onBackPressed = () => {
        console.warn('Conditions link pressed')
        navigation.navigate('SignIn')
    }

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.root}>
                <Text style={styles.title}>Confirm your Email</Text>

                {/* <CustomInput placeholder='Enter your confirmationCode' value={code} setValue={setCode} /> */}
                <CustomInput
                    name="username"
                    control={control}
                    placeholder="Username"
                    rules={{
                        required: 'Username code is required',
                    }}
                />
                <CustomInput
                    name="code"
                    control={control}
                    placeholder="Enter your confirmation Code"
                    rules={{
                        required: 'Confirmation Code is required',
                    }}
                />

                <CustomButton onPress={handleSubmit(onConfirmPressed)} text='Confirm' />

                <CustomButton onPress={onResendPressed} text='Resend code' type='SECONDARY' />
                <CustomButton onPress={onBackPressed} text='Back to Sign In' type='SECONDARY' />

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
export default ConfirmEmailScreen