import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../screens/home';
import NewList from '../screens/newList';

const Stack = createStackNavigator();

export default () => (
  <Stack.Navigator
    screenOptions={{
      headerTitleAlign: 'center',
    }}
    initialRouteName="NewList">
    <Stack.Screen
      name="Home"
      component={Home}
      options={{headerTitle: 'Listas de Compras'}}
    />
    <Stack.Screen
      name="NewList"
      component={NewList}
      options={{headerTitle: 'Nova Lista de Compras'}}
    />
  </Stack.Navigator>
);
