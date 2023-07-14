import Sidebar from './sidebar/Sidebar';
import '../index.css';
import { Route, Routes } from 'react-router';
import Dashboard from './dashboard/Dashboard';
import Users from './Users/Users';
import Packages from './packages/Packages';
import Navbar from './Navbar/Navbar';
import EditUser from './Users/EditUser';
import AddUser from './Users/AddUser';
import AddPackage from './packages/AddPackage';
import EditPackage from './packages/EditPackage';
import PackageDetails from './packages/PackageDetails';
import Bookings from './bookings/Bookings';

function Layout() {
  return (
    <div className='bg-white-subtle min-h-screen flex'>
      <Sidebar />
      <div className='flex flex-col w-4/5'>
        <Navbar />
        <Routes>
          <Route path='/' exact element={<Dashboard />} />
          <Route path='/users' exact element={<Users />} />
          <Route path='/edit-user/:id' exact element={<EditUser />} />
          <Route path='/add-user' exact element={<AddUser />} />
          <Route path='/packages' exact element={<Packages />} />
          <Route path='/add-package' exact element={<AddPackage />} />
          <Route path='/edit-package/:id' exact element={<EditPackage />} />
          <Route path='/bookings' exact element={<Bookings />} />
          <Route
            path='/package-details/:id'
            exact
            element={<PackageDetails />}
          />
        </Routes>
      </div>
    </div>
  );
}

export default Layout;
