import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from '@mui/material';

import { Navbar, Sidebar, Layout } from './components'

const App = () => {
  return (
    <>
      <Layout />
      <Navbar />
    </>
  )
}
export default App