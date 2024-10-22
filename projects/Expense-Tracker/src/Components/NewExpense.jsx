import React from 'react'
import styles from './NewExpense.module.css'
import ExpenseForm from './ExpenseForm'


const NewExpense = (props) => {
  const onSaveExpensedataHandler = (enteredExpenseData) => {

    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    }
    props.onAddExpense(expenseData);
    console.log(expenseData);
  }
  return (
    <div className={styles.newexpense}>
      <ExpenseForm
        onSaveExpensedata={onSaveExpensedataHandler}></ExpenseForm>
    </div>
  )
}
export default NewExpense;