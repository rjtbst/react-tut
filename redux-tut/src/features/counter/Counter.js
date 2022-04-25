import React from 'react'
import { Button } from 'react-bootstrap'
 import { useSelector, useDispatch } from 'react-redux'
 import { increment,decrement } from './CounterSlice'

const Counter = () => {
   const count = useSelector((state)=>state.counter.count);
   const counterColor = useSelector((state)=>state.theme.color)
   const dispatch = useDispatch()
  return (
    <div>
          <h1>react-redux testing</h1> <br /><br />
          <h2>counter component</h2>
      <Button onClick={()=>dispatch(increment())} aria-label="increment value"> + </Button>

      <h4 style={{color: counterColor}}> {count} </h4>
      
      <Button onClick={()=>dispatch(decrement())} aria-label="decrement value"> - </Button>
    </div>
  )
}

export default Counter