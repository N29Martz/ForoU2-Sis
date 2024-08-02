import 'react-native-gesture-handler';
import * as eva from '@eva-design/eva';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {HomeScreen} from './presentations/screen/home/HomeScreen';
// import {CameraScreen} from './presentations/screen/CameraScreen';
import {PhotoProvider} from './context/PhotoContext';
import { ApplicationProvider, IconRegistry, Layout, Text } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';

// export type RootStackParamList = {
//   Home: undefined;
//   Camera: undefined;
// };

const Stack = createStackNavigator();

export const App = () => {
  
  return (
    <>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider {...eva} theme={eva.light}>
        <PhotoProvider>
          <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
              <Stack.Screen name="Home" component={HomeScreen} />
              {/* <Stack.Screen name="Camera" component={CameraScreen} /> */}
            </Stack.Navigator>
          </NavigationContainer>
        </PhotoProvider>
      </ApplicationProvider>
    </>
  );
};
