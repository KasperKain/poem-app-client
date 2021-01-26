import React, { useState, createContext } from 'react';

export const StyleContext = createContext();

export const StyleContextProvider = (props) => {
  const [styles, setStyles] = useState([]);

  return (
    <StyleContext.Provider value={{ styles, setStyles }}>
      {props.children}
    </StyleContext.Provider>
  );
};
