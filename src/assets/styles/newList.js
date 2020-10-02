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
  width: 100px;
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

export const Amount = styled.Text`
  font-weight: bold;
  font-size: 17px;
`;

export const Price = styled.Text`
  font-weight: bold;
  font-size: 17px;
`;

export const TotalArea = styled.View`
  flex: 1;
  height: 40px;
  flex-direction: column;
  background-color: #7cc67c;
  border-radius: 30px;
  align-items: center;
  justify-content: center;
`;

export const TotalValue = styled.Text`
  font-weight: bold;
  font-size: 17px;
  color: #ffffff;
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

export const TotaListArea = styled.View`
  background-color: #ffffff;
  height: 50px;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  width: 100%;
`;

export const TotalList = styled.Text`
  font-weight: bold;
  font-size: 15px;
`;

export const TotalValorText = styled.Text`
  background-color: #7cc67c;
  font-weight: bold;
  border-radius: 20px;
  width: 70px;
  height: 20px;
  text-align: center;
  color: #ffffff;
`;
