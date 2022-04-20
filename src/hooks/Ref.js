import React, { useRef } from 'react'
import { Button } from 'react-bootstrap'

const Ref = () => {
 let inputRef = useRef(null)
 function handleInput1(){
   inputRef.current.value ="1000"
   inputRef.current.focus();
 }
 function handleInput2(){
    inputRef.current.style.color ="red"  
  }
  function handleInput3(){
    inputRef.current.style.display ="none"  
  }
  function handleInput4(){
    inputRef.current.style.display = "" 
  }

  return (
    <div>
      <input type="text" ref={inputRef}  />
        <Button onClick={handleInput1}> init value</Button> <br /> <br />
        <Button onClick={handleInput2}> color </Button>  <br /> <br />
        <Button onClick={handleInput3}> disappear</Button>  <br /> <br />
        <Button onClick={handleInput4}> display </Button>  
    </div>
  )
}

export default Ref