import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/frontend/Navbar';
import Topbar from '../components/frontend/Topbar';

const MainLayout = () => {
  return (
    <div>
      <Topbar/>
      <Navbar/>
      <Outlet></Outlet>
    </div>
  );
};

export default MainLayout;