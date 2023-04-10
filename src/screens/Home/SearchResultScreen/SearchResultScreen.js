import React, { useEffect, useState } from 'react';
import { View, StyleSheet, FlatList, Text } from 'react-native';
import feed from '../../../../assets/data/feed';
import Post from '../../../components/Post/Post';
import { API, graphqlOperation } from 'aws-amplify';
import * as queries from '../../../graphql/queries';
// import Post from '../../components/Post/Post';
import { useRoute } from '@react-navigation/native';
const render_items = feed;
const SearchResultScreen = (props) => {
    const [post, setPost] = useState();

    const route = useRoute()
    // console.log(route.params)

    const { guests, viewport } = props


    useEffect(() => {
        const fetchPost = async () => {
            try {
                const postResults = await API.graphql(
                    graphqlOperation(queries.listPosts, {
                        filter: {
                            and: {
                                maxGuests: {
                                    ge: guests
                                },
                                latitude: {
                                    between: [
                                        viewport.southwest.lat,
                                        viewport.northeast.lat
                                    ],
                                },
                                longitude: {
                                    between: [
                                        viewport.southwest.lng,
                                        viewport.northeast.lng
                                    ],
                                }
                            }

                        }
                    })
                )
                // console.log('postResults')
                // console.log(postResults)
                setPost(postResults.data.listPosts.items)
            } catch (error) {
                console.error(error);
            }
        }
        fetchPost()
    })

    const renderItem = ({ item }) => (
        <Post post={item} />
    );

    return (
        <View>
            <FlatList
                data={post}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />

            {/* <Post post={item} /> */}
        </View>
    );
}

const styles = StyleSheet.create({})

export default SearchResultScreen;
