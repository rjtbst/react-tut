import "./App.css";
import NavBar from "./NavBar";
import { Routes, Route } from 'react-router-dom'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Home from './Pages/Home'
import Services from './Pages/Services'
import User from './Pages/User'
import NoteState from "./context/notes/NoteState";
import Header from "./redux-tut/page/Header";




function App() {
  return (
    <div className="App">
    <NoteState>
    <Header/>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="users/:id/:name" element={<User />} />
        </Route>
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
      </Routes>
      </NoteState>
    </div>
  );
}

export default App;
