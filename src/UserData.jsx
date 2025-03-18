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
  };1

  useEffect(() => {
    fetchApi();
  }, []);

  return (
    <>
      <ProfileCards fetchData={users}  updateUsers={setUsers}/>
    </>
  );
};

export default UserData;

