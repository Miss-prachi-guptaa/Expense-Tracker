import ReactS from 'react';
import styles from './Expenses.module.css'
import ExpenseItem from './ExpenseItem';
import Card from './Card';

function Expenses(props) {
  return (
    <Card className={styles.expenses}>{

      props.item.map(expense => (
        <ExpenseItem
          key={expense.item}
          date={expense.date}
          title={expense.title}
          amount={expense.amount}>
        </ExpenseItem>
      ))}
    </Card>
  )
}
export default Expenses;
