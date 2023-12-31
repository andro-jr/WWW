import UserProfile from './UserProfile';
import { FaHamburger } from 'react-icons/fa';

const Navbar = () => {
  return (
    <div className='navbar w-full bg-white shadow-sm'>
      <div className='wrapper w-full p-5 rounded-md flex items-center justify-between'>
        <div className='items flex items-center pr-4'>
          <FaHamburger />
        </div>
        <UserProfile />
      </div>
    </div>
  );
};

export default Navbar;
