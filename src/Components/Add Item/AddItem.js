import React from "react";

const AddItem = ({ changeView }) => {
  return (
    <div>
      <h1>AddItem Page</h1>
      <button
        onClick={() =>
          changeView('cart')
        }
      >
        {" "}
        back{" "}
      </button>
    </div>
  );
};

export default AddItem;
