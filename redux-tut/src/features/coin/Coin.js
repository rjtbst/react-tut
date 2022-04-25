import React from 'react'
import { Button } from 'react-bootstrap'
import {useSelector, useDispatch} from 'react-redux'
import { increment, decrement, incrementByAmount } from '../counter/CounterSlice'

const Coin = () => {
  const coin = useSelector(state=>state.counter.count);
  const dispatch = useDispatch();
 const textcolor = useSelector(state=>state.theme.color)
  return (
    <div>
    <h1>coin component</h1>
      <h2 style={{color: textcolor}}>coin: {coin}</h2>
      <Button onClick={()=>dispatch(increment())}>increment</Button>
      <Button onClick={()=>dispatch(decrement())}>decrement</Button>
      <Button onClick={()=>dispatch(incrementByAmount(50))}>incrementby50</Button>
    </div>
  )
}

export default Coin