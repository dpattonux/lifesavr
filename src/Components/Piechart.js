import React, { Component } from "react";
import { Pie } from "react-chartjs-2";

class Piechart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      maintainAspectRatio: false,
      responsive: false,
      labels: [
        "Monthly Income",
        "Monthly Savings",
        "Rent",
        "Utilities",
        "Groceries",
        "Gas",
      ],
      datasets: [
        {
          data: [12500, 500, 1150, 220, 400, 150],
          backgroundColor: [
            "red",
            "blue",
            "green",
            "purple",
            "orange",
            "yellow",
          ],
        },
      ],
    };
  }
  render() {
    return (
      <div>
        <h1>Budget Data</h1>
        <container style={styles.pieContainer}>
          <Pie
            className="piechart"
            data={{
              labels: this.state.labels,
              datasets: this.state.datasets,
            }}
          />
        </container>
      </div>
    );
  }
}

const styles = {
  pieContainer: {
    width: "30%",
    height: "30%",
    top: "50%",
    left: "50%",
    position: "absolute",
    transform: "translate(-50%, -50%)",
  },
  relative: {
    position: "relative",
  },
};

export default Piechart;
