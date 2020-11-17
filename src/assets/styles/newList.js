import styled from 'styled-components/native';
import {ScreenColor} from '../styles/global';

export const Container = styled.View`
  flex: 1;
  background-color: ${ScreenColor};
`;

export const ListItemArea = styled.ScrollView`
  flex: 1;
`;

export const ItemArea = styled.View`
  flex-direction: row;
  flex: 1;
  align-items: center;
  margin-top: 10px;
`;

export const ItemNameArea = styled.TouchableOpacity`
  background-color: #ffffff;
  width: 100%;
  height: 40px;
  margin-right: 5px;
  border-radius: 30px;

  align-items: center;
  justify-content: center;
`;

export const ItemName = styled.Text`
  font-weight: bold;
  font-size: 17px;
`;

export const AddItemArea = styled.View`
  flex: 0.1;
  position: absolute;
  right: 0;
  bottom: -5px;
  flex-direction: row;
  align-items: center;
  height: 70px;
  width: 100%;
  align-items: center;
  justify-content: center;
  flex-flow: row;
  margin-bottom: 10px;
`;

export const AddItemButton = styled.TouchableOpacity`
  background-color: #7cc67c;
  border-radius: 50px;
  height: 70px;
  width: 70px;
  margin-left: 10px;
  align-items: center;
  justify-content: center;
`;

export const FinishListIconArea = styled.View`
  align-items: center;
  justify-content: center;
`;

export const ListNameArea = styled.View`
  background-color: #ffffff;
  height: 50px;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  width: 100%;
`;

export const ListNameText = styled.Text`
  font-weight: bold;
  font-size: 15px;
  margin-left: 10px;
`;

export const FinishListArea = styled.TouchableOpacity`
  margin-right: 5px;
  background-color: #7cc67c;
  width: 95px;
  height: 40px;
  align-items: center;
  justify-content: center;
  border-radius: 50px;
`;

export const FinishListText = styled.Text`
  font-weight: bold;
`;
