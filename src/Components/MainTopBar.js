import React from "react";
import robot from "../img/robot.svg";
import ProfilePic from "../img/ProfilePic.jpg";

function MainTopBar(props) {
  const topstyle = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#3ad2ff",
    color: "white",
    paddingLeft: "35px",
    paddingRight: "35px",
    fontFamily: "Arimo",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "28px",
    lineHeight: "32px",
    margin: 0,
  };
  const titleStyle = {
    display: "flex",
    flexDirection: "row",
  };

  const imgStyle = {
    width: "60px",
    borderRadius: "100%",
  };
  const end ={
      display: 'flex',
      flexDirection:'row',
      justifyContent: 'flex-end',
  }

  return (
    <nav id="login" style={topstyle}>
      <div style={titleStyle}>
        <img src={robot} alt="Robot Logo" />
        <h1>LifeSavr</h1>
      </div>
      <div style={end}>
        <img src={ProfilePic} alt="Profile Pic" style={imgStyle} />
      </div>
    </nav>
  );
}

export default MainTopBar;
