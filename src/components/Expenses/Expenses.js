import React, { useState } from 'react';

import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';

import './Expenses.css';

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      {/*  inside curly braces we can execute JSX code or render elements  */}
      {props.items.map(
        (
          expense,
          index //we could also use the second argument (index) if we do not have a unique key, though its discouraged
          //to use the index as one may run into bugs (self-managed index) as the index is not directly attached to the content of the item;
        ) => (
          <ExpenseItem
            key={expense.id} // this way, the item just gets added without updating every item of the previous existing array
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        )
      )}
      {/* <ExpenseItem
        title={props.items[0].title}
        amount={props.items[0].amount}
        date={props.items[0].date}
      />
      <ExpenseItem
        title={props.items[1].title}
        amount={props.items[1].amount}
        date={props.items[1].date}
      />
      <ExpenseItem
        title={props.items[2].title}
        amount={props.items[2].amount}
        date={props.items[2].date}
      />
      <ExpenseItem
        title={props.items[3].title}
        amount={props.items[3].amount}
        date={props.items[3].date}
      /> */}
    </Card>
  );
};

export default Expenses;
