import React from 'react';
import styled from 'styled-components/native';
/* Area do campo */
const InputArea = styled.View`
  width: 100%;
  height: 60px;
  background-color: #eee;
  flex-direction: column;
  border-radius: 30px;
  padding-left: 15px;
  padding-right: 15px;
  margin-bottom: 15px;
`;
const Input = styled.TextInput`
  flex: 1;
  font-size: 16px;
  margin-left: 10px;
  width: 100%;
`;

export default ({
  placeholder,
  keyboardType,
  value,
  onChangeText,
  password,
  onKeyPress,
}) => {
  return (
    <InputArea>
      <Input
        placeholder={placeholder}
        keyboardType={keyboardType}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={password}
        onKeyPress={onKeyPress}
      />
    </InputArea>
  );
};
