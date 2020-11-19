import styled from 'styled-components/native';
import {ScreenColor, TabBarColor} from './global';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${ScreenColor};
  justify-content: center;
  align-items: center;
`;

export const UserText = styled.Text`
  font-weight: bold;
  font-size: 20px;
`;

export const LogoutButton = styled.TouchableOpacity`
  margin-top: 20px;
  background-color: #008cba;
  width: 150px;
  height: 40px;
  border-radius: 20px;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;

export const LogoutButtonText = styled.Text`
  font-weight: bold;
  color: #ffffff;
  font-size: 20px;
  margin-right: 30px;
`;
