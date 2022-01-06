import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

export default function Users(props) {
  console.log(props)
  const [users, setUsers] = useState([]);

  const fetchUsers = () => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setUsers(data))
      .catch(err => {
        console.error(err);
      });
  }

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div>
      <h1>Users page</h1>
      <ul>
        {
          users.map(item => {
            return (<li key={item.id}>
              <Link to={`/users/${item.id}`}>{`${item.name}`}</Link>
            </li>
            )
          })
        }
      </ul>
    </div>
  )
}
