import React, {useEffect, useState} from 'react';
import {
  Container,
  InputArea,
  Scroller,
  Card,
  ProductNameArea,
  ProductNameText,
  InputRange,
  TotalListArea,
  TotalListText,
  FinishEditingButton,
  NewItemButton,
  HeaderArea,
  TotalProductArea,
  TotalProductText,
  Label,
} from '../assets/styles/listDetails';
import InputComponent from '../components/Input';
import Api from '../services/list';
import ProductApi from '../services/product';
import {showMessage} from 'react-native-flash-message';
import NewProductModal from '../components/Modal';
import DeleteItemIcon from '../assets/icons/close.svg';
import NewProductIcon from '../assets/icons/plus.svg';
import FinishEditinIcon from '../assets/icons/check.svg';
import {useNavigation} from '@react-navigation/native';
import LoadingComponent from '../components/Loading';

export default ({route}) => {
  const navigation = useNavigation();
  const {listId} = route.params;
  const [list, setList] = useState({});
  const [listProduct, setListProduct] = useState([]);
  const [products, setProducts] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);

  const getList = async () => {
    const response = await Api.getById(listId);
    if (response !== 'error') {
      setList(response);

      setListProduct(response.list_product);
    } else {
      showMessage({
        message: 'Erro ao carregar a lista',
        type: 'danger',
        icon: 'danger',
      });
    }
  };

  const getProducts = async () => {
    setProducts(await ProductApi.getAll());
  };

  useEffect(() => {
    getList();
    getProducts();
  }, []);

  function onChangeAmount(t, i) {
    const arrayState = [...listProduct];
    arrayState[i].amount = t;
    setListProduct(arrayState);
  }

  function onChangePrice(t, i) {
    const arrayState = [...listProduct];
    arrayState[i].price = t;
    setListProduct(arrayState);
  }

  const findName = (id) => {
    let name;
    products.forEach((product) => {
      if (product.id === id) {
        name = product.name;
      }
    });

    return name;
  };

  const addItem = (product) => {
    const arrayState = [...listProduct];

    arrayState.push({product_id: product.id, amount: 0, price: 0});

    setListProduct(arrayState);
  };

  const removeItem = (index) => {
    const arrayState = [...listProduct];
    const newArr = arrayState
      .map((product, i) => {
        if (i !== index) {
          return product;
        }
      })
      .filter((product) => product !== undefined);
    setListProduct(newArr);
  };

  const calcTotal = (price, amount) => {
    amount = parseInt(amount);

    if (price && amount) {
      calcListTotal();
      price = price.toString().replace(/,/, '.');
      return parseFloat(price) * amount;
    } else {
      return '0,00';
    }
  };

  const calcListTotal = () => {
    let response;
    let total = 0;
    listProduct.forEach((product) => {
      if (product.price && product.amount) {
        const price = product.price.toString().replace(/,/, '.');

        total += parseFloat(price) * product.amount;

        response = total.toString().replace('.', ',');
      }
    });

    return response ? response : '0,00';
  };

  const finishEditing = async () => {
    setLoading(true);
    list.list_product = listProduct;
    listProduct.forEach((product) => {
      product.price = product.price.toString().replace(/,/, '.');
      product.price = parseFloat(product.price);
    });

    const products = listProduct.map((product) => {
      return {
        id: product.product_id,
        amount: product.amount,
        price: product.price,
      };
    });

    const data = {name: list.name, products};

    const response = await Api.update(listId, data);

    if (response !== 'error') {
      setList(response);
      showMessage({
        message: 'Lista Atualizada com sucesso',
        type: 'success',
        icon: 'success',
      });
      setTimeout(() => {
        navigation.navigate('Home');
      }, 4000);
    } else {
      showMessage({
        message: 'Erro ao tentar atualizar a lista',
        type: 'danger',
        icon: 'danger',
      });
    }
  };

  return (
    <Container>
      {!loading && (
        <HeaderArea>
          <FinishEditingButton onPress={finishEditing}>
            <FinishEditinIcon width="25" height="25" fill="#ffffff" />
          </FinishEditingButton>

          <NewItemButton onPress={() => setShowModal(true)}>
            <NewProductIcon width="25" height="25" fill="#ffffff" />
          </NewItemButton>

          <TotalListArea>
            <TotalListText>Total: R$ {calcListTotal()}</TotalListText>
          </TotalListArea>
        </HeaderArea>
      )}

      {!loading && (
        <Scroller>
          <NewProductModal
            addItem={addItem}
            isVisible={showModal}
            toggle={() => setShowModal(false)}
          />
          {listProduct.map((product, i) => (
            <Card key={i}>
              <ProductNameArea>
                <ProductNameText>
                  {findName(product.product_id)}{' '}
                </ProductNameText>
                {/* <DeleteItemIcon
                width="25"
                height="25"
                fill="#f32013"
                onPress={() => removeItem(i)}
              /> */}
              </ProductNameArea>
              <InputArea>
                <InputRange>
                  <Label>Preço</Label>
                  <InputComponent
                    value={product.price === 0 ? '' : product.price.toString()}
                    onChangeText={(t) => {
                      onChangePrice(t, i);
                      calcTotal(product.price, product.amount);
                    }}
                    keyboardType="numeric"
                    placeholder="Digite o preço"
                  />
                </InputRange>

                <InputRange>
                  <Label>Quantidade</Label>
                  <InputComponent
                    value={
                      product.amount === 0 ? '' : product.amount.toString()
                    }
                    onChangeText={(t) => {
                      onChangeAmount(t, i);
                      calcTotal(product.price, product.amount);
                    }}
                    keyboardType="numeric"
                    placeholder="Digite a quantidade"
                  />
                </InputRange>
              </InputArea>

              <TotalProductArea>
                <TotalProductText>
                  Total: R$ {calcTotal(product.price, product.amount)}
                </TotalProductText>
              </TotalProductArea>
            </Card>
          ))}
        </Scroller>
      )}
      {loading && <LoadingComponent />}
    </Container>
  );
};
