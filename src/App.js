import React, { useState } from "react";
import User from "./Components/Users/User";
import UserList from "./Components/Users/UserList";
function App() {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (uName, uAge) => {
    setUsersList((prevUsersList) => {
      return [
        ...prevUsersList,
        { name: uName, age: uAge, id: Math.random().toString() },
      ];
    });
  };
  return (
    <div>
      <User onAddUser={addUserHandler} />
      {usersList.length > 0 && <UserList users={usersList} />}
    </div>
  );
}

export default App;
