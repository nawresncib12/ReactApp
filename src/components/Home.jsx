import { useState,useEffect } from "react";
import { getUsers } from "../apis/user.api";
const Users = () => {
  const [users, setUsers] = useState([]);
  const getAllUsers = async () => {
    const res = await getUsers();
    setUsers(res);
  };

  useEffect(() => {
    getAllUsers();
  }, []);
  return (
    <ul>
      {users.map((user, index) => {
        return <li key={index}>{user.name} a {user.age} ans</li>;
      })}
    </ul>
  );
};

export default Users;
