import React from 'react';
import {Modal} from 'react-native';
import CloseIcon from '../assets/icons/close.svg';
import {
  ModalAreaItems,
  ModalItems,
  HeaderArea,
  ModalTitle,
  CloseBox,
  ModalArea,
  EditButton,
  EditButtonText,
  DeleteButton,
  DeleteButtonText,
} from '../assets/styles/listOptions';

export default ({isVisible, onPress, editButtonPress, deleteButtonPress}) => {
  return (
    <Modal visible={isVisible} animationType={'slide'} transparent={true}>
      <ModalAreaItems>
        <ModalItems>
          <HeaderArea>
            <ModalTitle>Opções</ModalTitle>
            <CloseBox>
              <CloseIcon
                width="24"
                height="24"
                fill="#000000"
                onPress={onPress}
              />
            </CloseBox>
          </HeaderArea>
          <ModalArea>
            <EditButton onPress={editButtonPress}>
              <EditButtonText>Editar Lista</EditButtonText>
            </EditButton>

            <DeleteButton onPress={deleteButtonPress}>
              <DeleteButtonText>Excluir Lista</DeleteButtonText>
            </DeleteButton>
          </ModalArea>
        </ModalItems>
      </ModalAreaItems>
    </Modal>
  );
};
