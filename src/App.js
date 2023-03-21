import React from 'react'
import { BrowserRouter as Router, Route, Routes,  } from 'react-router-dom'
import Home from './Components/Home'
import SingleMovie from './Components/SingleMovie'
import './App.css'

const App = () => {
  return (
    
    <Router>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='movie/:id' element={<SingleMovie />} />
        
      </Routes>
    </Router>
  )
}

export default App