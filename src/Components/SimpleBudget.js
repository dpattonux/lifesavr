import React from "react";
import "../App.css";
// import logo from "./lifesavrlogo.svg";
import MainTopBar from "./MainTopBar";
import { Link } from "react-router-dom";

class SimpleBudget extends React.Component {
  state = {
    rent: "",
    groceries: "",
    restaurants: "",
    transportation: "",
    utilities: "",
    leisure: "",
    gas: "",
  };
  handleRentChange = (event) => {
    console.log(event.target.value);
    this.setState({
      rent: event.target.value,
    });
  };
  handleGroceriesChange = (event) => {
    console.log(event.target.value);
    this.setState({
      groceries: event.target.value,
    });
  };
  handleRestaurantsChange = (event) => {
    console.log(event.target.value);
    this.setState({
      restaurants: event.target.value,
    });
  };
  handleTransportationChange = (event) => {
    console.log(event.target.value);
    this.setState({
      transportation: event.target.value,
    });
  };
  handleUtilitiesChange = (event) => {
    console.log(event.target.value);
    this.setState({
      utilities: event.target.value,
    });
  };
  handleLeisureChange = (event) => {
    console.log(event.target.value);
    this.setState({
      leisure: event.target.value,
    });
  };
  handleGasChange = (event) => {
    console.log(event.target.value);
    this.setState({
      gas: event.target.value,
    });
  };
  handleSubmit = (event) => {
    alert("We got your data!");
    event.preventDefault();
  };

  render() {
    return (
      <div>
        {/* <div className="topbar_container">
          <div className="topbar"></div>
          <div className="navlogo">
            <img src={logo} alt="lifesavr logo" />
          </div>
          
        </div> */}
        <MainTopBar />
        <div className="inputcard_container">
          <div className="inputcard">
            <h1>Enter Your Financial Information Here</h1>
            <form onSubmit={this.handleSubmit}>
              <label>Monthly Rent</label>
              <input
                type="text"
                onChange={(event) => this.handleRentChange(event)}
                value={this.state.netIncome}
              />

              <label>Groceries</label>
              <input
                type="text"
                onChange={(event) => this.handleGroceriesChange(event)}
                value={this.state.groceries}
              />

              <label>Restaurants</label>
              <input
                type="text"
                onChange={(event) => this.handleRestaurantsChange(event)}
                value={this.state.restaurants}
              />

              <label>Transportation </label>
              <input
                type="text"
                onChange={(event) => this.handleTransportationChange(event)}
                value={this.state.transportation}
              />

              <label>Utilities </label>
              <input
                type="text"
                onChange={(event) => this.handleUtilitiesChange(event)}
                value={this.state.utilities}
              />

              <label>Leisure</label>
              <input
                type="text"
                onChange={(event) => this.handleLeisureChange(event)}
                value={this.state.leisure}
              />

              <label>Gas</label>
              <input
                type="text"
                onChange={(event) => this.handleGasChange(event)}
                value={this.state.gas}
              />
              <Link to='pieChart'>
              <input type="submit" value="Submit" />
              </Link>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
export default SimpleBudget;
