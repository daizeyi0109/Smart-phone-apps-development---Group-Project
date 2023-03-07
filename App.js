import * as React from 'react';
import { Button, View, Text, SafeAreaView, StyleSheet } from 'react-native';
import Navigation from './src/navigation';
import { Amplify } from 'aws-amplify'

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
    </SafeAreaView>

  );
}

const styles = StyleSheet.create({

  root: {
    flex: 1,
    backgroundColor: '#F9FbFC'
  }
});


export default App;
