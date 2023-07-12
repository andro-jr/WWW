import React, { useState, useContext } from 'react';
import { DarkModeContext } from './Theme';
import CustomLink from '../utils/CustomLink';

const UserProfile = () => {
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const { darkMode, dispatch } = useContext(DarkModeContext);

  const handleProfileClick = () => {
    setShowProfileMenu(!showProfileMenu);
  };

  const handleThemeToggle = () => {
    dispatch({ type: 'TOGGLE' });
  };

  return (
    <div className="relative">
      <button
        onClick={handleProfileClick}
        className="rounded-full overflow-hidden focus:outline-none"
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/4/41/Sunflower_from_Silesia2.jpg"
          alt="Profile"
          className="w-12 h-12"
        />
      </button>
      {showProfileMenu && (
        <div className="profile-menu absolute right-0 mt-2 w-48 bg-white border border-gray-300 rounded-md shadow-md">
          <ul className="py-2">
            <li>
              <CustomLink
                to="/logout"
                className="px-4 py-3 hover:bg-gray-100 flex items-center space-x-2"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" />
                </svg>

                <span>Logout</span>
              </CustomLink>
            </li>
            <li>
              <CustomLink
                to="/settings"
                className="px-4 py-3 hover:bg-gray-100 flex items-center space-x-2"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 011.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.56.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.893.149c-.425.07-.765.383-.93.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 01-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.397.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 01-.12-1.45l.527-.737c.25-.35.273-.806.108-1.204-.165-.397-.505-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.107-1.204l-.527-.738a1.125 1.125 0 01.12-1.45l.773-.773a1.125 1.125 0 011.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894z" />
                  <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>

                <span>Settings</span>
              </CustomLink>
            </li>
            <li>
              <button
                onClick={handleThemeToggle}
                className="px-4 py-3 hover:bg-gray-100 flex items-center space-x-2"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
                </svg>

                <span>{darkMode ? 'Light Mode' : 'Dark Mode'}</span>
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default UserProfile;
