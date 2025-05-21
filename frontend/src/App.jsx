import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import NavBar from './components/navbar';
import Products from './pages/products/Products';
import Branches from './pages/branches/Branches';


function App() {

  return (
    <>
    <Router>
     <NavBar />
      <Routes>
        <Route path="/" />
        <Route path="/products" element={<Products/>} />
        <Route path="/branches" element={<Branches/>} />
      </Routes>
    </Router>
    </>
  )
}

export default App
