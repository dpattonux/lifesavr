import React from "react";
import MainTopBar from "./MainTopBar";
import { Link } from "react-router-dom";

function SideBar() {
  const sideStyle = {
    backgroundColor: "#1492B8",
    position: "absolute",
    height: "100%",
    width: "253px",
  };
  const listStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "space-evenly",
    listStyleType: "none",
    height: "100%",
    width: "100%",
    paddingLeft: "15px",
    paddingRight: "15px",
  };
  const linkStyle = {
    color: "white",
    textDecoration: "none",
  };

  return (
    <>
      <MainTopBar />
      <nav style={sideStyle}>
        <ul style={listStyle}>
          <li className="highlight">
            {" "}
            <Link to="/myBudget" style={linkStyle}>
              My Budget
            </Link>{" "}
          </li>

          <li className="highlight">
            {" "}
            <Link to="/" style={linkStyle}>
              Linked Accounts
            </Link>
          </li>
          <li className="highlight">
            {" "}
            <Link to="/" style={linkStyle}>
              Income & Expenses
            </Link>
          </li>
          <li className="highlight">
            {" "}
            <Link to="/" style={linkStyle}>
              Savings
            </Link>
          </li>
          <li className="highlight">
            {" "}
            <Link to="/" style={linkStyle}>
              Bill Vault
            </Link>
          </li>
          <li className="highlight">
            {" "}
            <Link to="/" style={linkStyle}>
              Money Tips
            </Link>
          </li>
          <li className="highlight">
            {" "}
            <Link to="/" style={linkStyle}>
              Earn Extra Income
            </Link>
          </li>
          <li className="highlight">
            {" "}
            <Link to="/" style={linkStyle}>
              <i class="fad fa-power-off"></i>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default SideBar;
