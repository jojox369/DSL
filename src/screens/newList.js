import React, {useState} from 'react';

import {
  Container,
  ListItemArea,
  ItemArea,
  ItemNameArea,
  ItemName,
  Price,
  Amount,
  AddItemArea,
  AddItemButton,
  TotalArea,
  TotalValue,
  InputArea,
  FinishListIconArea,
} from '../assets/styles/newList';

import InputComponent from '../components/Input';
import NewListIcon from '../assets/icons/plus.svg';

export default () => {
  const [items, setItems] = useState([]);
  const [itemName, setItemName] = useState();

  const [itemTotal, setItemTotal] = useState('R$ 0,00');

  function handleClick(id) {
    console.log(id);
    calcTotal(id);
  }

  function priceChanged(text, id) {
    //text.toString().replace(',', '.');
    calcTotal(id);
  }

  function amountChanged(text, id) {}

  function calcTotal(id) {
    for (const item of items) {
      if (item.id === id) {
        if (item.price && item.amount) {
          const total = parseFloat(item.price) * item.amount;
          const totalView =
            'R$ ' +
            total
              .toFixed(2) // casas decimais
              .replace('.', ',')
              .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
          setItemTotal(totalView);
        }
      }
    }
  }

  const addItem = () => {
    if (itemName) {
      setItems([
        ...items,
        {
          id: items.length,
          name: itemName,
          price: '',
          amount: '',
          total: '',
        },
      ]);
      setItemName('');
    }
  };

  return (
    <Container>
      <ListItemArea>
        {items.map((item) => (
          <ItemArea key={item.id}>
            <ItemNameArea onLongPress={() => handleClick(item.id)}>
              <ItemName>{item.name}</ItemName>
            </ItemNameArea>
            <Price
              value={item.price}
              placeholder="Preço"
              keyboardType="numeric"
              onChangeText={(t) => priceChanged(t, item.id)}
            />
            <Amount
              value={item.amount}
              placeholder="Quantidade"
              onChangeText={(t) => amountChanged(t, item.id)}
              keyboardType="numeric"
            />
            <TotalArea>
              <TotalValue>{itemTotal}</TotalValue>
            </TotalArea>
          </ItemArea>
        ))}
      </ListItemArea>

      <AddItemArea>
        <InputArea>
          <InputComponent
            placeholder="Digite o nome do item"
            value={itemName}
            onChangeText={(t) => {
              setItemName(t);
            }}
          />
        </InputArea>

        <AddItemButton onPress={addItem}>
          <NewListIcon width="25" heigth="25" fill="#000000" />
        </AddItemButton>
      </AddItemArea>
    </Container>
  );
};
