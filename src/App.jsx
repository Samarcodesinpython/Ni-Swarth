import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Signup from './Signup'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './login'
import Structure from './Structure'; 

function App() {
  

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Structure />} />
        <Route path='/register' element={<Signup />}></Route>
        <Route path='/login' element={<Login />}></Route>

      </Routes>
    </BrowserRouter>
  )
}

export default App
