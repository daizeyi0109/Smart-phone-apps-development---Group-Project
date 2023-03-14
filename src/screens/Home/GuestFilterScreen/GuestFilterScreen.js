import React, { useState } from 'react';
import { View, StyleSheet, Text, Pressable } from 'react-native';
// Icon
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const GuestFilterScreen = () => {

    const [adults, setAdults] = useState(0);
    const [children, setChildren] = useState(0);
    const [infants, setInfants] = useState(0);



    return (
        <View style={{ height: '100%' }}>
            {/* Row 1 - Adult */}
            <View style={styles.row}>
                {/* Title */}
                <View>
                    <View style={{ marginBottom: 10, flexDirection: 'row' }}>
                        <MaterialCommunityIcons name="human-non-binary" size={30} color="black" />
                        <Text style={{ fontWeight: 'bold', fontSize: 25, fontFamily: 'Arial Rounded MT Bold' }}>Adults</Text>
                    </View>

                    <Text style={{ color: '#8d8d8d', marginLeft: 5, fontFamily: 'Arial Rounded MT Bold' }}>(Age 13 or above)</Text>
                </View>

                {/* Button */}
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Pressable
                        style={styles.button}
                        onPress={() => setAdults(Math.max(0, adults - 1))}>
                        <AntDesign name="minuscircleo" size={28} color="#474747" />
                    </Pressable>

                    <Text style={{ marginHorizontal: 20, fontSize: 18, fontFamily: 'Arial Rounded MT Bold' }}>{adults}</Text>

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
                        <Text style={{ fontWeight: 'bold', fontSize: 25, fontFamily: 'Arial Rounded MT Bold' }}>Children</Text>
                    </View>

                    <Text style={{ color: '#8d8d8d', marginLeft: 5, fontFamily: 'Arial Rounded MT Bold' }}>(Ages 2-13)</Text>
                </View>

                {/* Button */}
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Pressable
                        style={styles.button}
                        onPress={() => setChildren(Math.max(0, children - 1))}>
                        <AntDesign name="minuscircleo" size={28} color="#474747" />
                    </Pressable>

                    <Text style={{ marginHorizontal: 20, fontSize: 18, fontFamily: 'Arial Rounded MT Bold' }}>{children}</Text>

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
                        <Text style={{ fontWeight: 'bold', fontSize: 25, fontFamily: 'Arial Rounded MT Bold' }}>Infants</Text>
                    </View>

                    <Text style={{ color: '#8d8d8d', marginLeft: 5, fontFamily: 'Arial Rounded MT Bold' }}>(Ages 2-13)</Text>
                </View>

                {/* Button */}
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Pressable
                        style={styles.button}
                        onPress={() => setInfants(Math.max(0, infants - 1))}>
                        <AntDesign name="minuscircleo" size={28} color="#474747" />
                    </Pressable>

                    <Text style={{ marginHorizontal: 20, fontSize: 18, fontFamily: 'Arial Rounded MT Bold' }}>{infants}</Text>

                    <Pressable
                        style={styles.button}
                        onPress={() => setInfants(infants + 1)}>
                        <AntDesign name="pluscircleo" size={28} color="#474747" />
                    </Pressable>
                </View>

            </View>


        </View>
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
