import React from 'react'
import Coin from '../features/coin/Coin'
import Counter from '../features/counter/Counter'
import Theme from '../features/theme/Theme'


const Home = () => {
  
  return (
    <div>
    <Counter/>
    <Coin/>
    <Theme/>
    </div>
  )
}

export default Home