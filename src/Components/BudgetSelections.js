import React from "react";
import "../App.css";
import MainTopBar from "./MainTopBar";
import logorobot from "./lifesavrrobot.svg";
import { Link } from "react-router-dom";

function BudgetSelection() {
  return (
    <div className="budget_selections_container">
      <MainTopBar />
      <h1>Jane, what kind of budget do you want to plan?</h1>
      <div className="main">
        
        <Link to="simpleBudget" className="selections" style={{ textDecoration: "none", color: "black" }}>
          <div className="selections_text">
            <h2>Simple Budget</h2>
            <p>
              Enter your current monthly salary and your location. LifeSavr will
              give you a breakdown of a recommended budget that you can compare
              to your current spending habits.
            </p>
          </div>
        </Link>
        
        <div className="robot">
          <img src={logorobot} alt=""></img>
        </div>
        <Link
          to="/details1"
          className="selections"
          style={{ textDecoration: "none", color: "black" }}
        >
          <div className="selections_text">
            <h2>Detailed Budget</h2>
            <p>
              Enter your typical monthly expenses and connect your bank
              accounts. LifeSavr will give you a detailed breakdown of your
              income, upcoming deductions, as well as specific areas where you
              may be overspending.
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default BudgetSelection;
