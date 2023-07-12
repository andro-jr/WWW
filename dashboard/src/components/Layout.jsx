import Sidebar from './sidebar/Sidebar';
import '../index.css';
import { Route, Routes } from 'react-router';
import Dashboard from './dashboard/Dashboard';
import Users from './Users/Users';
import Packages from './Packages';
import Navbar from './Navbar/Navbar';
import EditUser from './Users/EditUser';
import AddUser from './Users/AddUser';

function Layout() {
  return (
    <div className='bg-white-subtle w-screen h-screen flex'>
      <Sidebar />
      <div className='flex flex-col w-full'>
        <Navbar />
        <Routes>
          <Route path='/' exact element={<Dashboard />} />
          <Route path='/users' exact element={<Users />} />
          <Route path='/edit-user/:id' exact element={<EditUser />} />
          <Route path='/add-user' exact element={<AddUser />} />
          <Route path='/packages' exact element={<Packages />} />
        </Routes>
      </div>
    </div>
  );
}

export default Layout;
