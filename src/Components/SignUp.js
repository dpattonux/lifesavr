import React, { Component } from "react";
import "../App.css";
import logorobot from "./lifesavrrobot.svg";
import NextButton from "./NextButton";
import MainTopBar from "./MainTopBar";
import { Link } from "react-router-dom";

class SignUp extends Component {
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
            We just need a little information from you.
          </text>
        </div>
        <div className="inputcard_container">
          <div className="inputcard">
            <form>
              <label className="rent_label" for="firstName">
                First Name
              </label>
              <input type="text" placeholder="First Name"></input>

              <label>Last Name</label>
              <input type="text" placeholder="Last Name"></input>

              <label>Email</label>
              <input type="text" placeholder="name@email.com"></input>
              <Link to="/budgetSelection">
                <NextButton />
              </Link>
            </form>
          </div>
        </div>
      </>
    );
  }
}

export default SignUp;
