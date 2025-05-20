import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import NavBar from './components/navbar';


function App() {

  return (
    <>
    <Router>
     <NavBar />
      <Routes>
        <Route path="/products" element={<p>hola1</p>} />
        <Route path="/branches" element={<p>hola2</p>} />
      </Routes>
    </Router>
    </>
  )
}

export default App
