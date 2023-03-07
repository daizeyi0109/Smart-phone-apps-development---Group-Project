import { View, Text, StyleSheet, ScrollView } from 'react-native'
import { useState } from 'react';
import React from 'react'
import { useNavigation } from '@react-navigation/native';


import CustomInput from '../../components/CustomInput'
import CustomButton from '../../components/CustomButton'
import SocialSignButton from '../../components/SocialSignButton';

const SignUpScreen = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordRepeat, setPasswordRepeat] = useState('');

    const navigation = useNavigation();


    const onRegisterPressed = () => {
        console.warn('Register button pressed')
        navigation.navigate('ConfirmEmail')
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

                <CustomInput placeholder='Username' value={username} setValue={setUsername} />
                <CustomInput placeholder='Email' value={email} setValue={setEmail} r />
                <CustomInput placeholder='Password' value={password} setValue={setPassword} secureTextEntry='True' />
                <CustomInput placeholder='Repeat Password' value={passwordRepeat} setValue={setPasswordRepeat} secureTextEntry='True' />

                <CustomButton onPress={onRegisterPressed} text='Register' />
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