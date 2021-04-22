import React from "react";
import "../App.css";
import logo from "./lifesavrlogo.svg";

// import Footer from "./Footer";
// import logorobot from "./lifesavrrobot.svg";

// function SimpleBudget() {
//   const [values, setValues] = useState({
//     netIncome: "",
//     monthlySavings: "",
//     location: "",
//     rent: "",
//     utilities: "",
//     groceries: "",
//     gas: "",
//   });
// const saveFormData = async () => {
//   const response = await fetch("/api/registration", {
//     method: "POST",
//     body: JSON.stringify(values),
//   });
//   if (response.status !== 200) {
//     throw new Error(`Request failed: ${response.status}`);
//   }
// };

// const onSubmit = async (event) => {
//   event.preventDefault(); // Prevent default submission
//   try {
//     await saveFormData();
//     alert("Your registration was successfully submitted!");
//     setValues({
//       netIncome: "",
//       monthlySavings: "",
//       location: "",
//       rent: "",
//       utilities: "",
//       groceries: "",
//       gas: "",
//     });
//   } catch (e) {
//     alert(`Registration failed! ${e.message}`);
//   }
// };

// const onSubmit = () =>{
//   return ({target: { value } }) => {
//     setValues((oldValues) => ({})
//   }
// }

// const set = (name) => {
//   return ({ target: { value } }) => {
//     setValues((oldValues) => ({ ...oldValues, [name]: value }));
//   };
// };

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
        <div className="topbar_container">
          <div className="topbar"></div>
          <div className="navlogo">
            <img src={logo} alt="lifesavr logo" />
          </div>
        </div>
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

              <input type="submit" value="Submit" />
            </form>
          </div>
        </div>
      </div>
    );
  }
}
export default SimpleBudget;
