/*--------------------------------------*
  src/components/layout/Layout.tsx
*---------------------------------------*/
import React from 'react';
import Header from './Header';
import SideMenu from './SideMenu';
import Footer from './Footer';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="app-container">
    <Header />
    <div className="body-container">
      <SideMenu />
      {children}
    </div>
    <Footer />
  </div>
);

export default Layout;