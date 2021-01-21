import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./app";
import AuthService from "./serviceApp/auth_Service";
import DatabaseService from "./serviceApp/dataService";

const authService = new AuthService();
const dbService = new DatabaseService();

ReactDOM.render(
  <React.StrictMode>
    <App authService={authService} dbService={dbService} />
  </React.StrictMode>,
  document.getElementById("root")
);
