import React from 'react';
import ReactDOM from 'react-dom/client';
import { MuiThemeProvider } from "@mui/core"
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { theme } from "./theme/theme"
import store from "./Store/configureStore";
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MuiThemeProvider theme={theme} >
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    </MuiThemeProvider>
    
   
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
