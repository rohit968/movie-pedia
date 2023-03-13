import { Routes, Route } from 'react-router-dom'
import Navbar from './components/navbar/Navbar'
import { Home, Search, DetailPage, SignupPage, SigninPage, Movies } from './pages/index'
import './App.scss';
import { useState } from 'react';
import MoreMovies from './pages/MoreMovies';

const App = () => {
  const [input, setInput] = useState("");
  return (
    <>
      <Navbar setInput={setInput} />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/search' element={<Search input={input} />} />
        <Route exact path='/detail/:id' element={<DetailPage />} />
        <Route exact path='/moremovies/:pagename' element={<MoreMovies />} />
        <Route exact path='/signup' element={<SignupPage />} />
        <Route exact path='/signin' element={<SigninPage />} />
        <Route exact path='/movies' element={<Movies />} />
      </Routes>
    </>

  )
}

export default App;
