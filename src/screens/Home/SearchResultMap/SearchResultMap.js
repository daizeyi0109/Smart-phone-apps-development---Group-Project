import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import MapView from 'react-native-maps';
import { PROVIDER_GOOGLE } from 'react-native-maps';
import { Marker } from 'react-native-maps'
import MapMarket from '../../../components/MapMarker/MapMarket'

// Data
import place from '../../../../assets/data/feed'

const SearchResultMap = () => {
    const [selectedPlace, setSelectedPlace] = useState()
    return (
        <View>
            <MapView
                style={styles.map}
                provider={PROVIDER_GOOGLE}
                initialRegion={{
                    latitude: 28.3279822,
                    longitude: -16.5124847,
                    latitudeDelta: 0.8,
                    longitudeDelta: 0.8,
                }} >


                {/* MapMarket */}
                {place.map((item, index) => {
                    return (
                        <MapMarket
                            coordinate={item.coordinate}
                            price={item.newPrice}
                            isSelected={item.id === selectedPlace}
                            onPress={() => setSelectedPlace(item.id)}
                        />
                    );

                })}

                {/* {place.map(place => (
                    <MapMarket
                        coordinate={{ latitude: place.latitude, longitude: place.longitude }}
                        price={place.newPrice}
                    // isSelected={place.id === selectedPlaceId}
                    // onPress={() => setSelectedPlaceId(place.id)}
                    />)
                )} */}

            </MapView>
        </View >
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    map: {
        width: '100%',
        height: '100%',
    },
    market: {
        backgroundColor: 'white',
        padding: 5,
        borderRadius: 20,
        borderColor: 'gray',
        borderWidth: 1

    },
    marketText: {
        fontFamily: 'Arial Rounded MT Bold',
        fontWeight: 'bold'

    }
})

export default SearchResultMap;
