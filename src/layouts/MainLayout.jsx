import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/frontend/Navbar';
import Topbar from '../components/frontend/Topbar';
import Footer from '../components/frontend/Footer';
import Navbar2 from '../components/frontend/Navbar2';

const MainLayout = () => {
  return (
    <div>
      <div className="hidden lg:block">
        <Topbar />
      </div>
      <Navbar />
      <Outlet></Outlet>
      <Footer/>
    </div>
  );
};

export default MainLayout;