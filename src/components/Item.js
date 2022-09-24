import React from "react";

function Item({ name, category }) {

  const [item, setItem] = React.useState(false);
  const appClass = item ? "in-cart" : "";

  function handleAddToCartClick() {
    setItem((item) => !item);
  }

  return (
    <li className={appClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleAddToCartClick}>{item ? "Remove from Cart" : "Add to Cart"}</button>
    </li>
  );
}

export default Item;
