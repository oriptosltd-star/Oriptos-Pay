'use client';

import React from 'react';
import MobileLayout from '@/components/Layout/MobileLayout';
import BalanceCard from '@/components/Dashboard/BalanceCard';
import QuickActions from '@/components/Dashboard/QuickActions';
import CardCarousel from '@/components/Dashboard/CardCarousel';

export default function Home() {
  return (
    <MobileLayout>
      <div style={{ padding: '20px', paddingTop: '10px' }}>
        <BalanceCard />
        <QuickActions />
        <CardCarousel />
        
        {/* Recent Transactions Teaser */}
        <div style={{ marginTop: '10px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
            <h3 style={{ fontSize: '16px', fontWeight: 600 }}>Recent Activity</h3>
            <span style={{ fontSize: '12px', color: 'var(--color-primary-blue)', fontWeight: 600 }}>See All</span>
          </div>
          <div style={{ background: 'white', borderRadius: '16px', padding: '0 16px' }}>
            {[1, 2, 3].map((item, i) => (
              <div key={i} style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '16px 0',
                borderBottom: i !== 2 ? '1px solid var(--color-gray-100)' : 'none'
              }}>
                <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                  <div style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    background: '#F0F9FF',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '18px'
                  }}>
                    🛒
                  </div>
                  <div>
                    <p style={{ fontSize: '14px', fontWeight: 600 }}>Grocery Store</p>
                    <p style={{ fontSize: '12px', color: 'var(--color-text-muted)' }}>Today, 10:23 AM</p>
                  </div>
                </div>
                <span style={{ fontSize: '14px', fontWeight: 600, color: '#DC2626' }}>- Rs. 4,500</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </MobileLayout>
  );
}
