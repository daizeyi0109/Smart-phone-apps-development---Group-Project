import * as React from 'react';
import { Button, View, Text, SafeAreaView, StyleSheet } from 'react-native';
import Navigation from './src/navigation/Router';

import { Amplify } from 'aws-amplify'

// import SearchResultScreen from './src/screens/SearchResultScreen';
// import DestinationSearchScreen from './src/screens/Home/HomeScreen/DestinationSearchScreen';
// import GuestFilterScreen from './src/screens/Home/GuestFilterScreen';

import awsconfig from './src/aws-exports'

Amplify.configure(awsconfig)

function App() {
  return (
    <SafeAreaView style={styles.root}>
      {/* <ConfirmEmailScreen /> */}
      {/* <SignInScreen /> */}
      {/* <SignUpScreen /> */}
      {/* <ForgotPasswordScreen /> */}
      {/* <NewPasswordScreen /> */}
      <Navigation />
      {/* <DestinationSearchScreen /> */}
      {/* <GuestFilterScreen /> */}
    </SafeAreaView>

  );
}

const styles = StyleSheet.create({

  root: {
    flex: 1,
    backgroundColor: '#F9FbFC',
    fontFamily: 'Arial Rounded MT Bold'
  }
});


export default App;
