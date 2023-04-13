
import React, { useState, useEffect } from "react";
import {
    Text,
    View,
    Alert,
    TextInput,
    StyleSheet,
    Image,
    TouchableOpacity,
} from "react-native";
import { Button, FAB, Card, Portal, Modal, Provider } from 'react-native-paper';
import { Auth } from 'aws-amplify';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
// import { Auth, Hub } from 'aws-amplify';

// import imgurl from '../../'




const ProfilePage = (props) => {
    const [image, setImage] = useState('https://github.com/daizeyi0109/SmartApp_hku/blob/Content_development/assets/images/default_robot.jpg?raw=true');
    const navigation = useNavigation()

    const [user, setUser] = useState(undefined);

    const checkUser = async () => {
        try {
            const authUser = await Auth.currentAuthenticatedUser({ bypassCache: true });
            console.log(authUser);
            console.log('attributes:', authUser.attributes);
            setUser(authUser.username)
            console.log('Test user profile loaded');
        } catch (error) {
            setUser(null)
        }

    }

    useEffect(() => {
        checkUser();

    }, []);



    // Sign Out
    const signOut = () => {
        Auth.signOut();
        navigation.navigate('SignIn')
    };

    // Alert_logout_tips
    const alert_logout = () => {
        Alert.alert(
            'Confirm',
            'Are you sure you want to exit',
            [
                { text: 'No', style: 'cancel' },
                { text: 'Yes', onPress: () => signOut() }
            ],
        )
    }
    // Page layout
    return (
        <Provider>
            <Portal>

                <View
                    style={{
                        position: "absolute",
                        width: 343,
                        left: "50%",
                        marginLeft: -172,
                        zIndex: 0
                    }}
                >
                    {/* HeadPortrait */}
                    <View style={styles.title}>
                        {/* <TouchableOpacity > */}
                        <Image source={{ uri: image }} style={styles.headPortrait} />
                        {/* </TouchableOpacity> */}

                        {/* Username */}
                        <Text style={styles.accountname}>{user}</Text>
                        {/* Usertype */}
                        <Text style={[styles.accountname, { fontSize: 15 }]}>
                            Your Profile
                        </Text>

                    </View>



                    {/* Edit */}
                    <Card style={styles.buttonlist}>
                        <Button icon="account-edit" mode="contained"
                            style={[styles.button, { marginTop: 0 }]}
                            contentStyle={styles.buttoncontent}
                            color="rgb(255,255,255)"
                            // onPress={() => props.navigation.navigate('Editprofile', { account_info: account_info })}
                            onPress={() => navigation.navigate('EditProfile')}
                        >
                            Edit
                        </Button>

                    </Card>


                    <Card style={styles.buttonlist}>
                        <Button icon="account-edit" mode="contained"
                            style={[styles.button, { marginTop: 0 }]}
                            contentStyle={styles.buttoncontent}
                            color="rgb(255,255,255)"
                            // onPress={() => props.navigation.navigate('Editprofile', { account_info: account_info })}
                            onPress={() => navigation.navigate('EditPassword')}
                        >
                            Change Password
                        </Button>

                    </Card>
                    {/* Focused & Search*/}



                    <Button icon="history" mode="contained"
                        style={styles.button}
                        contentStyle={styles.buttoncontent}
                        color="rgb(255,255,255)"
                        disabled={true}
                    // onPress={() => props.navigation.navigate('History')}
                    >
                        Language
                    </Button>


                    {/* log out */}

                    <Card style={styles.buttonlist}>
                        <Button icon="logout" mode="contained"
                            style={[styles.button, { marginTop: 0 }]}
                            contentStyle={styles.buttoncontent}
                            color="rgb(0, 0, 0)"
                            onPress={() => alert_logout()}>
                            Logout
                        </Button>

                    </Card>


                    {/* <View
                        style={styles.fab}
                        // small={true}
                        // size={5}
                        // icon='plus'
                        color='rgb(255,255,255)'
                        onPress={() => console.log("Pressed")}
                    >
                        <AntDesign name="plus" size={15} color="white" />
                    </View> */}
                </View>
            </Portal>
        </Provider>

    );
}

const styles = StyleSheet.create({
    title: {
        marginTop: 150,
        flex: 1,
        justifyContent: "center",
        alignItems: "center",

    },
    headPortrait: {
        width: 128,
        height: 128,
        borderRadius: 128,
        borderColor: 'red',
        backgroundColor: "red"
    },
    accountname: {
        fontSize: 30,
        fontFamily: "Futura",
        shadowColor: "rgba(0,0,0,0.5)",
        shadowOffset: { width: 4, height: 4 },
        shadowOpacity: 0.67,
        marginTop: 15,
    },
    buttonlist: {
        // backgroundColor: "rgb(255,255,255)",
        flex: 1,
        marginTop: 15,
        backgroundColor: "transparent",

    },
    button: {
        marginTop: 15,
    },

    buttoncontent: {
        height: 50,
        justifyContent: "flex-start"
    },
    fab: {
        position: 'absolute',
        margin: 14,
        right: 100,
        bottom: 270,
        width: 30,
        height: 30,
        borderRadius: 13,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgb(251,78,60)'

    }

});


export default ProfilePage;