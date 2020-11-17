import React, {useEffect, useState} from 'react';
import {Modal} from 'react-native';
import InputComponent from '../components/Input';
import ProductApi from '../services/product';

import {
  ModalAreaItems,
  ModalItems,
  ModalTitle,
  ModalArea,
  Scroller,
  ModalButtonsArea,
  CancelButton,
  SaveItemButton,
  ModalButtonText,
  ListProductsArea,
  ProductName,
  ProductView,
} from '../assets/styles/modal';

export default ({isVisible, toggle, addItem}) => {
  const [itemName, setItemName] = useState();
  const [listName, setListName] = useState();
  const [newList, setNewList] = useState(false);
  const [products, setProducts] = useState([]);
  const [addingItens, setAddingItens] = useState(true);

  function resetState(product) {
    addItem(listName, product);
    setItemName();
    setNewList(false);
    setAddingItens(false);
  }

  const getProducts = async () => {
    setAddingItens(true);
    setProducts(await ProductApi.getAll());
  };

  useEffect(() => {
    getProducts();
  }, []);

  function filterProducts(t) {
    const filteredProducts = products.filter((product) =>
      product.name.toLowerCase().includes(t.toLowerCase()),
    );
    setProducts(filteredProducts);
  }

  return (
    <Modal visible={isVisible} animationType={'slide'} transparent={true}>
      <ModalAreaItems>
        <ModalItems>
          <ModalTitle>{newList ? 'Nova Lista' : 'Adicionar Item'}</ModalTitle>

          {!newList && (
            <ModalArea>
              <InputComponent
                placeholder="Digite o nome do item"
                value={itemName}
                onChangeText={(t) => {
                  setListName(t);
                  filterProducts(t);
                }}
              />
              <Scroller>
                <ListProductsArea>
                  {products.map((product) => (
                    <ProductView
                      key={product.id}
                      onPress={() => resetState(product)}>
                      <ProductName>{product.name}</ProductName>
                    </ProductView>
                  ))}
                </ListProductsArea>
              </Scroller>
            </ModalArea>
          )}

          {newList && (
            <ModalArea>
              <InputComponent
                placeholder="Digite o nome da lista"
                value={listName}
                onChangeText={(t) => setListName(t)}
              />

              <ModalButtonsArea>
                <SaveItemButton onPress={() => resetState()}>
                  <ModalButtonText>Nova Lista</ModalButtonText>
                </SaveItemButton>
              </ModalButtonsArea>
            </ModalArea>
          )}
        </ModalItems>
      </ModalAreaItems>
    </Modal>
  );
};
