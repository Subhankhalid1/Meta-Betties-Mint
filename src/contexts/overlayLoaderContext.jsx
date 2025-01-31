import { createContext, useMemo, useState } from 'react';

export const OverlayLoaderContext = createContext({
  isLoading: false,
  setLoading(_value) {},
  toggleLoading() {},
});

const OverlayLoaderContextProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);

  const setLoading = (value) => {
    setIsLoading(value);
  };

  const toggleLoading = () => {
    setIsLoading((prev) => !prev);
  };

  const values = useMemo(
    () => ({
      isLoading,
      setLoading,
      toggleLoading,
    }),
    [isLoading],
  );

  return <OverlayLoaderContext.Provider value={values}>{children}</OverlayLoaderContext.Provider>;
};

export default OverlayLoaderContextProvider;

