import { View, Text, Modal } from 'react-native'
import React from 'react'

export default function ModalComponent({children, modalVisible, setModalVisible}) {
  return (
    <Modal
    animationType="fade"
    transparent={true}
    visible={modalVisible}
    onRequestClose={() => {
      Alert.alert('Modal has been closed.');
      setModalVisible(!modalVisible);
    }}>
        {children}
    </Modal>
  )
}