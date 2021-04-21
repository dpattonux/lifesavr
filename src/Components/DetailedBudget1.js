import React, { Component } from "react";
import "../App.css";
import logorobot from "./lifesavrrobot.svg";
import ConnectButton from "./ConnectButton";
import MainTopBar from "./MainTopBar";
import { Link } from "react-router-dom";
// import { noAuto } from "@fortawesome/fontawesome-svg-core";

class DetailedBudget1 extends Component {
  render() {
    return (
      <>
        <MainTopBar />
        {/* </div> */}
        <div className="robot_expenses">
          <img src={logorobot} alt="robotlogo" />
        </div>
        <div className="expenses_text_container">
          <text className="welcome_details1">
            
              Jane, choose your account.
            
          </text>
        </div>
        <div className="inputcard_container">
          <div className="inputcard">
            <form>
              <label style={{ marginTop: "20px" }}>Bank Name</label>
              <input type="text" placeholder="$"></input>
              <label style={{ marginTop: "20px" }}>Checking</label>{" "}
              Account*******27644
              <input
                style={{
                  position: "relative",
                  top: "-34px",
                  right: "0",
                  marginRight: "1px",
                }}
                type="checkbox"
              ></input>
              <label style={{ marginTop: "20px" }}>Savings</label>{" "}
              Account*******27644
              <input
                style={{
                  position: "relative",
                  top: "-34px",
                  right: "0",
                  marginRight: "1px",
                }}
                type="checkbox"
              ></input>
              <Link to="/myBudget">
                <ConnectButton />
              </Link>
            </form>
          </div>
        </div>
      </>
    );
  }
}

export default DetailedBudget1;
