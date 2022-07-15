import React from "react";

const AddItem = ({ changeView }) => {
  return (
    <div>
      <h1>AddItem Page</h1>
      <button
        onClick={() =>
          changeView({ cart: true, itemDetails: false, addItem: false })
        }
      >
        {" "}
        back{" "}
      </button>
    </div>
  );
};

export default AddItem;
