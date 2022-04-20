import React, { useEffect, useState } from 'react'

const Effect = () => {
    const [count, setCount] = useState(0);
    
  // used for api call
    useEffect(()=>{
       alert("hello")
    },[count])
    function handleClick (e) {
        e.preventDefault();
        setCount(count+1);
    }
    return (
        <div> 
      <h1>counter {count}</h1>
      <button onClick={handleClick}>update counter</button>
    </div>
  )
}

export default Effect