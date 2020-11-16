import React, {createContext, useReducer, useEffect} from 'react';
import {UserReducer} from '../reducers/reducer';

export const Context = createContext();

export default ({children}) => {
  const initialState = {id: 0, name: '', email: ''};
  const [state, dispatch] = useReducer(UserReducer, initialState);

  return (
    <Context.Provider value={{state, dispatch}}>{children}</Context.Provider>
  );
};
