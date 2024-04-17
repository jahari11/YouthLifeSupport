import React from 'react'
import Navbar from './Component/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Programs from './Pages/Programs'
import Events from './Pages/Events'


const App = () => {
  return (
    <div className='App'>
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' index element={<Home />} />
        <Route path='/about' index={<About />} />
        <Route path='/programs' index={<Programs />} />
        <Route path='/events' index={<Events />} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App