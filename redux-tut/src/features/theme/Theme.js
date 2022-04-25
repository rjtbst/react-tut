import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import { useDispatch } from 'react-redux';
import { ChangeColor } from './ThemeSlice';

const Theme = () => {
    const dispatch = useDispatch();
    const [color, setColor] = useState("white")
  return (
    <div>
    <h1>theme component</h1>
    <input type="text" onChange={(e)=>{setColor(e.target.value)}} style={{}} />
        <Button onClick={()=>{dispatch(ChangeColor(color))}}>change color</Button>
    </div>
  )
}

export default Theme