import React from 'react';
import {Modal, Pressable, Text, View} from 'react-native';
import {styles} from '../theme/theme';
import {Button, Icon, Layout} from '@ui-kitten/components';

interface Props {
  onDismiss?: () => void;
  onShow?: () => void;
  visible: boolean;
  children: React.ReactNode;
  onClose: () => void;
}

const ModalComponent = ({
  onDismiss = () => null,
  onShow = () => null,
  visible,
  children,
  onClose,
}: Props) => {
  return (
    <Modal
      animationType="fade"
      onDismiss={onDismiss}
      onShow={onShow}
      transparent
      visible={visible}>
      <Layout style={styles.modalcontent}>
        <Layout style={styles.modal}>
          <Layout style={styles.modalHeader}>
            <Button
              style={styles.buttonClose}
              accessoryLeft={<Icon name="close-outline" size={16} />}
              onPress={onClose}></Button>
          </Layout>

          {children}
        </Layout>
      </Layout>
    </Modal>
  );
};

export default ModalComponent;
