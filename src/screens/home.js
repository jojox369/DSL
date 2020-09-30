import React, {useContext} from 'react';
import {Context} from '../contexts/context';
import {
  Container,
  Scroller,
  ListArea,
  ButtonArea,
  Card,
  ListName,
} from '../assets/styles/home';

import {useNavigation} from '@react-navigation/native';
import NewListIcon from '../assets/icons/plus.svg';

export default () => {
  const {state} = useContext(Context);
  const navigation = useNavigation();

  const onPress = () => {
    navigation.navigate('NewList');
  };
  return (
    <Container>
      <Scroller>
        <ListArea>
          {state.map((item) => {
            <Card key={item.id}>
              <ListName>item.name</ListName>
            </Card>;
          })}
        </ListArea>
      </Scroller>

      <ButtonArea onPress={onPress}>
        <NewListIcon width="25" heigth="25" fill="#000000" />
      </ButtonArea>
    </Container>
  );
};
