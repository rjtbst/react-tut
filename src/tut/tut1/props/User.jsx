import React,{useState} from 'react'

const User = (props) => {
  const[name,setName]= useState(props.name)
  
  return (
    <div>
    <h2>hello {name}</h2>
    <button onClick={()=>{setName("sidhu")}}> update name: </button>
        
    </div>
  )
}
 
export default User