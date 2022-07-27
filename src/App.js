import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
import "./App.css";
import HistoryPage from "./Components/Pages/History Page/HistoryPage";
import StatisticsPage from "./Components/Pages/Statistics Page/StatisticsPage";
import ItemsPage from "./Components/Pages/Items Page/ItemsPage";
import LoginPage from "./Components/Sessions/LoginPage";
import RegisterPage from "./Components/Sessions/RegisterPage";
import Main from "./Components/Pages/Main";
import Alert from "./Components/Alert";

function App() {
  const sessionDetails = useSelector((state) => state.sessions);

  const { isLoading, isSignedUp, isSignedIn, isSignedOut, message } =
    sessionDetails;

  const [sideDisplay, setSideDisplay] = useState({
    cart: true,
    addItem: false,
    itemDetails: false,
  });

  const [alertDisplay, setAlertDisplay] = useState(false);

  const [alertMessage, setAlertMessage] = useState("");

  const handleSideBar = (view) => {
    setSideDisplay((prevState) => {
      const newState = { ...prevState };
      Object.keys(newState).forEach((v) =>
        v === view ? (newState[v] = true) : (newState[v] = false)
      );
      return newState;
    });
  };

  const controlAlertMessage = (message) => {
    setAlertMessage(message);
  };

  useEffect(() => {
    setAlertDisplay(true);
    setTimeout(() => {
      setAlertDisplay(false);
    }, 5000);
  }, [alertMessage]);

  return (
    <div className="App">
      <Alert message={alertMessage} display={alertDisplay} />
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
                signedIn={isSignedIn}
                signedOut={isSignedOut}
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
          <Route
            path="/login"
            element={
              <LoginPage
                loading={isLoading}
                signedIn={isSignedIn}
                alert={controlAlertMessage}
                message={message}
              />
            }
          />
          <Route
            path="/register"
            element={
              <RegisterPage
                loading={isLoading}
                signedUp={isSignedUp}
                alert={controlAlertMessage}
                message={message}
              />
            }
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
