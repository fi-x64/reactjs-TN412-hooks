import { useEffect, useState } from "react";
import Spinner from "../Spinner";

export default function UserPicker() {
  const [users, setUsers] = useState(null);

  useEffect(() => {

    fetch("http://localhost:8080/users")
      .then(resp => resp.json())
      .then(data => setUsers(data));

  }, []);

  if (users === null) {
    return <Spinner />
  }
  return (
    <select>
      {users.map(u => {
        return (
          <option key={u.id}>{u.username}</option>
        )
      })}
    </select>
  );
}