import React from 'react'
import Home from './pages/Home/Home'
import Signup from './pages/Signup/Signup'
import Login from './pages/Login/Login'
import Product from './pages/Product/product'
import {Routes, Route } from 'react-router-dom'


function App() {
  return (
    <div>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/products" element={<Product />} />
      </Routes>
    </div>
  )
}

export default App
