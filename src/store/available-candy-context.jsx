import React from "react";

const AvailableCandyContext = React.createContext({
  items: [],
  addItem: (item) => {},
});

export default AvailableCandyContext;
