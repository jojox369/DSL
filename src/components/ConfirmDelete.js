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
  UserMessage,
  ButtonsArea,
} from '../assets/styles/confirmDelete';

export default ({isVisible, onPress, deleteList, closeModal}) => {
  return (
    <Modal visible={isVisible} animationType={'slide'} transparent={true}>
      <ModalAreaItems>
        <ModalItems>
          <HeaderArea>
            <ModalTitle>Atenção</ModalTitle>
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
            <UserMessage>Tem certeza que deseja excluir a lista?</UserMessage>
            <ButtonsArea>
              <EditButton onPress={deleteList}>
                <EditButtonText>Sim</EditButtonText>
              </EditButton>

              <DeleteButton onPress={closeModal}>
                <DeleteButtonText>Não</DeleteButtonText>
              </DeleteButton>
            </ButtonsArea>
          </ModalArea>
        </ModalItems>
      </ModalAreaItems>
    </Modal>
  );
};
