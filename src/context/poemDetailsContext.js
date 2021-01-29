import React, { useState, createContext } from 'react';

export const PoemDetailsContext = createContext();

export const PoemDetailsContextProvider = (props) => {
  const [poemDetails, setPoemDetails] = useState([]);
  const [expanded, setExpanded] = useState('closed');

  return (
    <PoemDetailsContext.Provider
      value={{
        poemDetails,
        setPoemDetails,
        expanded,
        setExpanded,
      }}
    >
      {props.children}
    </PoemDetailsContext.Provider>
  );
};
