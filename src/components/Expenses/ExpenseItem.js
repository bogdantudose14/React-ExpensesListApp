import React, { useState } from 'react';

import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.title); // useState() is a react Hook, should be called INSIDE the component function;

  // useState() actually returns an array with ONLY 2 elements where the first value is the variable itself and the second is an updating function
  // therefore we use array destructuring;
  // in array destructuring, only the order matters, not the names;
  // we can later call the setTitle function for updating values;

  const clickHandler = () => {
    // even though we modify the value, we can use 'const' because we do not assign the value using '=';
    setTitle('Updated!'); //pass the new value as an argument;

    // by using this type of updating function, the whole component function will be executed again!

    //console.log('Clicked!');
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        {/* <h2>{props.title}</h2> */}
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button
        onClick={clickHandler} //if we would add parentheses, JS would execute the function when the line of code is being parsed (when the JSX code is returned)
        //and that would be too early. We just point to the function.

        // onClick={() => {
        //   console.log('Clicked!');
        // }}
      >
        Change Title
      </button>
    </Card>
  );
};

export default ExpenseItem;
