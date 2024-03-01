import classes from "./CandyItemForm.module.css";

const CandyItemForm = (props) => {
  const btnClickHandler = (value) => {
    props.onAddToCart(value);
  };
  return (
    <form className={classes.form}>
      <button
        onClick={(e) => {
          e.preventDefault();
          btnClickHandler(1);
        }}
      >
        buy 1
      </button>
      <button
        onClick={(e) => {
          e.preventDefault();
          btnClickHandler(2);
        }}
      >
        buy 2
      </button>
      <button
        onClick={(e) => {
          e.preventDefault();
          btnClickHandler(3);
        }}
      >
        buy 3
      </button>
    </form>
  );
};

export default CandyItemForm;
