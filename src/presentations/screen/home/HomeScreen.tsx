import React from 'react';
import {View, Button, StyleSheet} from 'react-native';
import {PhotoList} from '../../components/PhotoList';
import {getPhotos} from '../../services/api';

interface Props {
  navigation: any;
}

export const HomeScreen = ({navigation}: Props) => {
  const [photos, setPhotos] = React.useState([]);

  React.useEffect(() => {
    fetchPhotos();
  }, []);

  const fetchPhotos = async () => {
    try {
      const fetchedPhotos = await getPhotos();
      setPhotos(fetchedPhotos);
    } catch (error) {
      console.error('Error fetching photos:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Button
        title="Take Photo"
        onPress={() => navigation.navigate('Camera')}
      />
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
