import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
// import DetailedPost from '../../components/DetailedPost';
import DetailedPost from "../../../components/DetailedPost/DetailedPost";
import { useRoute } from '@react-navigation/native';
import { API, graphqlOperation } from 'aws-amplify';
import * as queries from '../../../graphql/queries';


import places from '../../../../assets/data/feed'


const PostScreen = (props) => {
    const route = useRoute();

    console.log("PostScreen")
    console.log(route.params.postID)


    const post_id = route.params.postID

    const [post, setPost] = useState();


    // useEffect(() => {
    //     const fetchPost = async () => {
    //         try {
    //             const postResults = await API.graphql(
    //                 graphqlOperation(queries.listPosts, {
    //                     filter: {
    //                         id: {
    //                             eq: post_id
    //                         }
    //                     }
    //                 })
    //             )
    //             // console.log('postResults_test_teset')

    //             console.log(postResults)
    //             setPost(postResults.data.listPosts.items)
    //             console.log(post)
    //         } catch (error) {
    //             console.error(error);
    //         }
    //     }
    //     fetchPost()
    // })

    return (
        <View style={{ backgroundColor: 'white' }}>
            <DetailedPost postID={post_id} />
        </View>
    );
};

export default PostScreen;