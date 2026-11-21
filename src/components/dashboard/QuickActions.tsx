import React from 'react';
import { Scan, Send, Download, Plus, Smartphone, Lightbulb, Wifi, Zap } from 'lucide-react';
import Link from 'next/link';

const actions = [
  { icon: <Scan size={24} />, label: 'Scan QR', color: '#4F46E5', href: '/scan' },
  { icon: <Send size={24} />, label: 'Send', color: '#00C853', href: '/send' },
  { icon: <Download size={24} />, label: 'Receive', color: '#0EA5E9', href: '/receive' },
  { icon: <Plus size={24} />, label: 'Top Up', color: '#F59E0B', href: '/topup' },
  { icon: <Smartphone size={24} />, label: 'Mobile', color: '#8B5CF6', href: '/bills' },
  { icon: <Lightbulb size={24} />, label: 'Bills', color: '#EC4899', href: '/bills' },
  { icon: <Wifi size={24} />, label: 'Internet', color: '#10B981', href: '/bills' },
  { icon: <Zap size={24} />, label: 'More', color: '#64748B', href: '/more' },
];

const QuickActions = () => {
  return (
    <div style={{ marginBottom: '24px' }}>
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(4, 1fr)', 
        gap: '16px',
        background: 'white',
        padding: '20px',
        borderRadius: '20px',
        boxShadow: 'var(--shadow-sm)'
      }}>
        {actions.map((action, index) => (
          <Link href={action.href} key={index} style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '8px',
            cursor: 'pointer'
          }}>
            <div style={{
              width: '50px',
              height: '50px',
              borderRadius: '16px',
              background: `${action.color}15`, // 15% opacity
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: action.color
            }}>
              {action.icon}
            </div>
            <span style={{ fontSize: '12px', color: 'var(--color-text-main)', fontWeight: 500 }}>
              {action.label}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default QuickActions;
