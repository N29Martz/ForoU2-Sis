import React from 'react';
import {View} from 'react-native';
import {CameraComponent} from '../components/CameraComponent';
import {uploadPhoto} from '../services/api';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../App';

interface Photo {
  uri: string;
  width: number;
  height: number;
  type?: string;
  fileName?: string;
}

type CameraScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Camera'
>;

interface Props {
  navigation: CameraScreenNavigationProp;
  route: {
    params: {
      onNewPhoto: () => void;
    };
  };
}

export const CameraScreen = ({navigation, route}: Props) => {
  const {onNewPhoto} = route.params;

  const handleCapture = async (photo: Photo) => {
    try {
      await uploadPhoto(photo);
      onNewPhoto(); // llama a la función para actualizar las fotos en el HomeScreen
      navigation.goBack();
    } catch (error) {
      console.error('Error uploading photo:', error);
    }
  };

  return (
    <View style={{flex: 1}}>
      <CameraComponent onCapture={handleCapture} />
    </View>
  );
};
