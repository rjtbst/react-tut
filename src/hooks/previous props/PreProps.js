import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import User1 from './User1'

const PreProps = () => {
const [count, setCount] = useState(0) 
function counter (){
    setCount((prev)=>Math.floor(Math.random()*10))
}
    return (
        <div>
            <User1 count={count}/>
            <Button onClick={counter}>update counter</Button>
        </div>
    )
}

export default PreProps