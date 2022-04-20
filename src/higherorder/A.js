import React from 'react'
import { Button } from 'react-bootstrap'
import Counter from "./Counter"

const A = (props) => {
    const{count, counting, name}= props
  return (
    <div>
    <h2>{count}</h2>
        <Button onClick={counting}>{name}: click me </Button>
    </div>
  )
}

export default Counter(A)