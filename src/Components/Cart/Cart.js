import React from "react";

const Cart = ({ changeSideView }) => {
  return (
    <div>
      <h1>CartPage rendered</h1>
      <button
        onClick={() =>
          changeSideView('addItem')
        }
      >
        addItem
      </button>
    </div>
  );
};

export default Cart;
