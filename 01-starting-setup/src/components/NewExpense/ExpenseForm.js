import React,{ useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = (props) => {

    const [addExpense,setAddExpense]= useState(false);

    const [enteredTitle,setEnteredTitle] = useState('');

    const [enteredAmount,setEnteredAmount] = useState('');

    const [enteredDate,setEnteredDate] = useState('');

    const titleChangeHandler = (event) =>{
        setEnteredTitle(event.target.value);
    };

    const amountChangeHandler = (event) =>{
        setEnteredAmount(event.target.value);
    };

    const dateChangeHandler = (event) =>{
        setEnteredDate(event.target.value);
    };

    const submitHandler = (event) =>{

        event.preventDefault();

        const expenseData = {
            title: enteredTitle,
            amount: +enteredAmount,
            date: new Date(enteredDate)
        };

        console.log(expenseData);

        props.onSaveExpense(expenseData);

        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
        setAddExpense(false);

    }

   // let isAddExpense=false;

   const addExpenseHandler = () =>{
       setAddExpense(true);
   }

   const cancelHandler = () =>{
    setAddExpense(false);
}

    if(addExpense){
        return <form onSubmit={submitHandler}>
        <div className='new-expense__controls'>
            <div className='new-expense__control'>
                <label>Title</label>
                <input type="text" value= {enteredTitle} onChange={titleChangeHandler}/>
            </div>
            <div className='new-expense__control'>
                <label>Amount</label>
                <input type="number" value= {enteredAmount} onChange={amountChangeHandler}/>
            </div>
            <div className='new-expense__control'>
                <label>Date</label>
                <input type="date" min="2019-01-01" max="2022-12-31" value= {enteredDate} onChange={dateChangeHandler}/>
            </div>
        </div>
        <div className=".new-expense__actions">
            <button type="submit">SUBMIT</button>
            <button type="button" onClick={cancelHandler}>Cancel</button>
        </div>
    </form>
    }

    return <div className=".new-expense__actions">
    <button type="button" onClick={addExpenseHandler}>Add New Expense</button>
</div>
    

};

export default ExpenseForm;