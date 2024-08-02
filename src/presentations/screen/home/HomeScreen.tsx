import React, {useEffect, useState} from 'react';
import {View, Button, StyleSheet} from 'react-native';
import {PhotoList} from '../../components/PhotoList';
import {getPhotos} from '../../services/api';

interface Props {
  navigation: any;
}

export const HomeScreen = ({navigation}: Props) => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    fetchPhotos();
  }, []);

  const fetchPhotos = async () => {
    try {
      const fetchedPhotos = await getPhotos();
      setPhotos(fetchedPhotos);
    } catch (error) {
      console.error('Error al obtener las fotos:', error);
    }
  };

  const handleNewPhoto = async () => {
    await fetchPhotos();
  };

  return (
    <View style={styles.container}>
      <Button
        title="Tomar foto"
        onPress={() =>
          navigation.navigate('Camera', {onNewPhoto: handleNewPhoto})
        }
      />
      <PhotoList photos={photos} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
});
