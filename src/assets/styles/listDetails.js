import styled from 'styled-components/native';
import {ScreenColor, CardColor} from './global';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${ScreenColor};
  justify-content: center;
`;

export const InputArea = styled.View`
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const InputRange = styled.View`
  width: 100%;
`;

export const Scroller = styled.ScrollView`
  flex: 1;
`;

export const Card = styled.View`
  background-color: ${CardColor};
  flex: 1;
  padding: 20px;
  margin: 10px;
  border-radius: 20px;
  align-items: center;
  justify-content: center;
  width: 280px;
  align-self: center;
`;

export const ProductNameArea = styled.View`
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  width: 100%;
  flex-direction: row;
`;

export const ProductNameText = styled.Text`
  width: 100%;
  text-align: center;
`;

export const HeaderArea = styled.View`
  background-color: #ffffff;
  flex-direction: row;
  height: 50px;
  align-items: center;
`;

export const TotalListArea = styled.View`
  height: 30px;
  width: 150px;
  align-items: center;
  justify-content: center;
`;

export const TotalListText = styled.Text`
  color: #009944;
  font-weight: bold;
  font-size: 16px;
  width: 100%;
`;

export const FinishEditingButton = styled.TouchableOpacity`
  margin-left: 20px;
  margin-right: 90px;
  background-color: #009944;
  border-radius: 10px;
  height: 40px;
  width: 50px;
  align-items: center;
  justify-content: center;
`;

export const FinishEditingText = styled.Text`
  font-weight: bold;
  color: #ffffff;
`;

export const NewItemButton = styled.TouchableOpacity`
  background-color: #009944;
  border-radius: 10px;
  height: 40px;
  width: 50px;
  align-items: center;
  justify-content: center;
  margin-right: 60px;
`;

export const NewItemButtonText = styled.Text`
  font-weight: bold;
  color: #ffffff;
`;

export const TotalProductArea = styled.View`
  width: 100%;
  height: 60px;
  background-color: #eee;
  flex-direction: column;
  border-radius: 30px;
  padding-left: 15px;
  padding-right: 15px;
  margin-bottom: 15px;
  justify-content: center;
  align-items: center;
`;

export const TotalProductText = styled.Text`
  font-weight: bold;
  font-size: 15px;
  color: #009944;
`;

export const Label = styled.Text`
  margin-left: 25px;
  font-size: 11px;
  font-weight: bold;
`;
