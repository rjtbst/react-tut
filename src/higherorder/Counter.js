import React,{useState} from 'react'

const Counter=(WrappedComponent)=>{
const Counter = (props) => {
    const [count, setCount] = useState(0)
    function counting(){
        setCount(count+1);
    }
  return (
    <div>
  <WrappedComponent count={count} counting={counting} {...props}/>
    </div>
  )
}
return Counter
}
export default Counter