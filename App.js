import React from 'react';
import Routers from './src/routers/router';
import {NavigationContainer} from '@react-navigation/native';

export default () => {
  return (
    <NavigationContainer>
      <Routers />
    </NavigationContainer>
  );
};
