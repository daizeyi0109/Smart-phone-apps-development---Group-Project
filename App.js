import * as React from 'react';
import { Button, View, Text, SafeAreaView, StyleSheet } from 'react-native';
import Navigation from './src/navigation/Router';

import { Amplify } from 'aws-amplify'

// import SearchResultScreen from './src/screens/SearchResultScreen';
// import DestinationSearchScreen from './src/screens/Home/HomeScreen/DestinationSearchScreen';
// import GuestFilterScreen from './src/screens/Home/GuestFilterScreen';
import SearchResultMap from './src/screens/Home/SearchResultMap/SearchResultMap';
import PostScreen from './src/screens/Home/PostScreen/PostScreen';

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
      {/* <SearchResultMap /> */}
      {/* <DestinationSearchScreen /> */}
      {/* <GuestFilterScreen /> */}
      {/* <PostScreen /> */}
    </SafeAreaView>

  );
}

const styles = StyleSheet.create({

  root: {
    flex: 1,
    backgroundColor: '#F9FbFC',

  }
});


export default App;
