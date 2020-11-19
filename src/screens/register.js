import React, {useState, useContext} from 'react';

import {useNavigation} from '@react-navigation/native';
import {showMessage} from 'react-native-flash-message';
import InputComponent from '../components/Input';
import AsyncStorage from '@react-native-community/async-storage';
import {Context} from '../contexts/context';
import {
  Container,
  InputArea,
  LoginButton,
  LoginButtonText,
} from '../assets/styles/login';

import DSLIcon from '../assets/icons/dsl-icon.svg';
import Api from '../services/user';
import LoadingComponent from '../components/Loading';

export default () => {
  const navigation = useNavigation();

  [username, setUsername] = useState('');
  [name, setName] = useState('');
  [password, setPassword] = useState('');
  [loading, setLoading] = useState(false);
  const {dispatch: userDispatch} = useContext(Context);

  const handleClickLogin = async () => {
    if (!username || !password || !name) {
      showMessage({
        message: 'Preencha os campos',
        type: 'warning',
        icon: 'warning',
      });
    } else {
      if (!username.includes('@')) {
        showMessage({
          message: 'Informe um email valido',
          type: 'warning',
          icon: 'warning',
        });
      } else {
        setLoading(true);

        const result = await Api.save(username, name, password);

        if (result === 'warning') {
          setLoading(false);
          showMessage({
            message: 'Usuário já existe',
            type: 'warning',
            icon: 'warning',
          });
        } else if (result === 'error') {
          setLoading(false);
          showMessage({
            message: 'Não foi possivel salvar o Usuário',
            type: 'danger',
            icon: 'danger',
          });
        } else {
          await AsyncStorage.setItem('logged', 'true');
          await AsyncStorage.setItem('userData', JSON.stringify(result));
          userDispatch({
            type: 'setUser',
            payload: {
              user: result,
            },
          });
          navigation.reset({
            routes: [{name: 'MainRoutes'}],
          });
        }
      }
    }
  };
  if (loading) {
    return <LoadingComponent />;
  } else {
    return (
      <Container>
        <DSLIcon width="100%" height="140" fill="#000000" />
        <InputArea>
          <InputComponent
            placeholder="Digite o seu email"
            onChangeText={(t) => setUsername(t)}
            value={username}
            keyboardType="email-address"
          />
          <InputComponent
            placeholder="Digite o seu nome"
            onChangeText={(t) => setName(t)}
            value={name}
          />
          <InputComponent
            placeholder="Digite a sua senha"
            password={true}
            onChangeText={(t) => setPassword(t)}
            value={password}
          />

          <LoginButton onPress={handleClickLogin}>
            <LoginButtonText>Cadastrar</LoginButtonText>
          </LoginButton>
        </InputArea>
      </Container>
    );
  }
};
