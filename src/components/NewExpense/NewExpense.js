import React from 'react';
import './NewExpense.css';

import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(), //enrich it with any data
    };

    props.onAddExpense(expenseData); // in order to pass data to its parent

    console.log(expenseData);
  };
  return (
    <div className="new-expense">
      {/* <form></form> */}
      {/* create custom props for event handling */}
      {/* we just point at the function (don't execute it) */}
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
};

export default NewExpense;
