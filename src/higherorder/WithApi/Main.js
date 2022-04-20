import React from 'react'
import TodosList from './TodosList'
import UserList from './UserList'

const Main = () => {
  return (
    <div style={{display:"flex", justifyContent:"space-around"}}>
        <UserList/>
        <TodosList/>
    </div>
  )
}

export default Main