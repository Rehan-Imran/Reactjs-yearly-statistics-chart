import "./App.css";
import Expenses from "./components/Expenses/Expenses";

const App = () => {
  const expenses = [
    {
      id: 1,
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2021, 7, 14),
    },
    {
      id: 2,
      title: "Books",
      amount: 94.12,
      date: new Date(2021, 7, 14),
    },
    {
      id: 3,
      title: "Binders",
      amount: 94.12,
      date: new Date(2021, 7, 14),
    },
    {
      id: 4,
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2021, 7, 14),
    },
  ];
  return (
    <div>
      <Expenses expenses={expenses}></Expenses>
    </div>
  );
};

export default App;
