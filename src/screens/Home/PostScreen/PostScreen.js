import React from "react";
import { View, Text } from "react-native";
// import DetailedPost from '../../components/DetailedPost';
import DetailedPost from "../../../components/DetailedPost/DetailedPost";
import { useRoute } from '@react-navigation/native';


import places from '../../../../assets/data/feed'


const PostScreen = (props) => {
    const route = useRoute();


    console.log(route.params.postID)

    const post_0 = places[route.params.postID]
    // const post = places.find(places => places.id === route.params.postId);
    // console.log(places.find(place => place.id === route.params.postId))

    return (
        <View style={{ backgroundColor: 'white' }}>
            <DetailedPost post={post_0} />
        </View>
    );
};

export default PostScreen;