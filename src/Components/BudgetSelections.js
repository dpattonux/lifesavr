import React from "react";
import "../App.css";
import MainTopBar from "./MainTopBar";
import logorobot from "./lifesavrrobot.svg";
import { Link } from "react-router-dom";

function BudgetSelection() {
  return (
    <div className="budget_selections_container">
      <MainTopBar />
      <h1>Jane, how can Lifesavr help you?</h1>
      <div className="main">
        
        <Link to="simpleBudget" className="selections" style={{ textDecoration: "none", color: "black" }}>
          <div className="selections_text">
            <h2>Cost of Living Analysis</h2>
            <br />
            <p>
              Enter your location and monthly bills. Lifesavr will provide a
              breakdown of your expenses and compare it to the average cost of
              living in your area.
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
            <h2>Detailed Financial Overview</h2>
            <br />
            <p>
              Enter your monthly bills and connect your bank account. Lifesavr
              will track your upcoming debits and deposits, show your weekly
              income trends, and provide a cost of living analysis
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default BudgetSelection;
