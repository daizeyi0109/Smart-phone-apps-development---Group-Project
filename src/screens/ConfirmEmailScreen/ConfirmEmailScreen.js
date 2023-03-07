import { View, Text, Image, StyleSheet, useWindowDimensions, ScrollView } from 'react-native'
import { useState } from 'react';
import React from 'react'
import { useNavigation } from '@react-navigation/native';

import Logo from '../../../assets/images/Logo_2.png'
import CustomInput from '../../components/CustomInput'
import CustomButton from '../../components/CustomButton'
import SocialSignButton from '../../components/SocialSignButton';


const ConfirmEmailScreen = () => {
    const [code, setCode] = useState('');
    const navigation = useNavigation();


    const onConfirmPressed = () => {
        navigation.navigate('Home')
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
                <Text style={styles.title}>Confirm your Email</Text>

                <CustomInput placeholder='Enter your confirmationCode' value={code} setValue={setCode} />

                <CustomButton onPress={onConfirmPressed} text='Confirm' />

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