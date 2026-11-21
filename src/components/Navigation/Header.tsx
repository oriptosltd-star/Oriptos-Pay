import React, { useState } from 'react';
import { Bell, Menu } from 'lucide-react';

const Header = () => {
  const [hasNotification, setHasNotification] = useState(true);

  return (
    <header style={{
      padding: '16px 20px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      background: 'transparent',
      zIndex: 50
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <div style={{
          width: '40px',
          height: '40px',
          borderRadius: '50%',
          background: '#fff',
          overflow: 'hidden',
          border: '2px solid var(--color-primary-blue)'
        }}>
          {/* Placeholder for user avatar */}
          <img src="https://ui-avatars.com/api/?name=User+Name&background=0D8ABC&color=fff" alt="User" style={{ width: '100%', height: '100%' }} />
        </div>
        <div>
          <h2 style={{ fontSize: '14px', color: 'var(--color-text-muted)', fontWeight: 400 }}>Good Morning</h2>
          <h1 style={{ fontSize: '18px', fontWeight: 700, color: 'var(--color-text-main)' }}>Ali Raza</h1>
        </div>
      </div>

      <div style={{ display: 'flex', gap: '16px' }}>
        <div style={{ position: 'relative', cursor: 'pointer' }}>
          <Bell size={24} color="var(--color-dark)" />
          {hasNotification && (
            <span style={{
              position: 'absolute',
              top: '0',
              right: '2px',
              width: '8px',
              height: '8px',
              background: 'red',
              borderRadius: '50%',
              border: '1px solid white'
            }}></span>
          )}
        </div>
        <Menu size={24} color="var(--color-dark)" style={{ cursor: 'pointer' }} />
      </div>
    </header>
  );
};

export default Header;
