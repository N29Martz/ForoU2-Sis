import React from 'react';
import {FlatList, Image, StyleSheet, View} from 'react-native';

export const PhotoList = ({photos}) => {
  return (
    <FlatList
      data={photos}
      keyExtractor={item => item.id.toString()}
      renderItem={({item}) => (
        <View style={styles.photoContainer}>
          <Image source={{uri: item.url}} style={styles.photo} />
        </View>
      )}
    />
  );
};

const styles = StyleSheet.create({
  photoContainer: {
    margin: 5,
  },
  photo: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },
});
