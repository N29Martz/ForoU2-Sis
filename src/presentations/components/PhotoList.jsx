import React from 'react';
import {FlatList, Image, View} from 'react-native';
import { styles } from '../theme/theme';

export const PhotoList = ({photos}) => {
  return (
    <FlatList
      data={photos}
      keyExtractor={item => item.id.toString()}
      numColumns={2}
      columnWrapperStyle={{ justifyContent: 'space-between' }}
      renderItem={({item}) => (
        <View style={styles.photoContainer}>
          <Image source={{uri: item.url}} style={styles.photo} />
        </View>
      )}
    />
  );
};

