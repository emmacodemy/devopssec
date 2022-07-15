import React from "react";
import SideBar from "../../SideBar";

const ItemsPage = ({cart, details, addItem, changeView }) => {
  return (
    <div>
      <h1>ItemsPage</h1>
      <button
        onClick={() =>
          changeView({ itemDetails: true, cart: false, addItem: false })
        }
      >
        view details
      </button>
      <SideBar cart={cart} details={details} changeView={changeView} addItem={addItem} />
    </div>
  );
};

export default ItemsPage;
