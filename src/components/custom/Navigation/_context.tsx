import React, { createContext, useState, useContext, FC } from "react";
import { INavigationContext } from "./_interface";
const NavigationContext = createContext<Partial<INavigationContext>>({});

const NavigationProvider: FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);

  const openSidebar = () => {
    setIsSidebarOpen(true);
  };
  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };
  
  const toggleSidebar = () =>{
    setIsSidebarOpen(prev => !prev);
  }
  return (
    <NavigationContext.Provider
      value={{
        isSidebarOpen,
        openSidebar,
        closeSidebar,
        toggleSidebar
      }}
    >
      {children}
    </NavigationContext.Provider>
  );
};

const useNavigationContext = () => useContext(NavigationContext);

export { NavigationContext, NavigationProvider, useNavigationContext };