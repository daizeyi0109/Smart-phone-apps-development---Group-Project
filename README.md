# Easy Rent App

Easy Rent App is a mobile application designed to help renters easily find suitable housing information. Built using React Native and AWS Amplify, this application leverages GraphQL API and Google Maps Platform to provide users with an efficient and user-friendly experience.

And this is the HKU CompSc COMP7506 Smart phone apps development  - Group Project

## Usage

Version 1.0

## Requirements

- Node.js (v12 or higher)
- Expo CLI
- AWS Amplify CLI

## Installation 

1. Clone the repository: `git clone  https://github.com/daizeyi0109/Smart-phone-apps-development---Group-Project.git`
2. Install dependencies: `npm install` 
3. Set up Amplify: `amplify init` 
4. Add the required Amplify services: `amplify add auth`, `amplify add api`, and `amplify add storage` 
5. Push the Amplify services to the cloud: `amplify push` 
6. Start the application: `expo start`

## Configuration

Before running the application, you will need to configure the Google Maps API key in the `app.json` file. You can obtain a Google Maps API key by following the instructions on the Google Maps Platform website.

```json
{
  "name": "awesomeproject",
  "version": "1.0.0",
  "main": "node_modules/expo/AppEntry.js",
  "scripts": {
    "start": "expo start",
    "android": "expo start --android",
    "ios": "expo start --ios",
    "web": "expo start --web"
  },
  "dependencies": {
    "@expo-google-fonts/inter": "^0.2.3",
    "@react-native-async-storage/async-storage": "^1.17.11",
    "@react-native-community/netinfo": "9.3.5",
    "@react-native-masked-view/masked-view": "0.2.8",
    "@react-navigation/bottom-tabs": "^6.5.7",
    "@react-navigation/material-top-tabs": "^6.6.2",
    "@react-navigation/native": "^6.1.6",
    "@react-navigation/native-stack": "^6.9.12",
    "@react-navigation/stack": "^6.3.16",
    "amazon-cognito-identity-js": "^6.1.2",
    "aws-amplify": "^5.0.17",
    "aws-amplify-react-native": "^7.0.2",
    "expo": "~47.0.12",
    "expo-font": "~11.0.1",
    "expo-status-bar": "~1.4.2",
    "react": "18.1.0",
    "react-hook-form": "^7.43.5",
    "react-native": "0.70.8",
    "react-native-gesture-handler": "~2.8.0",
    "react-native-google-places-autocomplete": "^2.5.1",
    "react-native-maps": "1.3.2",
    "react-native-pager-view": "6.0.1",
    "react-native-paper": "^5.6.0",
    "react-native-reanimated": "~2.12.0",
    "react-native-reanimated-carousel": "^3.3.0",
    "react-native-safe-area-context": "4.4.1",
    "react-native-screens": "~3.18.0",
    "react-native-snap-carousel": "^3.9.1",
    "react-native-swiper": "^1.6.0-rc.3",
    "react-native-tab-view": "^3.5.1",
    "react-native-waterfall-flow": "^1.1.4"
  },
```



Follow the guidelines to start developing your application. You may find the following resources handy:

- [React Navite ](https://reactnative.dev/)
- [AWS Amplify Doc](https://docs.amplify.aws/cli/start/install/)
- [Google Map Platform ](https://mapsplatform.google.com/)
- [Expo Doc](https://docs.expo.dev/)




## Usage

Once the application is running, you can use it to search for rental properties, view property details, and make rental payments. The application supports user authentication through social media accounts or email addresses.

## License

TThis software is for learning and communication only.

## Contact Us

If you have any questions or feedback, please send an email to daizy109@connect.hku.hk
