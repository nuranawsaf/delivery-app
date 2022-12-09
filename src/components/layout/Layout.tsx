import React from 'react';

import dynamic from 'next/dynamic';

import { SideBar } from './Navbar/DasktopNavbar/SideBar';
import MobileNavbar from './Navbar/MobileNavbar/MobileNavbar';

const ToggleButton = dynamic(
  () => import('@components/shared/buttons/ToggleButton/ToggleButton'),
  {
    ssr: false,
  }
);

const TopNavbar = dynamic(() => import('./Navbar/DasktopNavbar/TopNavbar'), {
  ssr: false,
});

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="relative">
      <div className="h-screen  flex md:overflow-hidden ">
        <aside className="md:w-[6rem] xl:w-[20rem] bg-white dark:bg-black h-full  shadow-sm hidden md:block">
          <SideBar />
        </aside>
        <main className="flex-1 h-full md:flex flex-col shadow-sm ">
          <div className="hidden md:block">
            <TopNavbar />
          </div>
          <MobileNavbar />
          <div className="flex-1 overflow-scroll">{children}</div>
        </main>
      </div>
    </div>
  );
};

export default Layout;
