import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Home from '../screens/home';
import NewList from '../screens/newList';
import Profile from '../screens/profile';
import ListDetails from '../screens/listDetails';
import CustomTabBar from '../components/TabBar';

const Tab = createBottomTabNavigator();

export default () => (
  <Tab.Navigator
    tabBar={(props) => <CustomTabBar {...props} />}
    initialRouteName="ListDetails">
    <Tab.Screen name="Home" component={Home} />
    <Tab.Screen name="NewList" component={NewList} />
    <Tab.Screen name="ListDetails" component={ListDetails} />
    <Tab.Screen name="Profile" component={Profile} />
  </Tab.Navigator>
);
