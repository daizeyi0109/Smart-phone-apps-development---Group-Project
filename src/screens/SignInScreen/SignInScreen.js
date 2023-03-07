import { View, Text, Image, StyleSheet, useWindowDimensions, ScrollView, Alert, TextInput } from 'react-native'
import { useState } from 'react';
import React from 'react'

import Logo from '../../../assets/images/Logo_2.png'
import CustomInput from '../../components/CustomInput'
import CustomButton from '../../components/CustomButton'
import SocialSignButton from '../../components/SocialSignButton';



import { useNavigation } from '@react-navigation/native';
import { useForm, Controller } from 'react-hook-form';

import { Auth } from 'aws-amplify';


const SignInScreen = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const [loading, setLoading] = useState(false)

    const { height } = useWindowDimensions();

    const navigation = useNavigation();

    const { control, handleSubmit } = useForm();




    const onSignInPressed = async (data) => {
        // console.warn('Sign in button pressed')
        // Validate user

        // navigation.navigate('Home')

        // const response = await Auth.signIn(username, password);
        // console.warn('Sign in button pressed')
        console.log(data)
        // if (loading) {
        //     return
        // }
        // setLoading(true)
        // try {
        //     const response = await Auth.signIn(username, password);
        //     console.log(username)

        // } catch (error) {
        //     // console.log('error signing in', error);
        //     Alert.alert('Error', error.message)
        // }
        // setLoading(false)
    };



    const onForgotPasswordPressed = () => {
        console.warn('Forgot password button pressed')
        navigation.navigate('ForgotPassword')
    }
    const onSignUpPressed = () => {
        console.warn('Sign Up button pressed')
        navigation.navigate('SignUp')
    }

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.root}>
                <Image source={Logo} style={[styles.logo, { height: height * 0.3 }]} resizeMode='contain' />

                <CustomInput placeholder='Username' value={username} setValue={setUsername} />
                <CustomInput placeholder='Password' value={password} setValue={setPassword} secureTextEntry='True' />


                {/* <Controller
                    control={control}
                    name="username"
                    render={({ field: { onChange, onBlur, value } }) => (
                        <TextInput
                            style={styles.input}
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                            placeholder='username'
                        />
                    )}
                /> */}

                {/* <TextInput placeholder='password' /> */}
                <CustomButton onPress={handleSubmit(onSignInPressed)} text={loading ? 'Loading...' : 'Sign In'} imgsrc='' />
                <CustomButton onPress={onForgotPasswordPressed} text='Forgot Password' type='TERTIARY' imgsrc='' />

                <SocialSignButton />
                {/* <CustomButtonIcon onPress={onSignInApplePressed} text='Sign In with Apple' bgColor='#e3e3e3' fgColor='#363636' imgsrc={''} /> */}


                <CustomButton onPress={onSignUpPressed} text="Don't have an account? Create one" type='TERTIARY' />
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
    }
})
export default SignInScreen