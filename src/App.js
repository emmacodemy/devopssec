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
import AlertNotification from "./Components/Alert";
import HistoryCart from "./Components/Pages/History Page/HistoryCart";
import HistoryCartDetails from "./Components/Pages/History Page/HistoryCartDetails/HistoryCartDetails";

function App() {
  const sessionDetails = useSelector((state) => state.sessions);

  const notificationDetails = useSelector((state) => state.notification);

  const { isLoading, isSignedUp, isSignedIn, isSignedOut } = sessionDetails;

  const { notification, notificationStatus } = notificationDetails;

  const [sideDisplay, setSideDisplay] = useState({
    cart: true,
    addItem: false,
    itemDetails: false,
  });

  const [alertDisplay, setAlertDisplay] = useState(false);

  const [alertMessage, setAlertMessage] = useState("");

  const [alertSeverity, setAlertSeverity] = useState("");

  const handleSideBar = (view) => {
    setSideDisplay((prevState) => {
      const newState = { ...prevState };
      Object.keys(newState).forEach((v) =>
        v === view ? (newState[v] = true) : (newState[v] = false)
      );
      return newState;
    });
  };

  const closeAlertMessage = () => {
    setAlertDisplay(false);
  };

  const controlAlertMessage = (message, severity) => {
    setAlertMessage(message);
    setAlertSeverity(severity);
    setAlertDisplay(true);
    setTimeout(() => {
      setAlertDisplay(false);
    }, 5000);
  };

  useEffect(() => {
    notificationStatus === 200 || 201
      ? setAlertSeverity("success")
      : setAlertSeverity("error");
    setAlertDisplay(true);
    setAlertMessage(notification);
    setTimeout(() => {
      setAlertDisplay(false);
    }, 5000);
  }, [notification]);

  return (
    <div className="App">
      {alertDisplay && (
        <AlertNotification
          message={alertMessage}
          display={closeAlertMessage}
          severity={alertSeverity}
        />
      )}
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
                alert={controlAlertMessage}
              />
            }
          >
            <Route
              index
              element={
                <ItemsPage
                  changeView={handleSideBar}
                  alert={controlAlertMessage}
                />
              }
            />
            <Route
              path="items"
              element={
                <ItemsPage
                  changeView={handleSideBar}
                  alert={controlAlertMessage}
                />
              }
            />
            <Route path="history" element={<HistoryPage />}>
              <Route index element={<HistoryCart />} />
              <Route path="/history/cart" element={<HistoryCart />} />
              <Route path="/history/cart/:id" element={<HistoryCartDetails />} />
            </Route>
            <Route path="statistics" element={<StatisticsPage />} />
          </Route>
          <Route
            path="/login"
            element={<LoginPage loading={isLoading} signedIn={isSignedIn} />}
          />
          <Route
            path="/register"
            element={<RegisterPage loading={isLoading} signedUp={isSignedUp} />}
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
