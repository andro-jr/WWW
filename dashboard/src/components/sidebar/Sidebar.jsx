import React from 'react';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import SideBarItem from './SideBarItem';
import CustomLink from '../CustomLink';

const Sidebar = () => {
  return (
    <aside className='bg-white w-1/5 shadow-sm'>
      <Link to='/' className='flex gap-2 mb-4 mr-4 pl-6 mt-5'>
        <span className='logo mb-6'>Travel .</span>
      </Link>
      <nav className='flex flex-col text-black-60'>
        <CustomLink to='/'>
          <SideBarItem name='Dashboard' />
        </CustomLink>

        <CustomLink to='/users'>
          <SideBarItem name='Users' />
        </CustomLink>

        <CustomLink to='/packages'>
          <SideBarItem name='Packages' />
        </CustomLink>

        <CustomLink to='/booking' name='Bookings'>
          <SideBarItem name='Bookings' />
        </CustomLink>
      </nav>
    </aside>
  );
};

export default Sidebar;
