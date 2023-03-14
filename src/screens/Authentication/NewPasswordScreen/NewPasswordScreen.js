import { View, Text, Image, StyleSheet, useWindowDimensions, ScrollView, Alert } from 'react-native'
import { useState } from 'react';
import React from 'react'

// import Logo from '../../../assets/images/Logo_2.png'
import CustomInput from '../../../components/CustomInput/CustomInput'
import CustomButton from '../../../components/CustomButton/CustomButton'
// import SocialSignButton from '../../components/SocialSignButton';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Auth } from 'aws-amplify';
import { useForm } from 'react-hook-form';


const NewPasswordScreen = () => {
    // const [code, setCode] = useState('');
    // const [newPassword, setNewPassword] = useState('');
    const navigation = useNavigation();
    const route = useRoute();

    const { control, handleSubmit, watch } = useForm(
        {
            defaultValues: {
                username: route.params.username
            }
        }
    );

    const onSubmitPressed = async (data) => {
        try {
            await Auth.forgotPasswordSubmit(data.username, data.code, data.password)
            navigation.navigate('SignIn')
        } catch (error) {
            Alert.alert('Oops', error.message)
        }
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
                <Text style={styles.title}>New password</Text>
                <CustomInput
                    name="username"
                    control={control}
                    placeholder="Username"
                    rules={{
                        required: 'Username is required',
                    }}
                />
                {/* <CustomInput placeholder='Enter Code' value={code} setValue={setCode} /> */}
                <CustomInput
                    name="code"
                    control={control}
                    placeholder="Enter Code"
                    rules={{
                        required: 'Confirmation Code is required',
                    }}
                />

                {/* <CustomInput placeholder='Enter your new password' value={newPassword} setValue={setNewPassword} /> */}

                <CustomInput placeholder='Enter your new password' name='password' control={control}
                    rules={{
                        required: 'NewPassword is required',
                        minLength: {
                            value: 8,
                            message: 'Password should be at least 8 characters long',
                        },
                    }}
                    secureTextEntry='True' />

                <CustomButton onPress={handleSubmit(onSubmitPressed)} text='Submit' />

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
export default NewPasswordScreen