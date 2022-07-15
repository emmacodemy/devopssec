import React from "react";
import AddItem from "./Add Item/AddItem";
import Cart from "./Cart/Cart";
import ItemDetails from "./Item Details/ItemDetails";

const SideBar = ({cart, addItem, details, changeView}) => {

  return <div>
    {
        cart && <Cart changeSideView={changeView} />
    }
    {
        addItem && <AddItem changeView={changeView}  />
    }
    {
        details && <ItemDetails />
    }
  </div>;
};

export default SideBar;
