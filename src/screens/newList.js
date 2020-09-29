import React, {useState} from 'react';

import {Container, InputArea} from '../assets/styles/newList';
import styled from 'styled-components/native';

const Input = styled.TextInput`
  flex: 1;
  font-size: 16px;
  margin-left: 10px;
`;
export default () => {
  const [itemName, setItemName] = useState();
  return (
    <Container>
      <InputArea>
        <Input
          placeholder="Digite o nome do item"
          value={itemName}
          onChangeText={(t) => {
            setItemName(t);
          }}
        />
      </InputArea>
    </Container>
  );
};
