import React, { createContext, useState } from 'react';

export const DataContext = createContext();

const DataProvider = ({ children }) => {
  const [userCount, setUserCount] = useState();

  console.log(userCount);

  const putUserCount = (count) => {
    setUserCount(count);
  };

  return (
    <DataContext.Provider value={putUserCount}>{children}</DataContext.Provider>
  );
};

export default DataProvider;
