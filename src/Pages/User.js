import React from 'react'
import {useParams} from 'react-router-dom'
 const User = () => {
     const {id} = useParams(); 
     const {name} = useParams(); 
     return (
    <div>
        <h1>this is user no. {id}</h1>
        <h1>and user name is {name}</h1>
    </div>
  )
}

export default User
