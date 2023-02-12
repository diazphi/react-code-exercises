import React, { useState } from 'react';
import './App.css';
import './index.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { Home, About, Contact, HookReducer } from './pages';
import { userContext } from './components/userContext';
function App() {
  const [value, setValue] = useState('Hello from context');
  return (
    <div className="md:container md:mx-auto">
      
      <BrowserRouter>
        <nav className="py-8 px-8">
          <Link to="/" className="px-4">Home</Link>
          <Link to="/hook-reducer" className="px-4">Hook Reducer</Link>
          <Link to="/about" className="px-4">About Us</Link>
          <Link to="/contact" className="px-4">Contact Us</Link>
        </nav>
        <userContext.Provider value={[value, setValue]}>
              <Routes>
              
                  <Route path="/" exact element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/hook-reducer" element={<HookReducer />} />
              
              </Routes>
        </userContext.Provider>  
      </BrowserRouter>
    </div>
  )
}

export default App;
