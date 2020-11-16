import React, {useEffect, useContext} from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import LoadingComponent from '../components/Loading';
import {useNavigation} from '@react-navigation/native';
import {Context} from '../contexts/context';
export default () => {
  const navigation = useNavigation();
  const {dispatch: userDispatch} = useContext(Context);

  useEffect(() => {
    const checkUser = async () => {
      const logged = await AsyncStorage.getItem('logged');
      const user = JSON.parse(await AsyncStorage.getItem('userData'));

      if (logged) {
        userDispatch({type: 'setUser', payload: {user: user}});
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
  }, []);

  return <LoadingComponent />;
};
