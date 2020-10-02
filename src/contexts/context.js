import React, {createContext, useReducer} from 'react';
import {Reducer} from '../reducers/reducer';

export const Context = createContext();

export default ({children}) => {
  const initialState = [];
  const [state, dispatch] = useReducer(Reducer, initialState);

  return (
    <Context.Provider value={{state, dispatch}}>{children}</Context.Provider>
  );
};
