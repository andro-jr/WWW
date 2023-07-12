import React, { createContext, useReducer, useEffect } from 'react';

const darkModeReducer = (state, action) => {
  switch (action.type) {
    case 'TOGGLE': {
      return {
        ...state,
        darkMode: !state.darkMode,
      };
    }
    default:
      return state;
  }
};

const initialDarkModeState = {
  darkMode: false,
};

export const DarkModeContext = createContext(initialDarkModeState);

export const DarkModeContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(darkModeReducer, initialDarkModeState);

  useEffect(() => {
    const rootClassList = document.documentElement.classList;
    if (state.darkMode) {
      rootClassList.add('dark');
    } else {
      rootClassList.remove('dark');
    }
  }, [state.darkMode]);

  const toggleDarkMode = () => {
    dispatch({ type: 'TOGGLE' });
  };

  return (
    <DarkModeContext.Provider value={{ darkMode: state.darkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};

const Theme = {
  DarkModeContextProvider,
};

export default Theme;
