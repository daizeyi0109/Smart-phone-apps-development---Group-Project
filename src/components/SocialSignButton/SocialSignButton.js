import { View, Text } from 'react-native'
import React from 'react'
import apple from '../../../assets/images/apple.png'
import google from '../../../assets/images/google.png'
import facebook from '../../../assets/images/facebook.png'
import CustomButtonIcon from '../CustomButtonIcon'

const SocialSignButton = () => {
    const onSignInGooglePressed = () => {
        console.warn('Sign in button pressed')
    };
    const onSignInFaceBookPressed = () => {
        console.warn('Sign in button pressed')
    };
    const onSignInApplePressed = () => {
        console.warn('Sign in button pressed')
    };
    return (
        <>
            <CustomButtonIcon onPress={onSignInFaceBookPressed} text='Sign In with FaceBook' bgColor='#E7EAF4' fgColor='#4765A9' imgsrc={facebook} />
            <CustomButtonIcon onPress={onSignInGooglePressed} text='Sign In with Google' bgColor='#FAE9EA' fgColor='#DD4D44' imgsrc={google} />
            <CustomButtonIcon onPress={onSignInApplePressed} text='Sign In with Apple' bgColor='#e3e3e3' fgColor='#363636' imgsrc={apple} />
        </>
    )
}

export default SocialSignButton