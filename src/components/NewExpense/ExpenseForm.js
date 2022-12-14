import { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [userInput, setUserInput] = useState({
    enteredTitle: "",
    enteredAmount: "",
    enteredDate: "",
  });

  const titleChangeHandler = (event) => {
    setUserInput((prevState) => {
      return { ...prevState, enteredTitle: event.target.value };
    });
  };

  const amountChangeHandler = (event) => {
    setUserInput((prevState) => {
      return { ...prevState, enteredAmount: event.target.value };
    });
  };

  const dateChangeHandler = (event) => {
    setUserInput((prevState) => {
      return { ...prevState, enteredDate: event.target.value };
    });
  };

  const expense = {
    title: userInput.enteredTitle,
    date: new Date(userInput.enteredDate.replace(/-/g, '\/').replace(/T.+/, '')),
    amount: +userInput.enteredAmount,
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onSaveExpenseData(expense);
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__actions">
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label>Title</label>
            <input
              type="text"
              value={userInput.enteredTitle}
              onChange={titleChangeHandler}
            />
          </div>
          <div className="new-expense__control">
            <label>Amount</label>
            <input
              type="number"
              min="0.01"
              step="0.01"
              onChange={amountChangeHandler}
              value={userInput.enteredAmount}
            />
          </div>
          <div className="new-expense__control">
            <label>Date</label>
            <input
              type="date"
              min="min-2019-01-01"
              max="2022-12-31"
              onChange={dateChangeHandler}
              value={userInput.enteredDate}
            />
          </div>
        </div>
        <button type="submit">Add expense</button>
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
      </div>
    </form>
  );
};

export default ExpenseForm;
