import React, { useEffect, useState, useContext } from "react";
import Input from "../UI/Input";
import Card from "../UI/Card";
import Button from "../UI/Button";
import classes from "./AddCandyForm.module.css";
import AvailableCandyContext from "../../store/available-candy-context";

const AddCandyForm = (props) => {
  const [candyDescription, setCandyDescription] = useState("");
  const [sellingPrice, setSellingPrice] = useState("");
  const [candyName, setCandyName] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);
  const AvailableCandyCtx = useContext(AvailableCandyContext);

  useEffect(() => {
    const id = setTimeout(() => {
      setIsFormValid(
        candyDescription.trim().length > 0 &&
          sellingPrice.trim().length > 0 &&
          candyName.trim().length > 0
      );
    }, 500);
    return () => {
      clearTimeout(id);
    };
  }, [candyName, candyDescription, sellingPrice]);
  const candyDescriptionInputChangeHandler = (e) => {
    setCandyDescription(e.target.value);
  };
  const sellingPriceInputChangeHandler = (e) => {
    setSellingPrice(e.target.value);
  };
  const candyNameInputChangeHandler = (e) => {
    setCandyName(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (isFormValid) {
      AvailableCandyCtx.addItem({
        id: Math.random().toString(),
        name: candyName,
        price: +sellingPrice,
        description: candyDescription,
      });
      setCandyDescription("");
      setSellingPrice("");
      setCandyName("");
    }
  };
  return (
    <section className={classes.addProduct}>
      <Card>
        <form onSubmit={submitHandler}>
          <Input
            onChange={candyNameInputChangeHandler}
            value={candyName}
            type="text"
            id="candyName"
            label="Candy Name"
          />
          <Input
            onChange={sellingPriceInputChangeHandler}
            value={sellingPrice}
            type="number"
            id="sellingPrice"
            label="Selling Price"
          />
          <Input
            onChange={candyDescriptionInputChangeHandler}
            value={candyDescription}
            type="text"
            id="candyDesc"
            label="Candy Description"
          />
          <Button type="submit">Add Product</Button>
        </form>
      </Card>
    </section>
  );
};

export default AddCandyForm;
