import styled from 'styled-components/native';

export const ModalAreaItems = styled.View`
  background-color: #000000aa;
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const ModalItems = styled.View`
  margin-top: 10px;
  margin-bottom: 10px;
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

export const ModalTitle = styled.Text`
  font-weight: bold;
  font-size: 17px;
  flex: 1;
  text-align: center;
`;

export const ModalArea = styled.View`
  flex: 1;
  width: 100%;
  margin-top: 20px;
`;

export const Scroller = styled.ScrollView`
  flex: 1;
`;

export const ModalButtonsArea = styled.View`
  flex: 1;
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const CancelButton = styled.TouchableOpacity`
  background-color: red;
  margin-right: 25px;
  height: 50px;
  width: 100px;
  align-items: center;
  justify-content: center;
  border-radius: 40px;
`;

export const SaveItemButton = styled.TouchableOpacity`
  background-color: green;
  height: 50px;
  width: 100px;
  align-items: center;
  justify-content: center;
  border-radius: 40px;
`;

export const ModalButtonText = styled.Text`
  color: #ffffff;
  font-weight: bold;
`;

export const ListProductsArea = styled.View`
  flex: 1;
  margin: 10px;
`;

export const ProductName = styled.Text`
  margin: 10px;
  border-bottom-color: #000000;
  border-bottom-width: 1px;
  width: 100%;
  text-align: center;
`;

export const ProductView = styled.TouchableOpacity`
  flex: 1;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

export const HeaderArea = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const CloseBox = styled.View`
  width: 25px;
  height: 25px;
  max-width: 25px;
  max-height: 25px;
`;
