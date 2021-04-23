import React, { Component } from "react";
import "../App.css";
import logorobot from "./lifesavrrobot.svg";
import NextButton from "./NextButton";
import MainTopBar from "./MainTopBar";
import { Link } from "react-router-dom";

class DetailedBudget extends Component {
  render() {
    return (
      <>
        <MainTopBar />
        <div className="robot_expenses">
          <img src={logorobot} alt="robotlogo" />
        </div>
        <div className="expenses_text_container">
          <text className="welcome_details1">
            Jane, enter your bank details.
          </text>
        </div>
        <div className="inputcard_container">
          <div className="inputcard">
            <form>
              <label style={{ marginTop: "20px" }}>Bank Name</label>
              <input type="text" placeholder=""></input>

              <label>Login</label>
              <input type="text" placeholder=""></input>

              <label>Password</label>
              <input type="text" placeholder=""></input>
              <Link to="/detailedBudget1">
                <NextButton />
              </Link>
            </form>
          </div>
        </div>
      </>
    );
  }
}

export default DetailedBudget;
