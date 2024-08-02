import {Button, Icon, Layout} from '@ui-kitten/components';
import React, {useEffect, useState} from 'react';
import {PhotoList} from '../../components/PhotoList';
import {getPhotos, uploadPhoto} from '../../services/api';
import {usePhotoContext} from '../../../context/PhotoContext';
import {styles} from '../../theme/theme';
import Modal from '../../components/ModalComponent';
import {CameraComponent} from '../../components/CameraComponent';
import { launchImageLibrary, ImagePickerResponse, Asset, ImageLibraryOptions } from 'react-native-image-picker';

interface Photo {
  uri: string;
  width: number;
  height: number;
  type?: string;
  fileName?: string;
}

export const HomeScreen = () => {
  const {photos, setPhotos} = usePhotoContext();
  const [view, setView] = useState(false);
  const [showCamera, setShowCamera] = useState(false);

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
      setShowCamera(false);
    } catch (error) {
      console.error('Error cargar la foto:', error);
    }
  };

  const openGallery = () => {
    const options: ImageLibraryOptions = {
      mediaType: 'photo',
      includeBase64: false,
      maxHeight: 2000,
      maxWidth: 2000,
    };
  
    launchImageLibrary(options, (response: ImagePickerResponse) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.errorCode) {
        console.log('ImagePicker Error: ', response.errorMessage);
      } else if (response.assets && response.assets.length > 0) {
        const selectedPhoto = response.assets[0];
        handleCapture(selectedPhoto as Photo);
      }
    });

    setView(false);
  };

  return (
    <Layout style={styles.container}>
          <Layout style={styles.buttonContainer}>
            <Button
              style={styles.button}
              accessoryLeft={<Icon name="plus-outline" />}
              onPress={() => {
                setView(true);
              }}></Button>
            <Modal visible={view} onClose={() => setView(false)}>
              <Layout>
                  <Button
                    style={styles.buttonModal}
                    accessoryLeft={<Icon name="camera-outline" />}
                    onPress={() => {
                      setShowCamera(true);
                      setView(false);
                    }}>
                    Tomar foto
                  </Button>
                <Layout>
                  <Button
                    style={styles.buttonModal}
                    accessoryLeft={<Icon name="image-outline" />}
                    onPress={openGallery}>
                    Subir foto
                  </Button>
                </Layout>
              </Layout>
            </Modal>
            {showCamera && <CameraComponent onCapture={handleCapture} />}
          </Layout>
          <Layout>
            <PhotoList photos={photos} />
          </Layout>
    </Layout>
  );
};
