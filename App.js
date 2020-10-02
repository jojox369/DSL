import React from 'react';
import Routers from './src/routers/router';
import {NavigationContainer} from '@react-navigation/native';
import ContextProvider from './src/contexts/context';
export default () => {
  return (
    <ContextProvider>
      <NavigationContainer>
        <Routers />
      </NavigationContainer>
    </ContextProvider>
  );
};
