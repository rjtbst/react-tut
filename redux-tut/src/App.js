
import './App.css';
import Header from './components/Header';
import Cart from './Pages/Cart';
import Home from './Pages/Home';
import Products from './Pages/Products';
import {Routes, Route} from 'react-router-dom'
function App() {
  return (
    <div className="App">
    
     <Header/>
     <Routes>
     <Route path='/' element={<Home/>}/>
     <Route path='/products' element={<Products/>}/>
     <Route path='/cart' element={<Cart/>}/>
     </Routes>
    </div>
  );
}

export default App;
