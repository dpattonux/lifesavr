import React, { Component } from "react";
import "../App.css";
import logorobot from "./lifesavrrobot.svg";
import NextButton from "./NextButton";
import MainTopBar from './MainTopBar';
import { Link } from "react-router-dom";

class Details2 extends Component {
  render() {
    return (
      <>
        {/* <div className="topbar_container">
          <div className="topbar"></div>
          <div className="navlogo">
            <img src={logo} alt="lifesavr logo" />
          </div> */}
          <MainTopBar/>
        {/* </div> */}
        <div className="robot_expenses">
          <img src={logorobot} alt="robotlogo" />
        </div>
        <div className="expenses_text_container">
          <text className="expenses_text">
            Jane, tell us about your typical monthly expenses. You can add your
            banking details or enter manually.
          </text>
        </div>
        <div className="inputcard_container">
          <div className="inputcard">
          <Link to='/detailedBudget'>
            <button className="connect_bank">Connect Your Bank Account</button>
            </Link>
            <form>
              <label className="rent_label" for="rent">
                Rent or Mortgage
              </label>
              <input type="text" placeholder="$"></input>

              <label>Credit Card Payments</label>
              <input type="text" placeholder="$"></input>

              <label>Car Payment</label>
              <input type="text" placeholder="$"></input>
                <Link to='/myBudget'>
              <NextButton />
              </Link>
            </form>
          </div>
        </div>
      </>
    );
  }
}

export default Details2;
