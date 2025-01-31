import React, { useState, useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import AppRoutes from './routes/appRoutes';
import OverlayLoaderContextProvider from './contexts/overlayLoaderContext';
import { Provider } from "react-redux"
import { Store } from './store';

function App() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);

  useEffect(() => {
    const handleResize = () => {
      const currentIsMobile = window.innerWidth < 1024;
      setIsMobile(currentIsMobile);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isMobile]);

  return (


    <div className="bg-[#0D0D0D]">
      <Provider store={Store}>
        <OverlayLoaderContextProvider>
          <ToastContainer
          position='top-right'
          autoClose={1000}
          hideProgressBar
          closeOnClick
          pauseOnHover
          draggable
          />
          <AppRoutes />
        </OverlayLoaderContextProvider>
      </Provider>
    </div>


  );
}

export default App;