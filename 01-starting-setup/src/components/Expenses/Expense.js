import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import './Expense.css';

function Expense(props){
    return (
    <Card className='expenses'>
      {props.data.map((expense) => <ExpenseItem
      title={expense.title}
      amount={expense.amount}
      date={expense.date}/>
      )}
    </Card >
    );
}

export default Expense;