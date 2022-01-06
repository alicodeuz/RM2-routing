import React, { useEffect, useState } from 'react'
import { Link, useParams, useSearchParams } from 'react-router-dom';

export default function UserDetails(props) {
  console.log(props)
  const [user, setUser] = useState({});
  const params = useParams();
  const [queryParams, setQueryParams] = useSearchParams();
  console.log(params)

  const fetchUserById = (userId) => {
    fetch('https://jsonplaceholder.typicode.com/users/' + userId)
      .then(res => res.json())
      .then(data => setUser(data))
      .catch(err => {
        console.error(err);
      });
  }

  useEffect(() => {
    fetchUserById();
  }, []);

  return (
    <div>
      <h1>Users details</h1>
      <div>
        <p>Name: {user.name}</p>
        <p>Email: {user.email}</p>
        <p>Company: {user.company?.name}</p>
      </div>
    </div>
  )
}
