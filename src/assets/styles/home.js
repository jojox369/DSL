import React from 'react';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;

export const Scroller = styled.ScrollView`
  flex: 1;
`;

export const ListArea = styled.View`
  flex: 0.9;
  align-items: center;
  justify-content: center;
`;

export const Card = styled.View`
  background-color: #ffffff;
  flex: 1;
  width: 95%;
  padding: 20px;
  margin: 10px;
  border-radius: 50px;
`;

export const ListName = styled.Text`
  font-weight: bold;
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
  justify-content: center;
`;

export const ButtonText = styled.Text`
  font-weight: bold;
  font-size: 70px;
  color: #fff;
  margin-bottom: 5px;
`;
