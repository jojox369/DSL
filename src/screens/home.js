import React, {useState, useEffect, useContext} from 'react';

import {
  Container,
  Scroller,
  ListArea,
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
import Api from '../services/list';
import ProductApi from '../services/product';
import LoadingComponent from '../components/Loading';
import ErrorComponent from '../components/Error';
import ListOptionsComponent from '../components/ListOptions';
import ConfirmDeleteComponent from '../components/ConfirmDelete';

export default () => {
  const navigation = useNavigation();
  const {state} = useContext(Context);
  const [lists, setLists] = useState([]);
  const [loading, setLoading] = useState(false);
  const [hasNoLists, setHasNoLists] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [productList, setProductList] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [showConfirmDeleteModal, setShowConfirmDeleteModal] = useState(false);
  const [listId, setListid] = useState();

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

  const getProducts = async () => {
    setProductList(await ProductApi.getAll());
  };

  useEffect(() => {
    getLists();

    getProducts();
  }, []);

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

  const deleteButtonPress = () => {
    setShowModal(false);
    setShowConfirmDeleteModal(true);
  };

  const editButtonPress = () => {
    navigation.navigate('ListDetails', {listId});
  };

  const deleteList = async () => {
    setLoading(true);
    setShowConfirmDeleteModal(false);
    const response = await Api.delete(listId);
    if (response != 'error') {
      showMessage({
        message: 'Lista excluida com sucesso',
        type: 'success',
        icon: 'success',
      });
      setTimeout(() => {
        getLists();
      }, 4000);
    } else {
      setLoading(false);
      showMessage({
        message: 'Não foi possivel excluir a lista',
        type: 'danger',
        icon: 'danger',
      });
    }
  };

  return (
    <Container>
      {!loading && !hasNoLists && !hasError && (
        <Scroller>
          <ListOptionsComponent
            isVisible={showModal}
            deleteButtonPress={deleteButtonPress}
            editButtonPress={editButtonPress}
            onPress={() => setShowModal(false)}
          />
          <ConfirmDeleteComponent
            isVisible={showConfirmDeleteModal}
            onPress={() => setShowConfirmDeleteModal(false)}
            deleteList={deleteList}
            closeModal={() => setShowConfirmDeleteModal(false)}
          />
          <ListArea>
            {lists.map((item, i) => (
              <Card
                key={i}
                onLongPress={() => {
                  setShowModal(true);
                  setListid(item.id);
                }}>
                <InitialArea>
                  <ListName>{item.name}</ListName>
                  <ListProducts>{listProducts(item.list_product)}</ListProducts>
                </InitialArea>
                <EndArea>
                  <TotalText>{`R$ ${calcTotal(item.list_product)}`}</TotalText>
                </EndArea>
              </Card>
            ))}
          </ListArea>
        </Scroller>
      )}

      {loading && <LoadingComponent />}
      {hasError && <ErrorComponent />}
    </Container>
  );
};
