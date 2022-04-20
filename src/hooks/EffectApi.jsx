import React, { useState, useEffect } from 'react'
import { Button } from 'react-bootstrap'
const EffectApi = () => {
  const [count, setCount] = useState(1)
  const [user, setUser] = useState({})
  useEffect(() => {
    const fetchData = async () => {
      let res = await fetch(`https://jsonplaceholder.typicode.com/users/${count}`)
      const data = await res.json()
      setUser(user)
    }
    fetchData()
  }, [count])
  const nextData = () => {
    setCount(prevState => prevState + 1)
  }
  const previousData = () => {
    setCount(prevState => prevState - 1)
  }
  return (
    <div>
      <h2>useEffect api</h2>
      <h2>{count}</h2>
      <h3> {user.name} </h3>
      <h3> {user.email} </h3>
      
      <Button onClick={nextData}> next user </Button>
      <div>
        <Button onClick={previousData} style={{ marginTop: 10 }}> previous user </Button>
     </div>
    </div>
  )   



   
}

export default EffectApi