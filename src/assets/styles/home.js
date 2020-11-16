import styled from 'styled-components/native';
import {CardColor, ScreenColor} from '../styles/global';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${ScreenColor};
`;
export const Scroller = styled.ScrollView`
  flex: 1;
  padding: 20px;
`;

export const ListArea = styled.View`
  flex: 0.9;
  align-items: center;
  justify-content: center;
`;

export const Card = styled.TouchableOpacity`
  background-color: ${CardColor};
  flex: 1;
  width: 100%;
  padding: 20px;
  margin: 10px;
  border-radius: 50px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const ListName = styled.Text`
  font-weight: bold;
  font-size: 20px;
`;

export const ButtonArea = styled.TouchableOpacity`
  flex: 0.1;
  position: absolute;
  right: 0;
  bottom: -5px;
  background-color: #7cc67c;
  flex-direction: row;
  height: 70px;
  align-items: center;
  width: 70px;
  margin: 10px;
  border-radius: 50px;
  align-items: center;
  justify-content: space-between;
`;

export const ButtonText = styled.Text`
  font-weight: bold;
  font-size: 70px;
  color: #fff;
  margin-bottom: 5px;
`;

export const InitialArea = styled.View``;

export const EndArea = styled.View``;

export const TotalText = styled.Text`
  font-weight: bold;
  font-size: 15px;
  color: #7cc67c;
`;

export const ListProducts = styled.Text`
  font-size: 11px;
  color: #000000;
  font-weight: bold;
`;
