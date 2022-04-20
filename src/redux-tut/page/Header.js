import React, {useContext} from 'react'
import NoteContext from '../../context/notes/NoteContext'

const Header = () => {
  const {price} = useContext(NoteContext);
  const totalMoney = 1000;
  return (
    <div>
      <h1>total money : {totalMoney - price}</h1> 
    </div>
  )
}

export default Header