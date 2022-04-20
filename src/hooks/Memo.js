import React, { useState, useMemo} from 'react'
import { Button } from 'react-bootstrap';
//usememo hooks => prevents component to re-render
const Memo = () => {
    const[count, setCount] = useState(0);
    const[item, setItem] = useState(10);
     
    //even when item is updating setcount or every other state re-renders
    //useMemo tells when it should update
   
    const multiCountMemo = useMemo(function multiCount(){
        console.log("rendered");
        return count*10
    },[count]) 
  return (
    <div>
     <h2>count: {count}</h2> 
     <h2>item: {item}</h2>
     <h2>multicount: {multiCountMemo}</h2>
     <Button onClick={()=>setCount(count+1)}>update count</Button> <br /><br />
     <Button onClick={()=>setItem(item*10)}> update item</Button>
    </div>
  )
}

export default Memo