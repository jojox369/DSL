import React, {useState, useContext, useEffect} from 'react';
import {
  useNavigation,
  useRoute,
  useFocusEffect,
} from '@react-navigation/native';
import {showMessage} from 'react-native-flash-message';
import {
  Container,
  ListItemArea,
  ItemArea,
  ItemNameArea,
  ItemName,
  AddItemArea,
  AddItemButton,
  ListNameArea,
  ListNameText,
  FinishListArea,
  FinishListText,
} from '../assets/styles/newList';

import NewListIcon from '../assets/icons/plus.svg';
import ModalComponent from '../components/Modal';
import ModalNewList from '../components/NewList';
import LoadingComponent from '../components/Loading';

import {Context} from '../contexts/context';
import Api from '../services/list';

export default () => {
  const navigation = useNavigation();
  const [products, setProducts] = useState([]);
  const [productsName, setProductsName] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [showListNameModal, setShowListNameModal] = useState(false);
  const {state} = useContext(Context);
  const [listName, setListName] = useState('');
  const [newList, setNewList] = useState(true);
  const [loading, setLoading] = useState(false);

  const reset = () => {
    setProducts([]);
    setProductsName([]);
    setShowModal(false);
    setListName('');
    setNewList(true);
    setLoading(false);
  };

  const toggle = () => {
    setShowModal(!showModal);
  };

  const addItem = (product) => {
    const arrayState = [...products];
    const productsNameState = [...productsName];
    arrayState.push({id: product.id, amount: 0, price: 0});
    productsNameState.push(product.name);
    setProducts(arrayState);
    setProductsName(productsNameState);
  };

  const addNewList = async () => {
    if (listName === '') {
      showMessage({
        message: 'Insira o nome da lista',
        type: 'warning',
        icon: 'warning',
      });
    } else if (products.length === 0) {
      showMessage({
        message: 'Insira pelo menos um produto na lista',
        type: 'warning',
        icon: 'warning',
      });
    } else {
      setLoading(true);

      const listProduct = {
        user: {id: state.id},
        products: products,
        name: listName,
      };

      const request = await Api.save(listProduct);

      if (request !== 'error') {
        showMessage({
          message: 'Lista cadastrada com sucesso',
          type: 'success',
          icon: 'success',
        });
        setTimeout(() => {
          navigation.reset({routes: [{name: 'Home'}]});
        }, 4000);
      } else {
        showMessage({
          message: 'Não foi possivel cadastrar a nova lista',
          type: 'danger',
          icon: 'danger',
        });
      }
    }
  };

  return (
    <Container>
      {!loading && (
        <Container>
          <ModalComponent
            isVisible={showModal}
            toggle={toggle}
            addItem={addItem}
          />

          <ModalNewList
            isVisible={showListNameModal}
            onChangeText={(t) => setListName(t)}
            listName={listName}
            onPress={() => {
              setNewList(false);
              setShowListNameModal(false);
            }}
          />

          <ListNameArea>
            <ListNameText>{listName}</ListNameText>
            <FinishListArea onPress={() => addNewList()}>
              <FinishListText>Finalizar Lista</FinishListText>
            </FinishListArea>
          </ListNameArea>

          <ListItemArea>
            {productsName.map((name, index) => (
              <ItemArea key={index}>
                <ItemNameArea>
                  <ItemName>{name}</ItemName>
                </ItemNameArea>
              </ItemArea>
            ))}
          </ListItemArea>

          <AddItemArea>
            <AddItemButton
              onPress={() =>
                newList ? setShowListNameModal(true) : setShowModal(true)
              }>
              <NewListIcon width="25" heigth="25" fill="#000000" />
            </AddItemButton>
          </AddItemArea>
        </Container>
      )}
      {loading && <LoadingComponent />}
    </Container>
  );
};
