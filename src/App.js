import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Box } from '@mui/material';
import Home from './pages/Home';
import ExerciceDetail from './pages/ExerciceDetail';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './App.css';

const App = () => {
  return (
    <Box width='400px' sx={{ width :{ xl:'1488px'}}} m='auto'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/exercice/:id' element={<ExerciceDetail />} />
      </Routes>
      <Footer/>
    </Box>
  )
}

export default App