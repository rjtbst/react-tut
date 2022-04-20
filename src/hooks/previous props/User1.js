import React, { useEffect, useRef } from 'react'

const User1 = (props) => {
    const lastVal = useRef();
    useEffect(()=>{
        lastVal.current = props.count
    },[props.count])
    const previousProp = lastVal.current
  return (
    <div>
        <h1>user component:{props.count}</h1>
        <h2>previous value:{previousProp}</h2>
    </div>
  )
} 

export default User1