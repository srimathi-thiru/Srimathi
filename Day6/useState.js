import React, { useState } from "react";

function AddUser() {
  const [users, setUsers] = useState([
    { id: 1, name: "Sri" },
    { id: 2, name: "mathi" }
  ]);
  const [newUserName, setNewUserName] = useState("");

  const addUser = () => {
    if (newUserName.trim() === "") return; // Prevent adding empty names

    const newUser = {
      id: users.length + 1, // Dynamically assign ID
      name: newUserName
    };

    setUsers([...users, newUser]);
    setNewUserName(""); // Clear the textbox after adding
  };

  return (
    <>
      <input
        type="text"
        value={newUserName}
        onChange={(e) => setNewUserName(e.target.value)}
        placeholder="Enter user name"
      />
      <button onClick={addUser}>Add User</button>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <p>id: {user.id}</p>
            <p>name: {user.name}</p>
          </li>
        ))}
      </ul>
    </>
  );
}

export default AddUser;