import React, { useContext } from "react";
import classes from "./AvailableCandy.module.css";
import CandyItem from "./CandyItem/CandyItem";
import Card from "../UI/Card";
import AvailableCandyContext from "../../store/available-candy-context";

const AvailableCandy = () => {
  const AvailableCandyCtx = useContext(AvailableCandyContext);
  const { items } = AvailableCandyCtx;
  const candysList = items.map((candy) => (
    <CandyItem
      id={candy.id}
      key={candy.id}
      name={candy.name}
      price={candy.price}
      description={candy.description}
    />
  ));
  return (
    <section className={classes.candy}>
      <Card>
        <ul>{candysList}</ul>
      </Card>
    </section>
  );
};

export default AvailableCandy;
