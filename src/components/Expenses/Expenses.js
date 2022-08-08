import { useState } from "react";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";

export default function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2022");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  console.log(props.items)
  return (
    <>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        {props.items.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
      </Card>
    </>
  );
}
