import { createContext, useContext, useState } from "react";

const PageLoadContext = createContext();

export const PageLoadProvider = ({ children }) => {
  const [isPageLoaded, setIsPageLoaded] = useState(false);

  return (
    <PageLoadContext.Provider value={{ isPageLoaded, setIsPageLoaded }}>
      {children}
    </PageLoadContext.Provider>
  );
};

export const usePageLoad = () => useContext(PageLoadContext);
