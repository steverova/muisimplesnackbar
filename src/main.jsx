import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { SnackBarProvider } from "./shared-component/snackbar/context/SnackBarContextProvider";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <SnackBarProvider>
      <App />
    </SnackBarProvider>
  </React.StrictMode>
);
