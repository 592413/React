
import React from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense= (props) => {

    const saveExpenseHandler = (expenseData) =>{

        const expense = {
            ...expenseData,
            id: Math.random().toString()
        };

        props.addNewExpense(expense);

    }

    return <div className='new-expense'>
        <ExpenseForm onSaveExpense={saveExpenseHandler}/>
    </div>
};

export default NewExpense;