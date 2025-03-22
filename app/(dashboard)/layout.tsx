import React, { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <p className="text-3xl">Dashboard Navbar</p>
      {children}
    </div>
  );
};

export default Layout;
