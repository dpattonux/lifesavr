import React, { Component } from "react";
import "../App.css";
import logorobot from "./lifesavrrobot.svg";
import NextButton from "./NextButton";
import MainTopBar from "./MainTopBar";

class DetailedBudget extends Component {
  render() {
    return (
      <>
        <MainTopBar />
        {/* </div> */}
        <div className="robot_expenses">
          <img src={logorobot} alt="robotlogo" />
        </div>
        <div className="expenses_text_container">
          <text>
            <h1
              style={{
                color: "black",
                fontFamily: "Arimo",
                fontSize: "28px",
              }}
            >
              Jane, enter your bank details.
            </h1>
          </text>
        </div>
        <div className="inputcard_container">
          <div className="inputcard">
            <form>
              <label style={{ marginTop: "20px" }}>Bank Name</label>
              <input type="text" placeholder="$"></input>

              <label>Login</label>
              <input type="text" placeholder=""></input>

              <label>Password</label>
              <input type="text" placeholder=""></input>

              <NextButton />
            </form>
          </div>
        </div>
      </>
    );
  }
}

export default DetailedBudget;
