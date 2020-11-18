import React, {useState} from 'react';

export default () => {
  const [list, setList] = useState({});
  const [price, setPrice] = useState();
  const [amount, setAmount] = useState();
  const [product, setProdut] = useState();
  const [listProduct, setListProduct] = useState([]);

  function onChangeProduct(e, i) {
    const arrayState = [...listProduct];
    arrayState[i] = e.target.value;
    setListProduct(arrayState);
    setProdut(e);
  }

  function onChangeAmount(e, i) {
    setAmount(e);
  }

  function onChangePrice(e, i) {
    setPrice(e);
  }

  return (
    <Container>
      {listProduct.map((products, i) => (
        <InputArea>
          <InputComponent
            value={product}
            onChangeText={(e) => onChangeProduct(e, i)}
          />
          <InputComponent
            value={price}
            onChangeText={(e) => onChangeAmount(e, i)}
          />
          <InputComponent
            value={amount}
            onChangeText={(e) => onChangePrice(e, i)}
          />
        </InputArea>
      ))}
    </Container>
  );
};
