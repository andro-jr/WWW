import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import Users from './components/Users';
import Packages from './components/Packages';
import ContentsBox from './components/ContentsBox';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Layout />
      </BrowserRouter>
    </>
  );
};

export default App;
