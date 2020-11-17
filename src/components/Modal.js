import React, {useEffect, useState} from 'react';
import {Modal} from 'react-native';
import InputComponent from '../components/Input';
import ProductApi from '../services/product';
import CloseIcon from '../assets/icons/close.svg';

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
  HeaderArea,
  CloseBox,
} from '../assets/styles/modal';

export default ({isVisible, toggle, addItem}) => {
  const [itemName, setItemName] = useState('');
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  function resetState() {
    setItemName();
    getProducts();
  }

  const getProducts = async () => {
    const result = await ProductApi.getAll();
    setProducts(result);
    setFilteredProducts(result);
  };

  useEffect(() => {
    getProducts();
  }, [isVisible]);

  async function filterProducts() {
    const filteredProducts = products.filter((product) =>
      product.name.toLowerCase().includes(itemName.toLowerCase()),
    );

    setFilteredProducts(filteredProducts);
  }

  return (
    <Modal visible={isVisible} animationType={'slide'} transparent={true}>
      <ModalAreaItems>
        <ModalItems>
          <HeaderArea>
            <ModalTitle>Adicionar Item</ModalTitle>
            <CloseBox>
              <CloseIcon
                width="24"
                height="24"
                fill="#000000"
                onPress={() => toggle()}
              />
            </CloseBox>
          </HeaderArea>

          <ModalArea>
            <InputComponent
              placeholder="Digite o nome do item"
              value={itemName}
              onChangeText={(t) => {
                t ? filterProducts(t) : setFilteredProducts(products);
                setItemName(t);
              }}
            />
            <Scroller>
              <ListProductsArea>
                {filteredProducts.map((product) => (
                  <ProductView
                    key={product.id}
                    onPress={() => {
                      addItem(product);
                      resetState();
                    }}>
                    <ProductName>{product.name}</ProductName>
                  </ProductView>
                ))}
              </ListProductsArea>
            </Scroller>
          </ModalArea>
        </ModalItems>
      </ModalAreaItems>
    </Modal>
  );
};
