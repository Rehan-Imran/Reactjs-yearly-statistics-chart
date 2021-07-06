import ExpenseItems from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";

const Expenses = (props) => {
  console.log("props");
  console.log(props);
  return (
    <Card className="expenses">
      {props.expenses.map((expenses) => (
        <ExpenseItems
          key={expenses.id}
          expense={expenses.title}
          amount={expenses.amount}
          date={expenses.date}
        />
      ))}
    </Card>
  );
};

export default Expenses;
