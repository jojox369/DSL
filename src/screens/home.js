import React from 'react';

import {
  Container,
  Scroller,
  ListArea,
  ButtonArea,
  ButtonText,
  Card,
  ListName,
} from '../assets/styles/home';

import {useNavigation} from '@react-navigation/native';
import IconSvg from '../assets/icons/plus.svg';

export default () => {
  const navigation = useNavigation();

  const onPress = () => {
    navigation.navigate('NewList');
  };
  return (
    <Container>
      <Scroller>
        <ListArea>
          <Card>
            <ListName>Lista 1</ListName>
          </Card>
          <Card>
            <ListName>Lista 2</ListName>
          </Card>

          <Card>
            <ListName
              onPress={() => {
                console.log('aqui');
              }}>
              Lista 3
            </ListName>
          </Card>

          <Card>
            <ListName>Lista 4</ListName>
          </Card>

          <Card>
            <ListName>Lista 5</ListName>
          </Card>

          <Card>
            <ListName>Lista 6</ListName>
          </Card>

          <Card>
            <ListName>Lista 6</ListName>
          </Card>

          <Card>
            <ListName>Lista 6</ListName>
          </Card>
          <Card>
            <ListName>Lista 6</ListName>
          </Card>
          <Card>
            <ListName>Lista 6</ListName>
          </Card>
          <Card>
            <ListName>Lista 6</ListName>
          </Card>
          <Card>
            <ListName>Lista 6</ListName>
          </Card>
        </ListArea>
      </Scroller>
      <ButtonArea onPress={onPress}>
        <IconSvg width="50" heigth="50" fill="#000000" />
      </ButtonArea>
    </Container>
  );
};
