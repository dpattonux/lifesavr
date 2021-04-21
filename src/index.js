import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
// import Details2 from "./components/Details2";
// import BudgetSelections from "./components/BudgetSelections";
// import Mybudget from "./components/Mybudget";
// import Details1 from "./components/Details1";
// import SideBar from './components/SideBar';
import { BrowserRouter } from "react-router-dom";


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    
    {/* <Details1 /> */}
    {/* <Details2 /> */}
  {/* <BudgetSelections /> */}
    {/* <Mybudget /> */}


  </React.StrictMode>,
  document.getElementById("root")
);
