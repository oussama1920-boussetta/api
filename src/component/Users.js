import React, { useState,useEffect } from 'react'
import axios from 'axios'
import UserCard from './UserCard'

function Users() {
    const [listUsers, setListUsers] = useState([])
    const fetshUsers = () => {
        axios.get("https://jsonplaceholder.typicode.com/users")
            .then(res => setListUsers(res.data))
            .catch((err) => console.log(err))
    }
    useEffect(() => {
        fetshUsers()}
, [])
    return (
        <div>
{listUsers.map((el,i)=>(<UserCard user={el} key={i}/> ))}
        </div>
    )
}

export default Users
