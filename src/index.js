import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import App from "./App";
// // import Details2 from "./Components/Details2";
import SimpleBudget from "./Components/SimpleBuget";
// import Piechart from "./Components/Piechart";

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Details2 /> */}
    {<SimpleBudget />}
    {/* {<Piechart />} */}
  </React.StrictMode>,
  document.getElementById("root")
);
