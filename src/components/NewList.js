import React, {useState} from 'react';
import {Modal} from 'react-native';
import InputComponent from '../components/Input';
import {
  ModalArea,
  ModalButtonsArea,
  ModalButtonText,
  SaveItemButton,
  ModalItems,
  ModalAreaItems,
} from '../assets/styles/modal';

export default ({onChangeText, isVisible, onPress, listName}) => {
  return (
    <Modal visible={isVisible} animationType={'slide'} transparent={true}>
      <ModalAreaItems>
        <ModalItems>
          <ModalArea>
            <InputComponent
              placeholder="Digite o nome da lista"
              value={listName}
              onChangeText={onChangeText}
            />

            <ModalButtonsArea>
              <SaveItemButton onPress={onPress}>
                <ModalButtonText>Nova Lista</ModalButtonText>
              </SaveItemButton>
            </ModalButtonsArea>
          </ModalArea>
        </ModalItems>
      </ModalAreaItems>
    </Modal>
  );
};
