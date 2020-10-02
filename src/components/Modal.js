import React, {useState} from 'react';
import styled from 'styled-components/native';
import {Modal} from 'react-native';
import InputComponent from '../components/Input';

const ModalAreaItems = styled.View`
  background-color: #000000aa;
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const ModalItems = styled.View`
  margin-top: 10px;
  padding-top: 10px;
  padding-left: 10px;
  padding-right: 10px;
  width: 80%;
  border-radius: 10px;
  flex: 1;
  background-color: #ffffff;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
`;

const ModalTitle = styled.Text`
  font-weight: bold;
  font-size: 17px;
  margin-bottom: 20px;
`;

const ModalInputArea = styled.View`
  flex: 1;
  width: 100%;
  margin-top: 20px;
`;

const ModalButtonsArea = styled.View`
  flex: 1;
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const CancelButton = styled.TouchableOpacity`
  background-color: red;
  margin-right: 25px;
  height: 50px;
  width: 100px;
  align-items: center;
  justify-content: center;
  border-radius: 40px;
`;

const SaveItemButton = styled.TouchableOpacity`
  background-color: green;
  height: 50px;
  width: 100px;
  align-items: center;
  justify-content: center;
  border-radius: 40px;
`;

const ModalButtonText = styled.Text`
  color: #ffffff;
  font-weight: bold;
`;

export default ({isVisible, toggle, addItem}) => {
  const [itemName, setItemName] = useState();
  const [itemPrice, setItemPrice] = useState();
  const [itemAmount, setItemAmount] = useState();

  function resetState() {
    addItem(itemName, itemPrice, itemAmount);
    setItemName();
    setItemAmount();
    setItemPrice();
  }

  return (
    <Modal visible={isVisible} animationType={'slide'} transparent={true}>
      <ModalAreaItems>
        <ModalItems>
          <ModalTitle>Adicionar Item</ModalTitle>

          <ModalInputArea>
            <InputComponent
              placeholder="Digite o nome do intem"
              value={itemName}
              onChangeText={(t) => setItemName(t)}
            />
            <InputComponent
              placeholder="Digite o preço do item"
              value={itemPrice}
              onChangeText={(t) => setItemPrice(t)}
              keyboardType="numeric"
            />
            <InputComponent
              placeholder="Digite a quantidade de itens"
              value={itemAmount}
              keyboardType="numeric"
              onChangeText={(t) => setItemAmount(t)}
            />
            <ModalButtonsArea>
              <CancelButton onPress={toggle}>
                <ModalButtonText>Cancelar</ModalButtonText>
              </CancelButton>

              <SaveItemButton onPress={() => resetState()}>
                <ModalButtonText>Adicionar</ModalButtonText>
              </SaveItemButton>
            </ModalButtonsArea>
          </ModalInputArea>
        </ModalItems>
      </ModalAreaItems>
    </Modal>
  );
};
