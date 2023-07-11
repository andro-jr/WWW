
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Navbar from './components/Navbar/Navbar';



const App = () => {
  return (
    <>
      <BrowserRouter>


        <Layout />
        <Navbar />
      </BrowserRouter>
    </>
  )
}
export default App