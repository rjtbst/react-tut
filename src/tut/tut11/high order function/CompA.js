import React, { useState } from 'react'
import { Button } from 'react-bootstrap'

const CompA = () => {
  return (<>
        <h1> high order component</h1>
    
        <HOCRed cmp={Counter}/>
        <HOCGreen cmp={Counter}/>
   
    </>
  )
}

function HOCRed (props){
    return  <h2 style={{backgroundColor:"red", width:50}}><props.cmp/></h2>
}
function HOCGreen (props){
    return  <h2 style={{backgroundColor:"green", width:50}}><props.cmp/></h2>
}

function Counter(){
    const[count,setCount] = useState(0)
    return <div>
    <h3>{count}</h3>
    <Button onClick={()=>setCount(count+1)}>update</Button>
    </div>
}

export default CompA


 