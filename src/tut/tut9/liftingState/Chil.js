import React from 'react'
import { Button } from 'react-bootstrap'

let data = "rajat"
const Chil = (props) => {
  return (
    <div>
        <h2> child component </h2> 
        
        <Button onClick={()=>props.alert(data)} >click me</Button>
    </div>
  )
}

export default Chil