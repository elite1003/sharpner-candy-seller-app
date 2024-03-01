import React from "react";
import AddCandyForm from "./AddCandyForm";
import AvailableCandy from "./AvailableCandy";
import AvailableCandyContextProvider from "../../store/AvailableCandyContextProvider";
const Meals = () => {
  return (
    <AvailableCandyContextProvider>
      <AddCandyForm />
      <AvailableCandy />
    </AvailableCandyContextProvider>
  );
};

export default Meals;
