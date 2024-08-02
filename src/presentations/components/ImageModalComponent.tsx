import {Modal, Dimensions, Image, TouchableOpacity } from 'react-native';
import { styles } from '../theme/theme';

interface Props {
  visible: boolean;
  imageUri: string;
  onClose: () => void;
}

const { width, height } = Dimensions.get('window');

export const ImageModalComponent = ({ visible, imageUri, onClose }: Props) => {
  return (
    <Modal visible={visible} transparent animationType="fade">
      <TouchableOpacity style={styles.modalBackground} onPress={onClose}>
        <Image
          source={{ uri: imageUri }}
          style={{ width, height, resizeMode: 'contain' }}
        />
      </TouchableOpacity>
    </Modal>
  );
};