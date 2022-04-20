import React, { useState } from 'react'

const Controlled = () => {
   const [user, setUser] = useState({
       name: "",
       email: "",
       phone: ""
   });
   const[val,setVal] = useState("")
    function inputHandle (e){
       const  {name, value} = e.target;
        setUser( {...user, [name]:value})
    }
  return (
    <div>
    <h1>controlled component</h1>
    <p>jisme input field hota hai aur state ke through handle hota hai</p>
    <input type="text"  name="name" placeholder="name"  onChange={inputHandle}/>
    <input type="text"  name="email" placeholder="email"  onChange={inputHandle}/>
    <input type="text"  name="phone" placeholder="phone" onChange={inputHandle}/>
    <h2>name: {user.name}</h2>
    <h2> email: {user.email}</h2>
    <h2> phone: {user.phone}</h2>
    

  <h3>for single input</h3>
    <input type="text" value={val} onChange={(e)=>setVal(e.target.value)} />
    <h3>{val}</h3>
    </div>
  )
}

export default Controlled