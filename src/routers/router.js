import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../screens/home';
import NewList from '../screens/newList';
const Stack = createStackNavigator();

export default () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleAlign: 'center',
      }}>
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
};
