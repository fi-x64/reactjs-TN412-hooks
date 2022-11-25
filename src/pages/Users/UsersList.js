import { useState, useEffect, Fragment } from 'react';
import Spinner from "../../components/Spinner";

export default function UsersList() {
  const [users, setUsers] = useState(null);
  const [userIndex, setUserIndex] = useState(0);
  const user = users?.[userIndex];

  useEffect(() => {
    fetch("http://localhost:8080/users")
      .then(resp => resp.json())
      .then(data => setUsers(data));
  }, []);

  if (users === null) {
    return <div><Spinner /> Loading users...</div>
  }

  return (
    <Fragment>
      <main className="users-page">
        <ul className="users items-list-nav">
          {users.map((u, i) => (
            <li
              key={u.id}
              className={i === userIndex ? "selected" : null}
            >
              <button
                className="btn"
                onClick={() => setUserIndex(i)}
              >
                {u.username}
              </button>
            </li>
          ))}
        </ul>

        {user && (
          <div className="item user">
            <div className="item-header">
              <h2>{user.name}</h2>
            </div>
            <div className="user-details">
              <h3>{user.title}</h3>
              <p>{user.notes}</p>
            </div>
          </div>
        )}
      </main>
    </Fragment>
  );
}