import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Home from '../screens/home';
import NewList from '../screens/newList';
import Profile from '../screens/profile';
import CustomTabBar from '../components/TabBar';

const Tab = createBottomTabNavigator();

export default () => (
  <Tab.Navigator tabBar={(props) => <CustomTabBar {...props} />}>
    <Tab.Screen
      name="Home"
      component={Home}
      options={{headerTitle: 'Listas de Compras'}}
    />
    <Tab.Screen
      name="NewList"
      component={NewList}
      options={{headerTitle: 'Nova Lista de Compras'}}
    />
    <Tab.Screen
      name="Profile"
      component={NewList}
      options={{headerTitle: 'Perfil'}}
    />
  </Tab.Navigator>
);
