import React, { createContext, useReducer } from "react";


const darkModeReducer = (state, action) => {
  switch (action.type) {
    case "LIGHT": {
      return {
        darkMode: false,
      };
    }
    case "DARK": {
      return {
        darkMode: true,
      };
    }
    case "TOGGLE": {
      return {
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

  return (
    <DarkModeContext.Provider value={{ darkMode: state.darkMode, dispatch }}>
      <div className={`admin-panel ${state.darkMode ? "dark" : ""}`}>
        {children}
      </div>
    </DarkModeContext.Provider>
  );
};


export const Theme = {
  DarkModeContextProvider,
};
