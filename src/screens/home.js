import React, {useState, useEffect, useContext} from 'react';
import AsyncStorage from '@react-native-community/async-storage';

import {
  Container,
  Scroller,
  ListArea,
  ButtonArea,
  Card,
  ListName,
  InitialArea,
  EndArea,
  TotalText,
  ListProducts,
} from '../assets/styles/home';

import {showMessage} from 'react-native-flash-message';
import {Context} from '../contexts/context';
import {useNavigation} from '@react-navigation/native';
import NewListIcon from '../assets/icons/plus.svg';
import Api from '../services/list';
import ProductApi from '../services/product';
import LoadingComponent from '../components/Loading';
import ErrorComponent from '../components/Error';
import {set} from 'react-native-reanimated';

export default () => {
  const navigation = useNavigation();
  const {state} = useContext(Context);
  const [lists, setLists] = useState([]);
  const [loading, setLoading] = useState(false);
  const [hasNoLists, setHasNoLists] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [productList, setProductList] = useState([]);

  const getLists = async () => {
    setLoading(true);
    const lists = await Api.getAll(state.id);

    if (lists !== 'error') {
      if (lists === 'warning') {
        showMessage({
          message: 'Você não possui listas',
          type: 'warning',
          icon: 'warning',
        });
        setLoading(false);
        setHasNoLists(true);
      } else {
        setLists(lists);
        setLoading(false);
      }
    } else {
      showMessage({
        message: 'Erro ao tentar carregar as listas',
        type: 'danger',
        icon: 'danger',
      });
      setLoading(false);
      setHasError(true);
    }
  };

  useEffect(() => {
    getLists();
    const getProducts = async () => {
      setProductList(await ProductApi.getAll());
    };
    getProducts();
  }, []);

  const onPress = () => {
    navigation.navigate('NewList');
  };

  const listProducts = (products) => {
    let response = '';
    products.map((listProducts) => {
      return productList.map((product) => {
        if (listProducts.product_id === product.id) {
          response.length === 0
            ? (response += `${product.name}`)
            : (response += `, ${product.name}`);
        }
      });
    });
    if (response.length > 20) {
      response = response.substr(0, 20) + '...';
    }
    return response;
  };

  const calcTotal = (list_product) => {
    let response = 0;
    list_product.forEach((product) => {
      response += product.amount * product.price;
    });
    return response;
  };

  return (
    <Container>
      {
        !loading && !hasNoLists && !hasError && (
          <Scroller>
            <ListArea>
              {lists.map((item) => (
                <Card key={item.id}>
                  <InitialArea>
                    <ListName>{item.name}</ListName>
                    <ListProducts>
                      {listProducts(item.list_product)}
                    </ListProducts>
                  </InitialArea>
                  <EndArea>
                    <TotalText>{`R$ ${calcTotal(
                      item.list_product,
                    )}`}</TotalText>
                  </EndArea>
                </Card>
              ))}
            </ListArea>
          </Scroller>
        )
        /* 
      <ButtonArea onPress={onPress}>
        <NewListIcon width="25" heigth="25" fill="#000000" />
      </ButtonArea> */
      }

      {loading && <LoadingComponent />}
      {hasError && <ErrorComponent />}
    </Container>
  );
};
