
import React, { useState } from 'react';
import Card from '../UI/Card';
import classes from './AddUser.module.css';
import Button from '../UI/Button';

const AddUser = () =>{


    const [enteredName,setEnteredName]=useState('');
    const [enteredAge,setEnteredAge]= useState('');

    const userNameHandler = (event) =>{
        setEnteredName(event.target.value);
    }

    const userAgeHandler = (event) =>{
        setEnteredAge(event.target.value);
    }

    const addUserHandler = (event) =>{
            event.preventDefault();

        if(enteredName.trim().length===0 || enteredAge.trim().length ===0){
            return;
        }

        if(+enteredAge < 0){
            return;
        }

        console.log(enteredName+' ' + enteredAge);
        setEnteredAge('');
        setEnteredName('');

    }

    return (
        <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
            <label htmlFor='userName'> Username</label>
            <input id="userName" type="text" value={enteredName} onChange={userNameHandler}/>
            <label htmlFor='age'> Age (in Years)</label>
            <input id="age" type="number" value={enteredAge} onChange={userAgeHandler}/>
            <Button type="submit">Add User</Button>

        </form>
        </Card>
    )

}

export default AddUser;