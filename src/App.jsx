import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css'
import NavBar from './MyComponents/NavBar';
import { HomePage } from './pages/Home';
import { ProjectPage } from './pages/Project';
import { ContactPage } from './pages/contact';
import { AboutPage } from './pages/About';

function App() {
  const [count, setCount] = useState(0)

  return (
    
    <>
      <NavBar/> 
      {/* This nav bar contain 4 a tags home, about, project and contact */}
      
      <Routes>
        <Route path="/" element={<HomePage/>}></Route>
        <Route path="/about" element={<AboutPage/>}></Route>
        <Route path="/project" element={<ProjectPage/>}></Route>
        <Route path="/contact" element={<ContactPage/>}></Route>
      </Routes>
    </>
  )
}

export default App
