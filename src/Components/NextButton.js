import React from "react";

function NextButton() {
  const nextStyle = {
    color: "white",
    backgroundColor: "#1492BB",
    borderRadius: "200px",
    height: "36px",
    width: "96px",
    fontFamily: "Arimo",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "14px",
    lineHeight: "28px",
    border: "none",
    marginBottom: 20,
  };

  return <button style={nextStyle}>Next</button>;
}

export default NextButton;
