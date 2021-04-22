import React, { Component } from "react";
import { Pie } from "react-chartjs-2";
import Topbar from "./Topbar";

class Piechart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      maintainAspectRatio: false,
      responsive: false,
      labels: [
        "Rent",
        "Groceries",
        "Restaurants",
        "Transportation",
        "Utilities",
        "Leisure",
      ],
      datasets: [
        {
          data: [48, 17, 18, 5.5, 8, 3.5],
          backgroundColor: [
            "rgb(20, 146, 184)",
            "rgb(58, 210, 255)",
            "rgb(215, 201, 170)",
            "rgb(55, 63, 81)",
            "rgb(206, 44, 34)",
            "rgb(168, 155, 157)",
          ],
        },
      ],
    };
  }
  render() {
    return (
      <div>
        <Topbar />
        <h1 style={styles.h1}>Heres How You Compare!</h1>
        <container style={styles.pieContainer}>
          <h2>Your Budget Data</h2>
          <Pie
            className="piechart"
            data={{
              labels: this.state.labels,
              datasets: this.state.datasets,
            }}
          />
        </container>

        <container style={styles.pieContainer1}>
          <h2>Average Budget Data</h2>{" "}
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
  h1: { textAlign: "center" },
  pieContainer: {
    width: "25%",
    height: "25%",
    top: "40%",
    left: "30%",
    position: "absolute",
    transform: "translate(-50%, -50%)",
  },
  pieContainer1: {
    width: "25%",
    height: "25%",
    top: "9%",
    right: "40%",
    position: "absolute",
    transform: "translate(75%, 75%)",
  },
  relative: {
    position: "relative",
  },
};

export default Piechart;
