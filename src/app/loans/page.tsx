'use client';

import React from 'react';
import MobileLayout from '@/components/Layout/MobileLayout';
import { TrendingUp, ShieldCheck, Banknote } from 'lucide-react';

export default function LoansPage() {
  return (
    <MobileLayout>
      <div style={{ padding: '20px' }}>
        <h1 style={{ fontSize: '24px', fontWeight: 700, marginBottom: '20px' }}>Lending Platform</h1>

        {/* Credit Score Meter */}
        <div style={{
          background: 'var(--color-dark)',
          borderRadius: '24px',
          padding: '24px',
          color: 'white',
          marginBottom: '24px',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden'
        }}>
           <div style={{ position: 'relative', zIndex: 1 }}>
             <p style={{ fontSize: '14px', opacity: 0.8, marginBottom: '16px' }}>Your Credit Score</p>
             
             {/* Simple Gauge Visualization */}
             <div style={{
               width: '180px',
               height: '90px', // Half circle
               borderRadius: '90px 90px 0 0',
               background: 'linear-gradient(90deg, #EF4444 0%, #F59E0B 50%, #10B981 100%)',
               margin: '0 auto 16px',
               position: 'relative',
               display: 'flex',
               alignItems: 'end',
               justifyContent: 'center',
               paddingBottom: '0'
             }}>
               <div style={{
                 width: '140px',
                 height: '70px',
                 background: 'var(--color-dark)',
                 borderRadius: '70px 70px 0 0',
                 marginBottom: '0' // To create the arc
               }}></div>
               
               <div style={{
                  position: 'absolute',
                  bottom: '0',
                  left: '50%',
                  transformOrigin: 'bottom center',
                  transform: 'translateX(-50%) rotate(45deg)', // Simulated needle
                  width: '4px',
                  height: '80px',
                  background: 'white',
                  borderRadius: '2px'
               }}></div>
             </div>

             <h2 style={{ fontSize: '48px', fontWeight: 700, lineHeight: 1, marginBottom: '8px' }}>785</h2>
             <p style={{ fontSize: '16px', color: '#10B981', fontWeight: 600, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
               <ShieldCheck size={18} /> Excellent
             </p>
           </div>
        </div>

        {/* Loan Offers */}
        <h3 style={{ fontSize: '18px', fontWeight: 700, marginBottom: '16px' }}>Available Offers</h3>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <LoanCard 
            bank="HBL" 
            amount="50,000" 
            color="#008540" 
            status="Pre-Approved"
          />
          <LoanCard 
            bank="UBL" 
            amount="25,000" 
            color="#2E4C9D" 
            status="Apply Now"
          />
          <LoanCard 
            bank="Layyah Wallet" 
            amount="5,000" 
            color="#0066FF" 
            status="Instant"
          />
        </div>
        
        <div style={{ marginTop: '32px', padding: '20px', background: '#F0F9FF', borderRadius: '16px' }}>
          <h4 style={{ fontSize: '16px', fontWeight: 700, marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '8px' }}>
             <TrendingUp size={20} color="var(--color-primary-blue)" /> 
             Improve your Score
          </h4>
          <p style={{ fontSize: '14px', color: 'var(--color-text-muted)', lineHeight: 1.5 }}>
            Use your <strong>Wise Card</strong> for grocery shopping to boost your score by 15 points next month.
          </p>
        </div>

      </div>
    </MobileLayout>
  );
}

const LoanCard = ({ bank, amount, color, status }: { bank: string, amount: string, color: string, status: string }) => (
  <div style={{
    background: 'white',
    borderRadius: '20px',
    padding: '20px',
    boxShadow: 'var(--shadow-sm)',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  }}>
    <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
      <div style={{
        width: '48px',
        height: '48px',
        borderRadius: '12px',
        background: color,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        fontWeight: 700,
        fontSize: '14px'
      }}>
        {bank.substring(0, 3)}
      </div>
      <div>
        <p style={{ fontSize: '14px', color: 'var(--color-text-muted)' }}>{bank}</p>
        <p style={{ fontSize: '18px', fontWeight: 700 }}>PKR {amount}</p>
      </div>
    </div>
    <button style={{
      background: status === 'Pre-Approved' || status === 'Instant' ? '#ECFDF5' : '#F8FAFC',
      color: status === 'Pre-Approved' || status === 'Instant' ? '#059669' : 'var(--color-text-main)',
      padding: '8px 16px',
      borderRadius: '12px',
      border: 'none',
      fontWeight: 600,
      fontSize: '13px'
    }}>
      {status}
    </button>
  </div>
);
