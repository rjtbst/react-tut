import React, { useState, useEffect } from 'react'
import { Card } from 'react-bootstrap';

const TodosList = () => {
  const [todos, settodos] = useState([]);
  const [term, setTerm] = useState("")
  useEffect(() => {
    const fetchData = async () => {
      let res = await fetch(`https://jsonplaceholder.typicode.com/todos`)
      const data = await res.json()
      settodos(data);
    }
    fetchData()
  }, [])
  /* let rendertodo = todos.filter((todo)=>{
    if(term === "") {
      return todo
    }else if(todo.name.toLowerCase().includes(term.toLocaleLowerCase())){
      return todo
    }
  }) */
  let filteredtodo = todos
    .filter(({ title }) => {
      return title.toLowerCase().indexOf(term) >= 0
    }).slice(0, 10)
    .map((todo) => {
      return (
        <div key={todo.id} style={{ display: "flex", flexDirection: "column", alignItems: "center", marginBottom: 10 }}>

          <Card style={{ width: '28rem' }}>
            <Card.Body >
              <Card.Text> {todo.title} </Card.Text>
            </Card.Body>
          </Card>
        </div>
      )
    })

  return (
    <div>
      <input type="text" placeholder='search...' value={term} onChange={(e) => setTerm(e.target.value)} />
      <h3>{term}</h3>
      <h2>{filteredtodo}</h2>
    </div>
  )
}

export default TodosList