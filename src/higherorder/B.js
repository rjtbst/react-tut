import React from 'react'
import { Button } from 'react-bootstrap'
import Counter from "./Counter"

const B = (props) => {
   const{count, counting, name}= props
  return (
    <div>
    <h2>{count}</h2>
        <Button onMouseOver={counting}>{name} :click me </Button>
    </div>
  )
}

export default Counter(B)