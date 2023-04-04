import React, { createContext, useState } from "react";

const ScrollContext = createContext();

const ScrollProvider = ({ children }) => {
  const [scrollTo, setScrollTo] = useState("");
  return (
    <ScrollContext.Provider value={{ scrollTo, setScrollTo }}>
      {children}
    </ScrollContext.Provider>
  );
};

export { ScrollContext, ScrollProvider };