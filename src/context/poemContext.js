import React, { useState, createContext } from 'react';

export const PoemContext = createContext();

export const PoemContextProvider = (props) => {
  const [poems, setPoems] = useState([]);

  return (
    <PoemContext.Provider value={{ poems, setPoems }}>
      {props.children}
    </PoemContext.Provider>
  );
};
