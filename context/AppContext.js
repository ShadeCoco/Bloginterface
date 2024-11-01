// context/AppContext.js
import React, { createContext, useContext, useState } from "react";

// Create the Context object
const AppContext = createContext();

// Create a provider component
export const AppProvider = ({ children }) => {
  // Define your state and any state-modifying functions
  const [stateValue, setStateValue] = useState("Initial Value");

  const updateValue = (newValue) => {
    setStateValue(newValue);
  };

  return (
    <AppContext.Provider value={{ stateValue, updateValue }}>
      {children}
    </AppContext.Provider>
  );
};

// Custom hook for accessing the context
export const useAppContext = () => {
  return useContext(AppContext);
};
