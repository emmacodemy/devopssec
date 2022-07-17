import React from "react";
import ItemHeader from "./ItemHeader"

const ItemsPage = ({changeView }) => {
  return (
    <div>
      <ItemHeader />
      <h1>ItemsPage</h1>
      <button
        onClick={() =>
          changeView('itemDetails')
        }
      >
        view details
      </button>
    </div>
  );
};

export default ItemsPage;
