import { useState } from "react";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";

export default function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2022");


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

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear)
  };

  return (
    <>
      <Card className="expenses">
        <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
        {expenses}
      </Card>
    </>
  );
}
