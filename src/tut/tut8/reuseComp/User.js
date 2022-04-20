import React, { useState } from 'react'
import { Button, Card } from 'react-bootstrap';
const User = (props) => {
    const [input, setInput] = useState("");
    const [print, setPrint] = useState(false)
    function handleChange(e) {
        setInput(e.target.value)
        console.log(input)
        setPrint(false)
     }
                     
     
     return (
        <div>  
            <Card style={{ width: 250, alignItems: 'center', marginLeft: '40%', marginBottom: 15, justifyContent: 'center' }}>
                <input type="text" onChange={handleChange} placeholder="enter your name"/>
                <h4>Contact no.: {props.data.contact} </h4>
                <Button onClick={() => alert(props.data.name)} style={{ marginBottom: 10 }}  > get name</Button>
                <Button onClick={() => setPrint(true)} >get email</Button>
                {print && input === props.data.name ? <h3>{props.data.email}</h3> : null} <hr/>
            </Card>
        </div>
    )
}

export default User