import styled from 'styled-components/native';

export const ModalAreaItems = styled.View`
  background-color: #000000aa;
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const ModalItems = styled.View`
  padding-top: 10px;
  padding-left: 10px;
  padding-right: 10px;
  width: 80%;
  height: 200px;
  border-radius: 10px;
  background-color: #ffffff;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
`;

export const ModalTitle = styled.Text`
  font-weight: bold;
  font-size: 20px;
  flex: 1;
  text-align: center;
`;

export const ModalArea = styled.View`
  flex: 1;
  width: 100%;
  margin-top: 20px;
  justify-content: center;
  align-items: center;
  flex-direction: row;
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

export const EditButton = styled.TouchableOpacity`
  width: 49%;
  height: 40px;
  margin-right: 2px;
  background-color: #009944;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
`;

export const EditButtonText = styled.Text`
  font-size: 15px;
  font-weight: bold;
  color: #ffffff;
`;

export const DeleteButton = styled.TouchableOpacity`
  width: 49%;
  height: 40px;
  border-radius: 20px;
  align-items: center;
  justify-content: center;
  margin-left: 2px;
  background-color: #cf000f;
`;

export const DeleteButtonText = styled.Text`
  font-size: 15px;
  font-weight: bold;
  color: #ffffff;
`;
