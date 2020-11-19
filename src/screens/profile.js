import React, {useContext, useState} from 'react';
import AsyncStorage from '@react-native-community/async-storage';

import {
  Container,
  UserText,
  LogoutButton,
  LogoutButtonText,
} from '../assets/styles/profile';
import {Context} from '../contexts/context';
import LogoutIcon from '../assets/icons/logout.svg';
import LoadingComponent from '../components/Loading';
import {useNavigation} from '@react-navigation/native';
import {showMessage} from 'react-native-flash-message';

export default () => {
  const navigation = useNavigation();
  const {state} = useContext(Context);
  const [loading, setLoading] = useState(false);
  const logout = async () => {
    setLoading(true);
    await AsyncStorage.clear();
    showMessage({
      message: 'Deslogado com sucesso',
      type: 'success',
      icon: 'success',
    });
    setTimeout(() => {
      navigation.reset({index: 0, routes: [{name: 'Preload'}]});
    }, 4000);
  };
  return (
    <Container>
      {!loading && (
        <Container>
          <UserText>Olá, {state.name}</UserText>
          <LogoutButton onPress={logout}>
            <LogoutButtonText>Sair</LogoutButtonText>
            <LogoutIcon width="25" height="25" fill="#ffffff" />
          </LogoutButton>
        </Container>
      )}
      {loading && <LoadingComponent />}
    </Container>
  );
};
