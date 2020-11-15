import React, {useEffect} from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import LoadingComponent from '../components/Loading';
import {useNavigation} from '@react-navigation/native';

export default () => {
  const navigation = useNavigation();
  useEffect(() => {
    const checkUser = async () => {
      const logged = await AsyncStorage.getItem('logged');

      if (logged) {
        navigation.reset({
          routes: [{name: 'MainRoutes'}],
        });
      } else {
        navigation.reset({
          routes: [{name: 'Login'}],
        });
      }
    };
    checkUser();
  });

  return <LoadingComponent />;
};
