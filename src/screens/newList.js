import React, {useState, useEffect, useContext} from 'react';

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
  TotalList,
  TotalValueArea,
  TotalValueText,
  ListNameArea,
  ListNameText,
} from '../assets/styles/newList';

import NewListIcon from '../assets/icons/plus.svg';
import ModalComponent from '../components/Modal';
import {Context} from '../contexts/context';

export default () => {
  const [items, setItems] = useState([]);
  const [totalList, setTotalList] = useState();
  const [showModal, setshowModal] = useState(false);
  const {state} = useContext(Context);
  const [listName, setListName] = useState('');
  useEffect(() => {
    calcTotalList();
    setshowModal(true);
  }, []);

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

  const addItem = (itemName, itemPrice, itemAmount, listName) => {
    const listProduct = {user: {id: state.id}, products: [], name: ''};
    /* const item = {
      name: itemName,
      price: itemPrice,
      amount: itemAmount,
      total: calcTotal(itemPrice, itemAmount),
    };
    arrayState.push(item);
    calcTotalList();
    setItems(arrayState);
     */
    if (!itemName && !itemPrice && !itemAmount && listName) {
      listProduct.name = listName;
      setListName(listName);
    }
    toggle();
  };

  return (
    <Container>
      <ModalComponent isVisible={showModal} toggle={toggle} addItem={addItem} />

      <ListNameArea>
        <ListNameText>{listName}</ListNameText>

        <TotalValueArea>
          <TotalList>Valor Total da Lista: </TotalList>
          <TotalValueText> R$ {totalList}</TotalValueText>
        </TotalValueArea>
      </ListNameArea>

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
