import React, { createContext, useContext, useReducer } from "react";

export const StateContent = createContext();

export const StateProvider = ({ reducer, initialState, children }) => {
  return (
    <StateContent.Provider value={useReducer(reducer, initialState)}>
      {children}
    </StateContent.Provider>
  );
};

export const useStateValue = () => useContext(StateContent);
