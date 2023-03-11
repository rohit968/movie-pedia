import { Routes, Route } from 'react-router-dom'
import Navbar from './components/navbar/Navbar'
import { Home, Search, DetailPage } from './pages/index'
import './App.css';
import { useState } from 'react';

const App = () => {
  const [input, setInput] = useState("");
  return (
    <>
      <Navbar setInput={setInput} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/search' element={<Search input={input} />} />
        <Route path='/detail/:id' element={<DetailPage />} />
      </Routes>
    </>

  )
}

export default App;
