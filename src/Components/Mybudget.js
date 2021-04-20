import React, { Component } from "react";
import SideBar from "./SideBar";
import "../App.css";
import "../css-gridstyles.css";

class Mybudget extends Component {
  render() {
    return (
      <>
        <SideBar />
        <div className="grid-container">
          <div className="grid-item item-1">Transactions </div>
          <div className="grid-item item-2"> Income </div>
          <div className="grid-item item-3"> Expenses</div>
          <div className="grid-item item-4"> Pie Chart </div>
        </div>
      </>
    );
  }
}

export default Mybudget;
