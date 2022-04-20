import React, { useRef } from 'react'
import { Button } from 'react-bootstrap'
import Child from './Child'
const Parent = () => {
  let inputRef = useRef(null);

  function handleInput() {
    inputRef.current.value = "200"
    inputRef.current.focus();
    inputRef.current.style.color = "red"
  }
  return (
    <div>
      <Child ref={inputRef} />
      <Button onClick={handleInput}>update input</Button> <br /> <br />
    </div>
  )
}

export default Parent