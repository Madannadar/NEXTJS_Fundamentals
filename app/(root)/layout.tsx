import React, { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <p className="text-3xl">Navbar</p>
      {children}
    </div>
  );
};

export default Layout;
