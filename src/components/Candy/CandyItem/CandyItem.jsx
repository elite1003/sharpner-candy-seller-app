import React, { useContext } from "react";
import CandyItemForm from "./CandyItemForm";
import classes from "./CandyItem.module.css";
import CartContext from "../../../store/cart-context";

const CandyItem = (props) => {
  const cartCtx = useContext(CartContext);
  const price = `Rs ${props.price.toFixed(2)}`;

  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id: props.id,
      price: props.price,
      amount: +amount,
      name: props.name,
    });
  };
  return (
    <li className={classes.candy}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <CandyItemForm onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
};

export default CandyItem;
