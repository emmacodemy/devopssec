import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./Components/Navbar/NavBar";
import HistoryPage from "./Components/Pages/History Page/HistoryPage";
import StatisticsPage from "./Components/Pages/Statistics Page/StatisticsPage";
import ItemsPage from "./Components/Pages/Items Page/ItemsPage";
import LoginPage from "./Components/Sessions/LoginPage";
import RegisterPage from "./Components/Sessions/RegisterPage";
// import SideBar from "./Components/SideBar";
// import AddItem from "./Components/Add Item/AddItem";
// import Cart from "./Components/Cart/Cart";
// import ItemDetails from "./Components/Item Details/ItemDetails";

function App() {
  const [sideDisplay, setSideDisplay] = useState({
    cart: true,
    addItem: false,
    itemDetails: false,
  });

  const handleSideBar = (view) => {
    setSideDisplay(view);
  };
  return (
    <div className="App">
      <div>
        <Routes>
          <Route path="/" exact element={<NavBar />}>
            <Route
              index
              element={
                <ItemsPage
                  changeView={handleSideBar}
                  cart={sideDisplay.cart}
                  details={sideDisplay.itemDetails}
                  addItem={sideDisplay.addItem}
                />
              }
            />
            <Route
              path="items"
              element={
                <ItemsPage
                  changeView={handleSideBar}
                  cart={sideDisplay.cart}
                  details={sideDisplay.itemDetails}
                  addItem={sideDisplay.addItem}
                />
              }
            />
            <Route
              path="history"
              element={
                <HistoryPage
                  cart={sideDisplay.cart}
                  details={sideDisplay.itemDetails}
                  addItem={sideDisplay.addItem}
                  changeView={handleSideBar}
                />
              }
            />
            <Route
              path="stat"
              element={
                <StatisticsPage
                  cart={sideDisplay.cart}
                  details={sideDisplay.itemDetails}
                  addItem={sideDisplay.addItem}
                  changeView={handleSideBar}
                />
              }
            />
          </Route>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
      </div>
      {/* <div>
        <SideBar
          cart={sideDisplay.cart}
          details={sideDisplay.itemDetails}
          addItem={sideDisplay.addItem}
          changeView={handleSideBar}
        />
      </div> */}
    </div>
  );
}

export default App;
