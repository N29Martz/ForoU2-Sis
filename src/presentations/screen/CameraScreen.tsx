import React from 'react';
import {View} from 'react-native';
import {CameraComponent} from '../components/CameraComponent';
import {uploadPhoto} from '../services/api';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

interface Photo {
  uri: string;
  width: number;
  height: number;
  type?: string;
  fileName?: string;
}

type RootStackParamList = {
  Home: undefined;
  Camera: undefined;
};

type CameraScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Camera'
>;

interface Props {
  navigation: CameraScreenNavigationProp;
}

export const CameraScreen: React.FC<Props> = ({navigation}) => {
  const handleCapture = async (photo: Photo) => {
    try {
      await uploadPhoto(photo);
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
