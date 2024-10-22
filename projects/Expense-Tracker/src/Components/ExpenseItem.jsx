import React, { useState } from 'react';
import styles from './ExpenseItem.module.css'
import Expensedate from './Expensedate';
import Card from './Card'


function ExpenseItem(props) {


  return (

    <Card className={styles.expenseitem}>
      <Expensedate date={props.date} />
      <div className={styles.expenseitem__description}>
        <h2>{props.title}</h2>

        <div className={styles.expenseitem__price}>Rs.{props.amount}</div>
      </div>

    </Card>

  );
}
export default ExpenseItem;