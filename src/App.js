import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
import "./App.css";
import HistoryPage from "./Components/Pages/History Page/HistoryPage";
import StatisticsPage from "./Components/Pages/Statistics Page/StatisticsPage";
import ItemsPage from "./Components/Pages/Items Page/ItemsPage";
import LoginPage from "./Components/Sessions/LoginPage";
import RegisterPage from "./Components/Sessions/RegisterPage";
import Main from "./Components/Pages/Main";

function App() {
  const [sideDisplay, setSideDisplay] = useState({
    cart: true,
    addItem: false,
    itemDetails: false,
  });

  const handleSideBar = (view) => {
    setSideDisplay((prevState) => {
      const newState = { ...prevState };
      Object.keys(newState).forEach((v) =>
        v === view ? (newState[v] = true) : (newState[v] = false)
      );
      return newState;
    });
  };

  const sessionDetails = useSelector((state) => state.sessions);

  const { isLoading, isSignedUp, isSignedIn, message } = sessionDetails

  return (
    <div className="App">
      <div>
        <Routes>
          <Route
            path="/"
            exact
            element={
              <Main
                cart={sideDisplay.cart}
                details={sideDisplay.itemDetails}
                addItem={sideDisplay.addItem}
                changeView={handleSideBar}
              />
            }
          >
            <Route index element={<ItemsPage changeView={handleSideBar} />} />
            <Route
              path="items"
              element={<ItemsPage changeView={handleSideBar} />}
            />
            <Route path="history" element={<HistoryPage />} />
            <Route path="statistics" element={<StatisticsPage />} />
          </Route>
          <Route path="/login" element={<LoginPage loading={isLoading} signedIn={isSignedIn} />} />
          <Route path="/register" element={<RegisterPage loading={isLoading} signedUp={isSignedUp} />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
