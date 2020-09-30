import React, {useState} from 'react';

import {
  Container,
  ListItemArea,
  ItemArea,
  Item,
  Price,
  Amount,
  AddItemArea,
  AddItemButton,
  TotalArea,
  TotalText,
  TotalValue,
  InputArea,
} from '../assets/styles/newList';

import InputComponent from '../components/Input';
import NewListIcon from '../assets/icons/plus.svg';
export default () => {
  const [itemName, setItemName] = useState();
  const [itemPrice, setItemPrice] = useState();
  const [itemAmount, setItemAmount] = useState();
  const [total, setTotal] = useState();
  return (
    <Container>
      <ListItemArea>
        <ItemArea>
          <Item value={itemName} />
          <Price value={itemPrice} placeholder="Preço" />
          <Amount value={itemAmount} placeholder="Quantidade" />
          <TotalArea>
            <TotalValue>{total}</TotalValue>
          </TotalArea>
        </ItemArea>
      </ListItemArea>

      <AddItemArea>
        <InputArea>
          <InputComponent />
        </InputArea>

        <AddItemButton>
          <NewListIcon width="25" heigth="25" fill="#000000" />
        </AddItemButton>
      </AddItemArea>
    </Container>
  );
};
