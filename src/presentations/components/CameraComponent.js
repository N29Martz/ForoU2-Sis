import React, {useEffect} from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  PermissionsAndroid,
  Alert,
} from 'react-native';
import {launchCamera} from 'react-native-image-picker';

export const CameraComponent = ({onCapture}) => {
  useEffect(() => {
    requestPermissions();
  }, []);

  const requestPermissions = async () => {
    try {
      const cameraPermission = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          title: 'Camera Permission',
          message: 'This app needs access to your camera to take photos.',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );

      const storagePermission = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
        {
          title: 'Storage Permission',
          message: 'This app needs access to your storage to save photos.',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );

      if (
        cameraPermission === PermissionsAndroid.RESULTS.GRANTED &&
        storagePermission === PermissionsAndroid.RESULTS.GRANTED
      ) {
        console.log('You can use the camera and storage');
      } else {
        console.log('Camera or storage permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  };

  const takePicture = () => {
    const options = {
      mediaType: 'photo',
      quality: 0.5,
      includeBase64: true,
    };

    launchCamera(options, response => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.errorCode) {
        console.log(
          'ImagePicker Error: ',
          response.errorCode,
          response.errorMessage,
        );
        Alert.alert(
          'Error',
          `ImagePicker Error: ${response.errorCode} - ${response.errorMessage}`,
        );
      } else if (response.assets && response.assets.length > 0) {
        onCapture(response.assets[0]);
      }
    });
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={takePicture} style={styles.capture}>
        <Text style={styles.buttonText}> SNAP </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  capture: {
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 15,
    paddingHorizontal: 20,
    alignSelf: 'center',
    margin: 20,
  },
  buttonText: {
    fontSize: 14,
  },
});
