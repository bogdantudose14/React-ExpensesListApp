import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState(""); //states are initialized with a string because we receive strings from event.target.value
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  //we could also go for 1 state instead of three => call useState once and pass an object as a value
  //manage it as one piece of state

  // const [userInput, setUserInput] = useState({
  //   enteredTitle: '',
  //   enteredAmount: '',
  //   enteredDate: '',
  // });

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
    /*default 'event' object as parameter */
    //setUserInput({ ...userInput, enteredTitle: event.target.value }); //we have to take care of all the pieces in state, because otherwise React would replace them, not merge them;
    // whenever you update state and you DEPEND on the PREVIOUS state (ex: counter) you should use:
    // setUserInput((prevState) => {
    //   return { ...prevState, enteredTitle: event.target.value };
    // }); //pass in a function that will be called automatically by React and receive the previous State snapshot as a parameter
    // in this way, React will guarantee that the state snapshot received is the latest state snapshot, keeping all scheduled state updates in mind
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
    //setUserInput({ ...userInput, enteredAmount: event.target.value });
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
    //setUserInput({ ...userInput, enteredDate: event.target.value });
  };

  const submitHandler = (event) => {
    event.preventDefault(); //default behaviour is to reload the page by sending a request to the hosting server of the page;
    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount, //enforce a number conversion
      date: new Date(enteredDate), //parse and convert to a Date object
    };

    // console.log(expenseData);

    props.onSaveExpenseData(expenseData); // access the prop in order to pass data from child component to parent component!
    // it's important to execute it because the value we get on this prop is a function

    setEnteredTitle(""); //useful for two-way binding (input clearing)
    setEnteredAmount("");
    setEnteredDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          {
            <input
              type="text"
              onChange={titleChangeHandler}
              value={enteredTitle} //two-way binding for clearing the input after submission => bind it to the enteredTitle (two-way binding)
            /> /*pass a pointer to a function, don't execute it */
          }
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>

      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
