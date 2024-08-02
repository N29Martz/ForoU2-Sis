import React from 'react';
import {View} from 'react-native';
import {CameraComponent} from '../components/CameraComponent';
import {getPhotos, uploadPhoto} from '../services/api';
import {usePhotoContext} from '../../context/PhotoContext';

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

export const CameraScreen = ({navigation}: Props) => {
  const {setPhotos} = usePhotoContext();

  const handleCapture = async (photo: Photo) => {
    try {
      await uploadPhoto(photo);
      await fetchPhotos();
      navigation.goBack();
    } catch (error) {
      console.error('Error uploading photo:', error);
    }
  };

  const fetchPhotos = async () => {
    try {
      const fetchedPhotos = await getPhotos();
      setPhotos(fetchedPhotos);
    } catch (error) {
      console.error('Error al obtener las fotos:', error);
    }
  };

  return (
    <View style={{flex: 1}}>
      <CameraComponent onCapture={handleCapture} />
    </View>
  );
};
