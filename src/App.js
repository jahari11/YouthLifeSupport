import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Component/Navbar';
import Home from './Pages/Home';
import About from './Pages/About';
import Programs from './Pages/Programs';
import Events from './Pages/Events';
import Footer from './Component/Footer'

const App = () => {
  return (
    <div className='App'>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/programs' element={<Programs />} />
          <Route path='/events' element={<Events />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
