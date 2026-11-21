import React from 'react';
import Link from 'next/link';
import { Home, ScanLine, CreditCard, Store, User } from 'lucide-react';

const BottomNav = () => {
  return (
    <nav className="glass" style={{
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      height: '70px',
      display: 'flex',
      justifyContent: 'space-around',
      alignItems: 'center',
      borderTopLeftRadius: '20px',
      borderTopRightRadius: '20px',
      zIndex: 100
    }}>
      <NavItem href="/" icon={<Home size={24} />} label="Home" active />
      <NavItem href="/loans" icon={<CreditCard size={24} />} label="Loans" />
      
      <div style={{ position: 'relative', top: '-25px' }}>
        <Link href="/scan" style={{
          width: '60px',
          height: '60px',
          borderRadius: '50%',
          background: 'var(--color-primary-blue)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 4px 10px rgba(0, 102, 255, 0.4)',
          color: 'white'
        }}>
          <ScanLine size={30} />
        </Link>
      </div>

      <NavItem href="/merchant" icon={<Store size={24} />} label="Khata" />
      <NavItem href="/profile" icon={<User size={24} />} label="Profile" />
    </nav>
  );
};

const NavItem = ({ href, icon, label, active = false }: { href: string, icon: React.ReactNode, label: string, active?: boolean }) => (
  <Link href={href} style={{
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '4px',
    color: active ? 'var(--color-primary-blue)' : 'var(--color-text-muted)',
    fontSize: '10px',
    fontWeight: 500
  }}>
    {icon}
    <span>{label}</span>
  </Link>
);

export default BottomNav;
