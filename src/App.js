import React from "react";

import { Route, Switch } from "react-router";
import './App.css';
import LandingPage from "./components/Landing";
import BudgetSelection from './components/BudgetSelections';
import Details1 from './components/Details1';
import Details2 from './components/Details2';
import Mybudget from './components/Mybudget';

function App() {
  return (
    <>

    <Switch>

      <Route exact path='/'>
        <LandingPage/>
        </Route>

      <Route path='/budgetSelection'>
        <BudgetSelection/>
      </Route>

      <Route path='/details1'>
        <Details1/>
      </Route>

      <Route path='/details2'>
        <Details2/>
      </Route>

      <Route path ='/myBudget'>
        <Mybudget/>
      </Route>
      
    </Switch>
    </> 


  );
}

export default App;
