import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import FullscreenExitOutlinedIcon from '@mui/icons-material/FullscreenExitOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import ListOutlinedIcon from '@mui/icons-material/ListOutlined';

const Navbar = () => {
  return (
    <div className='navbar w-full bg-white'>
      <div className='wrapper w-full p-5 rounded-md flex items-center justify-between'>
        <div className='items flex items-center pr-4'>hamburger</div>
        <div>User</div>
      </div>
    </div>
  );
};

export default Navbar;
