import React from 'react';
import {FlatList, Text} from 'react-native';

const Posts = ({posts, loading}) => {
  if (loading) {
    return <Text>Loading...</Text>;
  }

  return (
    <FlatList
      data={posts}
      keyExtractor={item => item.id}
      renderItem={({item}) => <Text>{item.title}</Text>}
    />
  );
};

export default Posts;
