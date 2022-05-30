
import React from 'react';
import Card from '../UI/Card';
import classes from './AddUser.module.css';

const AddUser = () =>{

    const addUserHandler = (event) =>{
            event.preventDefault();
            console.log(event.target.value);
    }

    return (
        <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
            <label htmlFor='userName'> Username</label>
            <input id="userName" type="text"/>
            <label htmlFor='age'> Age (in Years)</label>
            <input id="age" type="number"/>
            <button type="submit">Add User</button>

        </form>
        </Card>
    )

}

export default AddUser;