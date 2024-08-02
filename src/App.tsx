import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {HomeScreen} from './presentations/screen/home/HomeScreen';
import {CameraScreen} from './presentations/screen/CameraScreen';
import {PhotoProvider} from './context/PhotoContext';

// export type RootStackParamList = {
//   Home: undefined;
//   Camera: undefined;
// };

const Stack = createStackNavigator();

export const App = () => {
  return (
    <PhotoProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Camera" component={CameraScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </PhotoProvider>
  );
};
