import React from 'react'
import Chil from './Chil'

const Par = () => {

    function alertFunc (data) {
        alert(data);
    }
  return (
    <div> 
    <h1>lifting state up</h1>
      <Chil alert={alertFunc}/>
    </div>
  )
}

export default Par