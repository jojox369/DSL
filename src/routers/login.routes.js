import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Sigin from '../screens/sigin';
import Preload from '../screens/preload';
import Login from '../screens/login';
import MainRoutes from './main.routes';

const Stack = createStackNavigator();

export default () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}>
    <Stack.Screen name="Preload" component={Preload} />
    <Stack.Screen name="Login" component={Login} />
    <Stack.Screen name="Sigin" component={Sigin} />
    <Stack.Screen name="MainRoutes" component={MainRoutes} />
  </Stack.Navigator>
);
