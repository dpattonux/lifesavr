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
    netIncome: "",
    monthlySavings: "",
    location: "",
    rent: "",
    utilities: "",
    groceries: "",
    gas: "",
  };
  handleNetIncomeChange = (event) => {
    this.setState({
      netIncome: event.target.value,
    });
  };
  handleMonthlySavingsChange = (event) => {
    console.log(event.target.value);
    this.setState({
      monthlySavings: event.target.value,
    });
  };
  handleLocationChange = (event) => {
    console.log(event.target.value);
    this.setState({
      location: event.target.value,
    });
  };
  handleRentChange = (event) => {
    console.log(event.target.value);
    this.setState({
      rent: event.target.value,
    });
  };
  handleUtilitiesChange = (event) => {
    console.log(event.target.value);
    this.setState({
      utilities: event.target.value,
    });
  };
  handleGroceriesChange = (event) => {
    console.log(event.target.value);
    this.setState({
      groceries: event.target.value,
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
              <label>Net Monthly Income</label>
              <input
                type="text"
                onChange={(event) => this.handleNetIncomeChange(event)}
                value={this.state.netIncome}
              />

              <label>Location </label>
              <input
                type="text"
                onChange={(event) => this.handleLocationChange(event)}
                value={this.state.location}
              />

              <label>Monthly Savings</label>
              <input
                type="text"
                onChange={(event) => this.handleMonthlySavingsChange(event)}
                value={this.state.monthlySavings}
              />

              <label>Rent </label>
              <input
                type="text"
                onChange={(event) => this.handleRentChange(event)}
                value={this.state.rent}
              />

              <label>Utilities </label>
              <input
                type="text"
                onChange={(event) => this.handleUtilitiesChange(event)}
                value={this.state.utilities}
              />

              <label>Groceries</label>
              <input
                type="text"
                onChange={(event) => this.handleGroceriesChange(event)}
                value={this.state.groceries}
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
