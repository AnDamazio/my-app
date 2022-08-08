import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";

export default function Expenses(props) {
  const expenses = props.items.map((expense) => {
    return (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    );
  });

  const filterChangeHandler = (filter) => {
    console.log(filter);
  };

  return (
    <>
      <Card className="expenses">
        <ExpensesFilter onAddFilter={filterChangeHandler} />
        {expenses}
      </Card>
    </>
  );
}
