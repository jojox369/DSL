import React from 'react';
import styled from 'styled-components/native';

import NewListIcon from '../assets/icons/plus.svg';
import UserIcon from '../assets/icons/user.svg';
import ListsIcon from '../assets/icons/dsl-icon.svg';

import {TabBarColor} from '../assets/styles/global';

const TabArea = styled.View`
  height: 60px;
  background-color: ${TabBarColor};
  flex-direction: row;
`;

const TabItem = styled.TouchableOpacity`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export default ({state, navigation}) => {
  const goTo = (screenName) => {
    navigation.navigate(screenName);
  };
  return (
    <TabArea>
      <TabItem onPress={() => goTo('Home')}>
        <ListsIcon
          style={{opacity: state.index === 0 || state.index === 2 ? 1 : 0.5}}
          width="24"
          height="24"
          fill="#FFFFFF"
        />
      </TabItem>

      <TabItem onPress={() => goTo('NewList')}>
        <NewListIcon
          style={{opacity: state.index === 1 ? 1 : 0.5}}
          width="24"
          height="24"
          fill="#FFFFFF"
        />
      </TabItem>

      <TabItem onPress={() => goTo('Profile')}>
        <UserIcon
          style={{opacity: state.index === 3 ? 1 : 0.5}}
          width="24"
          height="24"
          fill="#FFFFFF"
        />
      </TabItem>
    </TabArea>
  );
};
