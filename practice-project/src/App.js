import React, { useState } from 'react';

import AddUser from './components/Users/AddUser';
import UserList from './components/Users/UserList';


function App() {

 const [userList,setUserList] = useState([]);

 const addUserListHandler = (uName,uAge) =>{

  setUserList(prevUserList => {
    return [...prevUserList,{name:uName, age:uAge , id:Math.random().toString}]
  })


 }

  return (
    <div>
      <AddUser onAddUser={addUserListHandler}/>
      <UserList users={userList}/>
    </div>
  );
}

export default App;
