import React from "react";
import MainTopBar from "./MainTopBar";

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
    weight: "100%",
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
            <a href="#" style={linkStyle}>
              My Budget
            </a>{" "}
          </li>

          <li className="highlight">
            {" "}
            <a href="#" style={linkStyle}>
              Linked Accounts
            </a>
          </li>
          <li className="highlight">
            {" "}
            <a href="#" style={linkStyle}>
              Income & Expenses
            </a>
          </li>
          <li className="highlight">
            {" "}
            <a href="#" style={linkStyle}>
              Savings
            </a>
          </li>
          <li className="highlight">
            {" "}
            <a href="#" style={linkStyle}>
              Bill Vault
            </a>
          </li>
          <li className="highlight">
            {" "}
            <a href="#" style={linkStyle}>
              Money Tips
            </a>
          </li>
          <li className="highlight">
            {" "}
            <a href="#" style={linkStyle}>
              Earn Extra Income
            </a>
          </li>
          <li className="highlight">
            {" "}
            <a href="#" style={linkStyle}>
              <i class="fad fa-power-off"></i>
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default SideBar;
