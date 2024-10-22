import React, { useState } from 'react'

import './App.css'
import Expenses from './Components/Expenses'
import NewExpense from './Components/NewExpense'

let DUMMY_EXPENSE = []

function App() {

  const [expenses, setExpenses] = useState(DUMMY_EXPENSE);

  fetch('http://localhost/sample-api/api/read.php').then(
    response => {
      return response.json();
    }
  ).then(
    data => {
      console.log(data);
      setExpenses(data);
    }
  );

  const addExpenseHandler = (expense) => {
    const updatedExpenses = [expense, ...expenses];
    setExpenses(updatedExpenses);


  }

  return (
    <>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses item={expenses} />
    </>
  )
}

export default App
