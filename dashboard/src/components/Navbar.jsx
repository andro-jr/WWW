import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import FullscreenExitOutlinedIcon from "@mui/icons-material/FullscreenExitOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import ListOutlinedIcon from "@mui/icons-material/ListOutlined";

const Navbar = () => {
  return (
    <div className="navbar fixed top-0 left-0 right-0 h-14 border-b border-gray-300 bg-green">
      <div className="wrapper w-full px-4 flex items-center justify-between">
        <div className="items flex items-center border-r border-gray-300 pr-4">
          <div className="item flex items-center mr-4">
            <LanguageOutlinedIcon className="icon" />
            <span className="ml-1">English</span>
          </div>
          <div>
            <DarkModeOutlinedIcon className="icon cursor-pointer mr-2" onClick={() => dispatch({ type: "TOGGLE" })} />
          </div>
          <div>
            <FullscreenExitOutlinedIcon className="icon mr-2" />
          </div>
          <div className="item flex items-center relative mr-2">
            <NotificationsNoneOutlinedIcon className="icon" />
            <div className="counter">1</div>
          </div>
          <div className="item flex items-center relative mr-2">
            <ChatBubbleOutlineOutlinedIcon className="icon" />
            <div className="counter">2</div>
          </div>
          <div>
            <ListOutlinedIcon className="icon" />
          </div>
        </div>
        <div>
          <img
            src="https://www.pexels.com/photo/close-up-photography-of-pink-tulip-flower-36729/"
            alt=""
            className="avatar w-8 h-8 rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
