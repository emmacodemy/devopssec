import React from "react";

const ItemsPage = ({changeView }) => {
  return (
    <div>
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
