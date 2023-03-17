import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Auth } from 'aws-amplify';
import { useNavigation } from '@react-navigation/native';
const ProfileScreen = () => {
    const navigation = useNavigation()
    const signOut = () => {
        Auth.signOut();
        navigation.navigate('SignIn')
    };

    return (
        <View>
            <Text
                onPress={signOut}
                style={{
                    width: '100%',
                    textAlign: 'center',
                    color: 'red',
                    marginTop: 'auto',
                    marginVertical: 20,
                    fontSize: 20,
                }}>
                Sign out
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({})

export default ProfileScreen;
