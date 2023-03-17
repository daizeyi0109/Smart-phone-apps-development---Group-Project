import React, { useState, useEffect, useRef } from 'react';
import { View, StyleSheet, Text, FlatList, useWindowDimensions, Alert } from 'react-native';
// Map
import MapView from 'react-native-maps';
import { PROVIDER_GOOGLE } from 'react-native-maps';
import { Marker } from 'react-native-maps'
// component
import MapMarket from '../../../components/MapMarker/MapMarket'
import PostCarouselItem from '../../../components/PostCarouselItem/PostCarouselItem';
// AWS
import { API, graphqlOperation } from 'aws-amplify';
import * as queries from '../../../graphql/queries';
// Data
// import place from '../../../../assets/data/feed'

const SearchResultMap = () => {
    const [selectedPlace, setSelectedPlace] = useState()
    const [post, setPost] = useState([]);

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
        const fetchPost = async () => {
            try {
                const postResults = await API.graphql(
                    graphqlOperation(queries.listPosts)
                )
                console.log('postResults')
                console.log(postResults)
                setPost(postResults.data.listPosts.items)
            } catch (error) {
                console.error(error);
            }
        }
        fetchPost()
    }, [])


    useEffect(() => {
        if (!selectedPlace || !flatlist) {
            return
        }
        const index = post.findIndex(place => place.id === selectedPlace)
        flatlist.current.scrollToIndex({ index })
        // Alert.alert(selectedPlace)
        // console.log(flatlist)

        const selectedPlaceItem = post[index];
        const region = {
            latitude: selectedPlaceItem.latitude,
            longitude: selectedPlaceItem.longitude,
            latitudeDelta: 0.0035,
            longitudeDelta: 0.0035,
        }
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
                    latitude: 22.283639171322562,
                    longitude: 114.13658654870478,
                    latitudeDelta: 0.045,
                    longitudeDelta: 0.045,
                }} >


                {/* MapMarket */}
                {post.map((item, index) => {
                    return (
                        <MapMarket
                            coordinate={{ latitude: item.latitude, longitude: item.longitude }}
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
                    data={post}
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
