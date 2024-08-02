import React, {useEffect} from 'react';
import {launchCamera} from 'react-native-image-picker';

export const CameraComponent = ({onCapture}) => {
  useEffect(() => {
    takePicture();
  }, []);

  const takePicture = () => {
    const options = {
      mediaType: 'photo',
      quality: 0.5,
      includeBase64: true,
    };

    launchCamera(options, response => {
      if (response.didCancel) {
        console.log('Cancelastes la foto');
      } else if (response.errorCode) {
        console.log(
          'ImagePicker Error: ',
          response.errorCode,
          response.errorMessage,
        );
        // Alert.alert(
        //   'Error',
        //   `ImagePicker Error: ${response.errorCode} - ${response.errorMessage}`,
        // );
      } else if (response.assets && response.assets.length > 0) {
        onCapture(response.assets[0]);
      }
    });
  };

  return null;
};
