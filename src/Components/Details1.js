import React, { Component } from "react";
import "../App.css";
import logorobot from "./lifesavrrobot.svg";
import NextButton from "./NextButton";
import MainTopBar from "./MainTopBar";

class Details1 extends Component {
  render() {
    return (
      <>
        {/* <div className="topbar_container">
            <div className="topbar"></div>
            <div className="navlogo">
              <img src={logo} alt="lifesavr logo" />
            </div> */}
        <MainTopBar />
        {/* </div> */}
        <div className="robot_expenses">
          <img src={logorobot} alt="robotlogo" />
        </div>
        <div className="expenses_text_container">
          <text className="welcome_details1">
            Welcome Jane Doe, Lifesavr will help you gather your financial info
            to help you become financially lit.
          </text>
        </div>
        <div className="inputcard_container">
          <div className="inputcard">
            <form>
              <label className="rent_label" for="rent">
                Net Income
              </label>
              <input type="text" placeholder="$"></input>

              <label>Location</label>
              <input type="text" placeholder=""></input>

              <label>Number of Children</label>
              <input type="text" placeholder=""></input>

              <NextButton />
            </form>
          </div>
        </div>
      </>
    );
  }
}

export default Details1;
