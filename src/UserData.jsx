import React, { useEffect, useState } from "react";
import ProfileCards from "./ProfileCards";

const UserData = () => {
  const [users, setUsers] = useState([]);
  const url = "https://jsonplaceholder.typicode.com/users";
  const fetchApi = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchApi();
  }, []);

  const deleteItem = (id) => {
    console.log(`Deleting user with ID: ${id}`);
    
    const filteredUsers = users.filter((user) => user.id !== id);
    setUsers(filteredUsers);  // Update the state with filtered users
  };

  return (
    <>
      <ProfileCards fetchData={users} updateUsers={setUsers} deleteItem={deleteItem} />
    </>
  );
};

export default UserData;


