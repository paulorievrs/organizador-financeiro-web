import React, { createContext, useContext, useState } from "react";

type LoadingContextProps = {
  children: React.ReactNode;
};

type LoadingContextType = {
  loading: boolean;
  setLoading: (value: boolean) => void;
};

const LoadingContext = createContext<LoadingContextType>({
  loading: false,
  setLoading: () => {}
});

export const LoadingProvider = ({ children }: LoadingContextProps) => {
  const [loading, setLoading] = useState(false);

  const contextData: LoadingContextType = {
    loading,
    setLoading
  };

  return (
    <LoadingContext.Provider value={contextData}>
      {children}
    </LoadingContext.Provider>
  );
};

export function useLoading() {
  return useContext(LoadingContext);
}
