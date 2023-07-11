import Sidebar from './Sidebar';
import '../index.css';
import { Route, Routes } from 'react-router';
import Dashboard from './Dashboard';
import Users from './Users';
import Packages from './Packages';
import Navbar from './Navbar';

function Layout() {
  return (
    <div className='bg-white-subtle w-screen h-screen flex'>
      <Sidebar />
      <div className='flex flex-col w-full'>
        <Navbar />
        <Routes>
          <Route path='/' exact element={<Dashboard />} />
          <Route path='/users' exact element={<Users />} />
          <Route path='/packages' exact element={<Packages />} />
        </Routes>
      </div>
    </div>
  );
}

export default Layout;
