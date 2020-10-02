import React, {useState, useEffect} from 'react';

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
  TotaListArea,
  TotalList,
  TotalValorText,
} from '../assets/styles/newList';

import NewListIcon from '../assets/icons/plus.svg';
import ModalComponent from '../components/Modal';

export default () => {
  const [items, setItems] = useState([]);
  const [totalList, setTotalList] = useState();

  const [showModal, setshowModal] = useState(false);

  useEffect(() => {
    calcTotalList();
  });

  function handleClick(id) {
    console.log(id);
  }

  function calcTotal(price, amount) {
    price = price.toString().replace(/,/, '.');
    const total = parseFloat(price) * amount;
    return total;
  }

  function calcTotalList() {
    let total = 0;
    items.forEach((item) => {
      total += parseFloat(item.total);
    });

    setTotalList(total);
  }

  const toggle = () => {
    setshowModal(!showModal);
  };

  const addItem = (itemName, itemPrice, itemAmount) => {
    const arrayState = [...items];
    const item = {
      name: itemName,
      price: itemPrice,
      amount: itemAmount,
      total: calcTotal(itemPrice, itemAmount),
    };
    arrayState.push(item);
    calcTotalList();
    setItems(arrayState);
    toggle();
  };

  return (
    <Container>
      <ModalComponent isVisible={showModal} toggle={toggle} addItem={addItem} />
      <TotaListArea>
        <TotalList>Valor Total da Lista: </TotalList>
        <TotalValorText> R$ {totalList}</TotalValorText>
      </TotaListArea>
      <ListItemArea>
        {items.map((item, index) => (
          <ItemArea key={index}>
            <ItemNameArea onLongPress={() => handleClick(index)}>
              <ItemName>{item.name}</ItemName>
            </ItemNameArea>

            <ItemNameArea>
              <Price>R$ {item.price}</Price>
            </ItemNameArea>

            <ItemNameArea>
              <Amount>{item.amount}</Amount>
            </ItemNameArea>

            <TotalArea>
              <TotalValue>
                {'R$ ' +
                  item.total
                    .toFixed(2) // casas decimais
                    .replace('.', ',')
                    .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')}
              </TotalValue>
            </TotalArea>
          </ItemArea>
        ))}
      </ListItemArea>

      <AddItemArea>
        <AddItemButton onPress={() => setshowModal(true)}>
          <NewListIcon width="25" heigth="25" fill="#000000" />
        </AddItemButton>
      </AddItemArea>
    </Container>
  );
};
