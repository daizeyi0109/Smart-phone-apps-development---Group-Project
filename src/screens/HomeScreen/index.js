import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Auth } from 'aws-amplify';

const HomeScreen = () => {
    const signOut = () => {
        Auth.signOut();
    };

    return (
        <View style={{ flex: 1 }}>
            <Text styles={{ fontSize: 24, alignSelf: 'center' }}>
                Home,Sweet Home</Text>
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

export default HomeScreen;
