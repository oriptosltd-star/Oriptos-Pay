import React from 'react';
import BottomNav from '../Navigation/BottomNav';
import Header from '../Navigation/Header';

interface MobileLayoutProps {
  children: React.ReactNode;
  showNav?: boolean;
}

const MobileLayout: React.FC<MobileLayoutProps> = ({ children, showNav = true }) => {
  return (
    <div className="app-container">
      <Header />
      <main style={{ flex: 1, overflowY: 'auto', paddingBottom: '80px' }}>
        {children}
      </main>
      {showNav && <BottomNav />}
    </div>
  );
};

export default MobileLayout;
