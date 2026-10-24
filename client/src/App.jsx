import React from 'react';
import Home from './pages/Home';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className='min-h-screen bg-[#020203] text-gray-400 font-sans selection:bg-blue-600 selection:text-white overflow-hidden'>
      <Home />
    </div>
  )
}

export default App
