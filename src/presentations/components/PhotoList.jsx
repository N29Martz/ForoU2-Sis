import React, { useState } from 'react';
import {FlatList, Image, View, TouchableOpacity} from 'react-native';
import { styles } from '../theme/theme';
import { ImageModalComponent } from './ImageModalComponent';

export const PhotoList = ({photos} ) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  const handleImagePress = (imageUri) => {
    setSelectedImage(imageUri);
    setModalVisible(true);
  };

  return (
    <>
     <FlatList
        data={photos}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        columnWrapperStyle={{ justifyContent: 'pace-between' }}
        renderItem={({ item }) => (
          <View style={styles.photoContainer}>
            <TouchableOpacity onPress={() => handleImagePress(item.url)}>
              <Image
                source={{ uri: item.url }}
                style={styles.photo}
              />
            </TouchableOpacity>
          </View>
        )}
      />
    <ImageModalComponent
        visible={modalVisible}
        imageUri={selectedImage}
        onClose={() => setModalVisible(false)}
      />
    </>
   
  );
};