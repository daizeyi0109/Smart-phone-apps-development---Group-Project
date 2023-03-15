import React from 'react';
import { View, StyleSheet, FlatList, Text } from 'react-native';
import feed from '../../../../assets/data/feed';
import Post from '../../../components/Post/Post';
// import Post from '../../components/Post/Post';
const render_items = feed;
const SearchResultScreen = (props) => {


    const renderItem = ({ item }) => (
        <Post post={item} />
    );

    return (
        <View>
            <FlatList
                data={render_items}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />

            {/* <Post post={item} /> */}
        </View>
    );
}

const styles = StyleSheet.create({})

export default SearchResultScreen;
