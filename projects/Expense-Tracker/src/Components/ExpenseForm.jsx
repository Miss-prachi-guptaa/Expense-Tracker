import { useState } from 'react';
import React from "react";

import styles from './ExpenseForm.module.css'

const ExpenseForm = (props) => {

  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDate, setEntereddate] = useState('');

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  }
  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  }
  const dateChangeHandler = (event) => {
    setEntereddate(event.target.value);
  }

  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate)
    }
    props.onSaveExpensedata(expenseData);

    console.log(expenseData);
    setEnteredTitle('');
    setEnteredAmount('');
    setEntereddate('');

  }
  return (
    <form onSubmit={submitHandler}>
      <div className={styles.newexpense__controls}>
        <div className={styles.newexpense__control}>
          <label>Title</label>
          <input type="text" value={enteredTitle} onChange={titleChangeHandler} />
        </div>
        <div className={styles.newexpense__control}>
          <label>Amount</label>
          <input type="number" min="0.01" step="0.01" value={enteredAmount} onChange={amountChangeHandler} />
        </div>
        <div className={styles.newexpense__control}>
          <label>Date</label>
          <input type="date" value={enteredDate} onChange={dateChangeHandler} />
        </div>
      </div>
      <div className={styles.newexpense__actions}>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  )
}
export default ExpenseForm;