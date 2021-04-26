import React from "react";

import { Route, Switch } from "react-router";
import "./App.css";
import LandingPage from "./Components/LandingPage";
import BudgetSelection from "./Components/BudgetSelections";
import Details1 from "./Components/Details1";
import Details2 from "./Components/Details2";
import Mybudget from "./Components/Mybudget";
import DetailedBudget from "./Components/DetailedBudget";
import DetailedBudget1 from "./Components/DetailedBudget1";
import Piechart from "./Components/Piechart";
import SimpleBudget from "./Components/SimpleBudget";
import SignUp from "./Components/SignUp";

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <LandingPage />
        </Route>

        <Route path="/budgetSelection">
          <BudgetSelection />
        </Route>

        <Route path="/details1">
          <Details1 />
        </Route>

        <Route path="/details2">
          <Details2 />
        </Route>

        <Route path="/myBudget">
          <Mybudget />
        </Route>

        <Route path="/detailedBudget1">
          <DetailedBudget1 />
        </Route>

        <Route path="/piechart">
          <Piechart />
        </Route>

        <Route path="/simpleBudget">
          <SimpleBudget />
        </Route>

        <Route path="/signUp">
          <SignUp />
        </Route>

        <Route path="/detailedBudget">
          <DetailedBudget />
        </Route>

        <Route path="/detailedBudget1">
          <DetailedBudget1 />
        </Route>
      </Switch>
    </>
  );
}

export default App;
