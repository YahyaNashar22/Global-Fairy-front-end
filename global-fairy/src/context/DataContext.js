import React, { createContext, useContext, useState } from 'react';

const DataContext = createContext();

export function DataProvider({ children }) {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <DataContext.Provider value={{ isNavOpen, setIsNavOpen }}>
      {children}
    </DataContext.Provider>
  );
}

export function useSharedData() {
  return useContext(DataContext);
}
