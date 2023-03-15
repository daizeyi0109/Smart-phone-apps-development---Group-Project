import React, { useState, useEffect, useRef } from 'react';
import { View, StyleSheet, Text, FlatList, useWindowDimensions, Alert } from 'react-native';
// Map
import MapView from 'react-native-maps';
import { PROVIDER_GOOGLE } from 'react-native-maps';
import { Marker } from 'react-native-maps'
// component
import MapMarket from '../../../components/MapMarker/MapMarket'
import PostCarouselItem from '../../../components/PostCarouselItem/PostCarouselItem';

// Data
import place from '../../../../assets/data/feed'

const SearchResultMap = () => {
    const [selectedPlace, setSelectedPlace] = useState()

    const width = useWindowDimensions().width

    // new hook useRef()
    const flatlist = useRef()
    const map = useRef();

    const viewConfig = useRef({ itemVisiblePercentThreshold: 70 })
    const onViewChanged = useRef(({ viewableItems }) => {
        if (viewableItems.length > 0) {
            const selectedPlaceItem = viewableItems[0].item;
            setSelectedPlace(selectedPlaceItem.id)
        }
    })

    useEffect(() => {
        if (!selectedPlace || !flatlist) {
            return
        }
        const index = place.findIndex(place => place.id === selectedPlace)
        flatlist.current.scrollToIndex({ index })
        // Alert.alert(selectedPlace)
        // console.log(flatlist)

        const selectedPlaceItem = place[index];
        const region = {
            latitude: selectedPlaceItem.coordinate.latitude,
            longitude: selectedPlaceItem.coordinate.longitude,
            latitudeDelta: 0.8,
            longitudeDelta: 0.8,
        }
        // console.log(selectedPlaceItem)
        // console.log(selectedPlaceItem.latitude)
        // console.log(selectedPlaceItem.longitude)
        // console.log(region)
        map.current.animateToRegion(region);
    }, [selectedPlace])



    const renderItem = ({ item }) => (
        <PostCarouselItem post={item} />
    );

    return (
        <View>
            <MapView
                ref={map}
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
                            isSelected={selectedPlace === item.id}
                            onPress={() => setSelectedPlace(item.id)}
                        />
                    );

                })}

                {/* PostCarouselItem */}
            </MapView>
            <View style={{ position: 'absolute', bottom: 10 }}>
                {/* <PostCarouselItem post={place[0]} /> */}
                <FlatList
                    ref={flatlist}
                    data={place}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    // 滑动设置
                    snapToInterval={width - 60}
                    snapToAlignment={"center"}
                    decelerationRate={"fast"}
                    // viewabilityConfig={{ itemVisiblePercentThreshold: '70' }}
                    // onViewableItemsChanged={(viewableitems) => {
                    //     console.log(viewableitems)
                    // }}
                    // Flastlist下滑和lable对称
                    viewabilityConfig={viewConfig.current}
                    onViewableItemsChanged={onViewChanged.current}

                />
            </View>
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
