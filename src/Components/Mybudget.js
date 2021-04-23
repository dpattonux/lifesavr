import React, { Component } from "react";
import SideBar from "./SideBar";
import "../App.css";
import "../css-gridstyles.css";
import incometrend from "./incometrend.svg";
import testtrans from "./testtrans.svg";
// import piechart from "./piechartmybudget.svg";
// import Piechart from "./Piechart";

class Mybudget extends Component {
  render() {
    return (
      <>
        <SideBar />
        <div className="grid-container">
          <div className="grid-item item-1">
            <div className="trans_container">
              <img width="108%" src={testtrans} alt="recent transactions"></img>
            </div>{" "}
          </div>
          <div className="grid-item item-2">
            <div className="incomebox">
              <div className="weeklydeposittext">This Week’s Deposits</div>
              <div className="greentextformoney">$650.00</div>
              <div className="currentbalance">Current Balance</div>
              <div className="incometrend">
                <img
                  height="150px"
                  width="150px"
                  viewBox=""
                  src={incometrend}
                  alt="incometrendimage"
                ></img>
              </div>
              <div className="balance_amout">$2,136.86</div>
            </div>
          </div>
          <div className="grid-item item-3">
            <div className="expense_wrapper">
              <div className="weeklyepensestext">
                This week’s upcoming expenses
              </div>
              <div className="rent_1000">$1,000</div>

              <div className="rent_payment_text">Rent</div>
            </div>
            <div className="car_200">$200</div>
            <div className="car_payment_text">Car Payment</div>
          </div>

          <div className="grid-item item-4">
            {" "}
            <div className="piecharts"></div>
          </div>
        </div>
      </>
    );
  }
}

export default Mybudget;
