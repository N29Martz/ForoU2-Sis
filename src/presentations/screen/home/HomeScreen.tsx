import React, {useEffect, useState} from 'react';
import {View, Button, StyleSheet} from 'react-native';
import {PhotoList} from '../../components/PhotoList';
import {getPhotos, uploadPhoto} from '../../services/api';
import {usePhotoContext} from '../../../context/PhotoContext';

interface Props {
  navigation: any;
}
interface Photo {
  uri: string;
  width: number;
  height: number;
  type?: string;
  fileName?: string;
}

export const HomeScreen = ({navigation}: Props) => {
  const {photos, setPhotos} = usePhotoContext();
  const [isCameraOpen, setIsCameraOpen] = useState(false);

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

  const handleCapture = async (photo: Photo) => {
    try {
      await uploadPhoto(photo);
      await fetchPhotos();
      setIsCameraOpen(false);
    } catch (error) {
      console.error('Error uploading photo:', error);
    }
  };

  const navigateToCamera = () => {
    navigation.navigate('Camera');
  };

  return (
    <View style={styles.container}>
      <Button title="Tomar foto" onPress={navigateToCamera} />
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
