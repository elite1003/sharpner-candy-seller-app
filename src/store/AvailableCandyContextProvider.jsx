import React, { useReducer } from "react";
import AvailableCandyContext from "./available-candy-context";

const defaultState = {
  items: [],
};

const availableCandyReducer = (state, action) => {
  if (action.type === "ADD") {
    const updatedItems = state.items.concat(action.item);
    return {
      items: updatedItems,
    };
  }
  return defaultState;
};

const AvailableCandyContextProvider = (props) => {
  const [availableCandyState, dispatchAvailableCandyAction] = useReducer(
    availableCandyReducer,
    defaultState
  );

  const addAvailableCandyHandler = (item) => {
    dispatchAvailableCandyAction({ type: "ADD", item: item });
  };

  const availableCandyContext = {
    items: availableCandyState.items,
    addItem: addAvailableCandyHandler,
  };
  return (
    <AvailableCandyContext.Provider value={availableCandyContext}>
      {props.children}
    </AvailableCandyContext.Provider>
  );
};

export default AvailableCandyContextProvider;
