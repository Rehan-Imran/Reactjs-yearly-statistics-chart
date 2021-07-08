import { useState } from "react";
import "./App.css";
import ExpenseChart from "./components/Expenses/ExpenseChart";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const App = () => {
  const DUMMY_EXPANSES = [];
  const [expenses, setExpense] = useState(DUMMY_EXPANSES);
  const addExpenseHandler = (expanse) => {
    setExpense((prevExpanses) => {
      return [expanse, ...prevExpanses];
    });
  };
  //originally the data is being sent through ReactDOM like this
  // return React.createElement(
  //   "div",
  //   {},
  //   React.createElement('h2',{},"Lets Get Started",
  //   React.createElement(Expenses,{items:expenses})))
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={expenses}></Expenses>
    </div>
  );
};

export default App;
