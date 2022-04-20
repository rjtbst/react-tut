import React, { useState, useEffect } from 'react'
import { Card } from 'react-bootstrap';

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [term, setTerm] = useState("")
  useEffect(() => {
    const fetchData = async () => {
      let res = await fetch(`https://jsonplaceholder.typicode.com/users`)
      const data = await res.json()
      setUsers(data);
    }
    fetchData()
  }, [])
  /* let renderUser = users.filter((user)=>{
    if(term === "") {
      return user
    }else if(user.name.toLowerCase().includes(term.toLocaleLowerCase())){
      return user
    }
    
  }) */
  let filteredUser = users.filter(({ name }) => {
    return name.toLowerCase().indexOf(term) >= 0
  }).map((user) => {
    return (
      <div key={user.id} style={{ display: "flex", flexDirection: "column", alignItems: "center", marginBottom: 10 }}>

        <Card style={{ width: '28rem' }}>
          <Card.Body >
            <Card.Title>{user.name}</Card.Title>
            <Card.Text>
              {user.email}
            </Card.Text>
            <Card.Text>
              {user.phone}
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    )
  })

  return (
    <div>
      <input type="text" placeholder='search...' value={term} onChange={(e) => setTerm(e.target.value)} />
      <h3>{term}</h3>
      <h2>{filteredUser}</h2>
    </div>
  )
}

export default UserList