import React, { useEffect, useState } from 'react';
import { View, StyleSheet, ActivityIndicator, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';


import SignInScreen from '../screens/Authentication/SignInScreen/SignInScreen';
import SignUpScreen from '../screens/Authentication/SignUpScreen/SignUpScreen';
import ConfirmEmailScreen from '../screens/Authentication/ConfirmEmailScreen';
import ForgotPasswordScreen from '../screens/Authentication/ForgotPasswordScreen'
import NewPasswordScreen from '../screens/Authentication/NewPasswordScreen';
import HomeScreen from '../screens/Home/HomeScreen/HomeScreen';
import DestinationSearchScreen from '../screens/Home/DestinationSearchScreen/DestinationSearchScreen';
import GuestFilterScreen from '../screens/Home/GuestFilterScreen/GuestFilterScreen';
import SearchResultScreen from '../screens/Home/SearchResultScreen/SearchResultScreen'

import homeTab from './HomeTab';

import { Auth, Hub } from 'aws-amplify';



const Navigation = () => {

    const Stack = createNativeStackNavigator();

    const [user, setUser] = useState(undefined);

    const checkUser = async () => {
        try {
            const authUser = await Auth.currentAuthenticatedUser({ bypassCache: true });
            setUser(authUser)
        } catch (error) {
            setUser(null)
        }

    }
    useEffect(() => {
        checkUser();
    }, []);

    useEffect(() => {
        // const listener = (data) => {
        //     console.log(data);
        // }
        const listener = (data) => {
            if (data.payload.event === 'signIn' || data.payload.event === 'signOut') {
                checkUser();
            }
        };

        Hub.listen('auth', listener);
        return () => Hub.listen('auth', listener)
    }, [])

    if (user === undefined) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <ActivityIndicator />
            </View>
        )
    }

    return (
        <NavigationContainer>
            {/* <Stack.Navigator screenOptions={{ headerShown: false }}> */}
            <Stack.Navigator>

                <Stack.Screen name="SignIn" component={SignInScreen} options={{ headerShown: false }} />
                <Stack.Screen name="SignUp" component={SignUpScreen} options={{ headerShown: false }} />
                <Stack.Screen name="ConfirmEmail" component={ConfirmEmailScreen} options={{ headerShown: false }} />
                <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} options={{ headerShown: false }} />
                <Stack.Screen name="NewPassword" component={NewPasswordScreen} options={{ headerShown: false }} />
                <Stack.Screen name='HomeTab' component={homeTab}
                    options={{
                        headerTransparent: true,
                        headerTitle: "",
                        headerBackTitle: "",
                        gestureEnabled: false,
                        headerShown: false
                    }} />
                {/* <Stack.Screen name="Home" component={HomeScreen} /> */}
                {/* <Stack.Screen name="Search" component={DestinationSearchScreen} /> */}
                <Stack.Screen name="DestinationSearch" component={DestinationSearchScreen}
                    options={{
                        headerTransparent: false,
                        headerTitle: "",
                        headerBackTitle: ""
                    }} />
                <Stack.Screen name="GuestFilter" component={GuestFilterScreen}
                    options={() => ({
                        headerTransparent: false,
                        headerTitle: "",
                        headerBackTitle: "",
                    })}
                />
                {/* <Stack.Screen name="SearchResult" component={SearchResultScreen}
                    options={() => ({
                        headerTransparent: false,
                        headerTitle: "",
                        headerBackTitle: "",
                    })}
                /> */}





            </Stack.Navigator>
        </NavigationContainer>


    );
}

const styles = StyleSheet.create({})

export default Navigation;



// user ? (<Stack.Screen name="Home" component={HomeScreen} />)
//     : (
//         <>
//             <Stack.Screen name="SignIn" component={SignInScreen} options={{ headerShown: false }} />
//             <Stack.Screen name="SignUp" component={SignUpScreen} options={{ headerShown: false }} />
//             <Stack.Screen name="ConfirmEmail" component={ConfirmEmailScreen} options={{ headerShown: false }} />
//             <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
//             <Stack.Screen name="NewPassword" component={NewPasswordScreen} />
//             <Stack.Screen name="Home" component={HomeScreen} />
//             {/* <Stack.Screen name="Search" component={DestinationSearchScreen} /> */}
//             {/* <Stack.Screen name="DestinationSearch" component={DestinationSearchScreen} /> */}
//         </>
//     )