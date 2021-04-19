import React, { Component } from "react";
import MainTopBar from "./MainTopBar";
import SideBar from "./SideBar";

class Mybudget extends Component {
  render() {
    return (
      <>
        <SideBar />
        <MainTopBar />
      </>
    );
  }
}

export default Mybudget;
