import React from 'react';
import {View, FlatList, Text, StyleSheet, TouchableOpacity} from 'react-native';

const Pagination = ({postsPerPage, totalPosts, paginate}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={pageNumbers}
        horizontal={true}
        keyExtractor={item => item}
        renderItem={({item}) => {
          return (
            <TouchableOpacity
              style={styles.border}
              onPress={() => paginate(item)}>
              <Text style={styles.txt}>{item}</Text>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

export default Pagination;

const styles = StyleSheet.create({
  container: {
    marginVertical: 60,
  },
  border: {
    backgroundColor: 'lightgreen',
    borderWidth: 1,
    paddingTop: 5,
    paddingHorizontal: 20,
    marginHorizontal: 6,
  },
  txt: {
    fontSize: 30,
  },
});
