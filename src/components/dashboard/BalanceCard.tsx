import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const BalanceCard = () => {
  return (
    <div style={{
      background: 'var(--color-dark)',
      borderRadius: '24px',
      padding: '24px',
      color: 'white',
      marginBottom: '24px',
      boxShadow: 'var(--shadow-lg)',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Background decoration */}
      <div style={{
        position: 'absolute',
        top: '-20px',
        right: '-20px',
        width: '100px',
        height: '100px',
        background: 'var(--color-primary-green)',
        filter: 'blur(50px)',
        opacity: 0.5
      }}></div>

      <div style={{ position: 'relative', zIndex: 1 }}>
        <p style={{ fontSize: '14px', opacity: 0.8, marginBottom: '8px' }}>Total Balance</p>
        <div style={{ display: 'flex', alignItems: 'flex-end', gap: '8px', marginBottom: '20px' }}>
          <h1 style={{ fontSize: '36px', fontWeight: 700, lineHeight: 1 }}>PKR 142,500</h1>
          <span style={{ 
            fontSize: '14px', 
            color: 'var(--color-primary-green)', 
            fontWeight: 600,
            display: 'flex',
            alignItems: 'center',
            marginBottom: '6px'
          }}>
            <ArrowUpRight size={16} /> +2.4%
          </span>
        </div>

        <div style={{ display: 'flex', gap: '12px' }}>
          <button style={{
            background: 'var(--color-primary-green)',
            color: 'white',
            border: 'none',
            padding: '10px 20px',
            borderRadius: '12px',
            fontSize: '14px',
            fontWeight: 600,
            flex: 1,
            cursor: 'pointer'
          }}>Add Money</button>
          <button style={{
            background: 'rgba(255,255,255,0.1)',
            color: 'white',
            border: 'none',
            padding: '10px 20px',
            borderRadius: '12px',
            fontSize: '14px',
            fontWeight: 600,
            flex: 1,
            cursor: 'pointer'
          }}>Transfer</button>
        </div>
      </div>
    </div>
  );
};

export default BalanceCard;
