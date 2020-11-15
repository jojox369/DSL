import React from 'react';
import Routers from './src/routers/login.routes';
import {NavigationContainer} from '@react-navigation/native';
import ContextProvider from './src/contexts/context';
import FlashMessage from 'react-native-flash-message';
export default () => {
  return (
    <ContextProvider>
      <NavigationContainer>
        <Routers />
        <FlashMessage
          position="top"
          style={{alignItems: 'center', justifyContent: 'center'}}
          duration={3000}
        />
      </NavigationContainer>
    </ContextProvider>
  );
};
