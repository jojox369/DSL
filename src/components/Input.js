import React from 'react';
import styled from 'styled-components/native';
/* Area do campo */
const InputArea = styled.View`
  width: 100%;
  height: 60px;
  background-color: #ffffff;
  flex-direction: row;
  border-radius: 30px;
  padding-left: 15px;
  padding-right: 15px;
  align-items: center;
  margin-bottom: 15px;
`;
const Input = styled.TextInput`
  flex: 1;
  font-size: 16px;
  margin-left: 10px;
`;

export default ({placeholder, keyboardType, value, onChangeText}) => {
  return (
    <InputArea>
      <Input
        placeholder={placeholder}
        keyboardType={keyboardType}
        value={value}
        onChangeText={onChangeText}
      />
    </InputArea>
  );
};
