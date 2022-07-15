import React from "react";
import SideBar from "../../SideBar";

const StatisticsPage = ({ cart, details, addItem, changeView }) => {
  return (
    <div>
      StatisticsPage
      <SideBar
        cart={cart}
        details={details}
        changeView={changeView}
        addItem={addItem}
      />
    </div>
  );
};
export default StatisticsPage;
