import styled from 'styled-components/native';
import {ScreenColor} from '../styles/global';

export const Container = styled.View`
  flex: 1;
  background-color: ${ScreenColor};
`;

export const Input = styled.TextInput`
  flex: 1;
  font-size: 16px;
  margin-left: 10px;
`;

export const ListItemArea = styled.ScrollView`
  flex: 1;
`;

export const ItemArea = styled.View`
  flex-direction: row;
  flex: 1;
  align-items: center;
`;

export const ItemNameArea = styled.TouchableOpacity`
  background-color: #ffffff;
  width: 120px;
  height: 40px;
  margin: 10px 0 10px 10px;
  border-radius: 30px;

  align-items: center;
  justify-content: center;
`;

export const ItemName = styled.Text`
  font-weight: bold;
  font-size: 17px;
`;

export const Amount = styled.TextInput`
  background-color: #ffffff;
  width: 80px;
  margin: 10px 0 10px 0;
  border-radius: 30px;
  text-align: center;
`;

export const Price = styled.TextInput`
  background-color: #ffffff;
  width: 80px;
  margin: 10px 5px 10px 5px;
  border-radius: 30px;
  text-align: center;
`;

export const TotalArea = styled.View`
  flex: 1;
  height: 40px;
  margin: 10px 5px 10px 10px;
  flex-direction: column;
  background-color: #ffffff;
  border-radius: 30px;
  align-items: center;
  justify-content: center;
`;

export const TotalText = styled.Text`
  font-weight: bold;
  font-size: 13px;
`;

export const TotalValue = styled.Text`
  font-size: 20px;
  font-weight: bold;
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

export const InputArea = styled.View`
  align-items: center;
  justify-content: center;
  flex: 0.9;
  margin-top: 30px;
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
