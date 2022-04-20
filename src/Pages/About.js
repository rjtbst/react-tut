

import React, { useContext, useEffect } from 'react'
import { Button } from 'react-bootstrap'

import NoteContext from '../context/notes/NoteContext'

const About = () => {
 const {state, update, priceUpdate, price} = useContext(NoteContext)
 useEffect(()=>{
   update();
   //eslint-disable-next-line
 },[])
  return (
    <div>
      <h2>about page</h2>
   <span>this is about {state.name}</span> <br />
   <span>and email: {state.email}</span>
   <h3>{price}</h3>
  <Button onClick={priceUpdate}> add 10 </Button>
    </div>
  )
}

export default About