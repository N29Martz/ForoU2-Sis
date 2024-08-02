import {Button, Icon, Layout} from '@ui-kitten/components';
import React, {useEffect, useState} from 'react';
import {PhotoList} from '../../components/PhotoList';
import {getPhotos, uploadPhoto} from '../../services/api';
import {usePhotoContext} from '../../../context/PhotoContext';
import {styles} from '../../theme/theme';
import Modal from '../../components/ModalComponent';
import {CameraComponent} from '../../components/CameraComponent';

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

  // const openCamera = () => {
  //   console.log('abrir camara');
    
  //   setView(false); // Cierra el modal
  //   return <CameraComponent onCapture={handleCapture} />;
  // };

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
                    onPress={() => {
                      setView(true);
                    }}>
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
