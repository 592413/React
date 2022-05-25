import Card from "../UI/Card";
import React , {useState} from "react";
import './Expense.css';
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";

function Expense(props){

  const [filteredYear,setFilteredYear] =useState('2020');

  const filterChangeHandler = (filterYear) =>{
    setFilteredYear(filterYear);

  }

  const filteredExpenses= props.data.filter(expense => {
    return expense.date.getFullYear().toString()===filteredYear;
  })

  
    return (
    <Card className='expenses'>
      <ExpensesFilter selected={filteredYear} onFilterChange={filterChangeHandler}/>
      <ExpensesList items={filteredExpenses} />
    </Card >
    );
}

export default Expense;