import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";

export default function Expenses(props) {

  const expenses = props.items.map((expense) => {
    return(
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    );
  });

  return <div className="expenses">{expenses}</div>;
}
