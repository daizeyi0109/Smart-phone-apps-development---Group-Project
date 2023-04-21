import React, { useState } from 'react';
import { View, StyleSheet, Text, Pressable } from 'react-native';
// Icon
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';

const GuestFilterScreen = () => {

    const [adults, setAdults] = useState(0);
    const [children, setChildren] = useState(0);
    const [infants, setInfants] = useState(0);

    const navigation = useNavigation();
    const route = useRoute();

    return (
        <View style={{ height: '100%' }}>
            {/* Row 1 - Adult */}
            <View style={styles.row}>
                {/* Title */}
                <View>
                    <View style={{ marginBottom: 10, flexDirection: 'row' }}>
                        <MaterialCommunityIcons name="human-non-binary" size={30} color="black" />
                        <Text style={{ fontWeight: 'bold', fontSize: 25 }}>Adults</Text>
                    </View>

                    <Text style={{ color: '#8d8d8d', marginLeft: 5 }}>(Age 13 or above)</Text>
                </View>

                {/* Button */}
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Pressable
                        style={styles.button}
                        onPress={() => setAdults(Math.max(0, adults - 1))}>
                        <AntDesign name="minuscircleo" size={28} color="#474747" />
                    </Pressable>

                    <Text style={{ marginHorizontal: 20, fontSize: 18 }}>{adults}</Text>

                    <Pressable
                        style={styles.button}
                        onPress={() => setAdults(adults + 1)}>
                        <AntDesign name="pluscircleo" size={28} color="#474747" />
                    </Pressable>
                </View>

            </View>

            {/* Row 2 - Children */}
            <View style={styles.row}>
                {/* Title */}
                <View>
                    <View style={{ marginBottom: 10, flexDirection: 'row' }}>
                        <MaterialCommunityIcons name="human-child" size={30} color="black" />
                        <Text style={{ fontWeight: 'bold', fontSize: 25 }}>Children</Text>
                    </View>

                    <Text style={{ color: '#8d8d8d', marginLeft: 5 }}>(Ages 2-13)</Text>
                </View>

                {/* Button */}
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Pressable
                        style={styles.button}
                        onPress={() => setChildren(Math.max(0, children - 1))}>
                        <AntDesign name="minuscircleo" size={28} color="#474747" />
                    </Pressable>

                    <Text style={{ marginHorizontal: 20, fontSize: 18 }}>{children}</Text>

                    <Pressable
                        style={styles.button}
                        onPress={() => setChildren(children + 1)}>
                        <AntDesign name="pluscircleo" size={28} color="#474747" />
                    </Pressable>
                </View>

            </View>

            {/* Row 3 - Infants */}
            <View style={styles.row}>
                {/* Title */}
                <View>
                    <View style={{ marginBottom: 10, flexDirection: 'row' }}>
                        <MaterialCommunityIcons name="human-baby-changing-table" size={30} color="black" />
                        <Text style={{ fontWeight: 'bold', fontSize: 25 }}>Infants</Text>
                    </View>

                    <Text style={{ color: '#8d8d8d', marginLeft: 5 }}>(Ages 2-13)</Text>
                </View>

                {/* Button */}
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Pressable
                        style={styles.button}
                        onPress={() => setInfants(Math.max(0, infants - 1))}>
                        <AntDesign name="minuscircleo" size={28} color="#474747" />
                    </Pressable>

                    <Text style={{ marginHorizontal: 20, fontSize: 18 }}>{infants}</Text>

                    <Pressable
                        style={styles.button}
                        onPress={() => setInfants(infants + 1)}>
                        <AntDesign name="pluscircleo" size={28} color="#474747" />
                    </Pressable>
                </View>


            </View>

            <Pressable
                onPress={() =>
                    // navigation.navigate('Home', {
                    //     screen: 'Explore',
                    //     params: {
                    //         screen: 'SearchResults',
                    //         params: {
                    //             guests: adults + children,
                    //             viewport: route.params.viewport,
                    //         }
                    //     },
                    // })

                    // }),
                    navigation.navigate('Explore', {
                        screen: 'SearchResults',
                        params: {
                            screen: 'List',
                            params: {
                                guests: adults + children,
                                viewport: route.params.viewport
                            }

                        }

                    })


                }
                style={{
                    marginBottom: 20,
                    backgroundColor: 'rgba(78,0,233,0.7)',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: 50,
                    marginHorizontal: 20,
                    borderRadius: 10,
                }}>
                <Text style={{ fontSize: 20, color: 'white', fontWeight: 'bold' }}>
                    Search
                </Text>
            </Pressable>

        </View >
    );
}

const styles = StyleSheet.create({
    button: {
        width: 30,
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 20,
        marginHorizontal: 25,
        borderBottomWidth: 2,
        borderColor: 'lightgrey',
    }
});


export default GuestFilterScreen;
