import React from 'react';
import styles from './Expensedate.module.css'

function Expensedate(props) {

  const year = props.date.getFullYear();
  const month = props.date.toLocaleString('en-Us', { month: 'long' });
  const day = props.date.getDate();

  return (
    <div className={styles.expensedate}>
      <div className={styles.expensedate__year}>{year}</div>
      <div className={styles.expensedate__month}> {month}</div>
      <div className={styles.expensedate__day}> {day}</div>
    </div>
  )
}
export default Expensedate;