import React from "react";
import NavBar from "../Navbar/NavBar";
import { Outlet } from "react-router-dom";
import SideBar from "../SideBar";

const Main = ({ cart, details, changeView, addItem }) => {
  return (
    <div>
      <NavBar />
      <div>
        <Outlet />
      </div>
      <div>
        <SideBar
          cart={cart}
          details={details}
          changeView={changeView}
          addItem={addItem}
        />
      </div>
    </div>
  );
};

export default Main;
