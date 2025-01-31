import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Sidebar from '../layouts/sideBar';
import TopNavbar from '../layouts/topNavBar';
import OverlayLoader from '../components/shared/overlayLoader';
import { useSelector } from 'react-redux';
import { ConnectMetaBatties } from '../pages/metaConnect';
import { privateRoutes } from './privateRoutes';
import { publicRoutes } from './publicRoutes';
import { PrivateRoute } from './private';
import { adminRoutes } from './adminRoutes';
import { AdminRoute } from './admin';

const AppRoutes = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);
  const [isSidebarOpen, setIsSidebarOpen] = useState(!isMobile);
  const token = useSelector((state) => state.auth.token);

  useEffect(() => {
    const handleResize = () => {
      const currentIsMobile = window.innerWidth < 1024;
      setIsMobile(currentIsMobile);
      if (currentIsMobile !== isMobile) {
        setIsSidebarOpen(!currentIsMobile);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isMobile]);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      {token ? (
        <>
          <BrowserRouter>
            <div style={{ display: 'flex', height: '100vh', overflow: 'hidden' }}>
              <div
                style={{
                  minWidth: isSidebarOpen ? '120px' : '0',
                  transition: 'min-width 0.3s ease',
                  zIndex: isMobile && isSidebarOpen ? 200 : 100,
                  position: isMobile ? 'absolute' : 'relative',
                  height: '100%',
                }}
              >
                <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
              </div>

              <div
                className="lg:mt-0 mt-10"
                style={{
                  flex: 1,
                  overflowY: 'auto',
                  marginLeft: isMobile ? '0' : isSidebarOpen ? '230px' : '0',
                  width: isMobile ? '100%' : 'auto',
                  position: 'relative',
                  zIndex: 1,
                }}
              >
                <TopNavbar toggleSidebar={toggleSidebar} />
                <Routes>
                  {publicRoutes.map((item) => {
                    const { component: Component } = item;
                    return <Route path={item.path} element={<Component />} key={item.name} />;
                  })}
                  {privateRoutes.map((item) => {
                    const { component: Component } = item;
                    return (
                      <Route
                        path={item.path}
                        element={
                          <PrivateRoute>
                            <Component />
                          </PrivateRoute>
                        }
                        key={item.name}
                      />
                    );
                  })}

                  {adminRoutes.map((item) => {
                    const { component: Component } = item;
                    return (
                      <Route
                        path={item.path}
                        element={
                          <PrivateRoute>
                            <AdminRoute>
                              <Component />
                            </AdminRoute>
                          </PrivateRoute>
                        }
                        key={item.name}
                      />
                    );
                  })}

                  <Route
                    path="*"
                    element={<h1 className="text-center text-white mt-10 font-extrabold">Page not found</h1>}
                  />
                </Routes>
              </div>
            </div>
            <OverlayLoader />
          </BrowserRouter>
        </>
      ) : (
        <>
          <ConnectMetaBatties />
          <OverlayLoader />
        </>
      )}
    </>
  );
};

export default AppRoutes;
