import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { DarkModeContextProvider } from './components/Navbar/Theme';
import Theme from './components/Navbar/Theme';
import Layout from './components/Layout';

const App = () => {
  return (
    <DarkModeContextProvider>
      <BrowserRouter>
        <Theme.DarkModeContextProvider>
          <Layout />
        </Theme.DarkModeContextProvider>
      </BrowserRouter>
    </DarkModeContextProvider>
  );
};

export default App;
