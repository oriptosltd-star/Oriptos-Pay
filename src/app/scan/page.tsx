'use client';

import React, { useState } from 'react';
import MobileLayout from '@/components/Layout/MobileLayout';
import { Camera, X, Check, CreditCard, Wallet } from 'lucide-react';
import Link from 'next/link';

export default function ScanPage() {
  const [step, setStep] = useState<'scan' | 'pay' | 'success'>('scan');
  
  const handleScan = () => {
    // Simulate scan delay
    setTimeout(() => setStep('pay'), 1500);
  };

  const handlePay = () => {
    setStep('success');
  };

  return (
    <MobileLayout showNav={false}>
      {step === 'scan' && (
        <div style={{ position: 'relative', height: '100%', background: 'black' }}>
          {/* Simulated Camera Feed */}
          <div style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: 'url("https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?auto=format&fit=crop&q=80")', // Generic shop background
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.6
          }}></div>

          <div style={{ position: 'absolute', top: '20px', right: '20px', zIndex: 10 }}>
            <Link href="/" style={{ color: 'white' }}><X size={32} /></Link>
          </div>

          <div style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '250px',
            height: '250px',
            border: '2px solid rgba(255,255,255,0.5)',
            borderRadius: '24px',
            zIndex: 10,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <div style={{
              width: '230px',
              height: '2px',
              background: '#00C853',
              boxShadow: '0 0 10px #00C853',
              animation: 'scan 2s infinite ease-in-out'
            }}></div>
            <style jsx>{`
              @keyframes scan {
                0% { transform: translateY(-110px); }
                50% { transform: translateY(110px); }
                100% { transform: translateY(-110px); }
              }
            `}</style>
          </div>

          <div style={{
            position: 'absolute',
            bottom: '40px',
            left: '0',
            right: '0',
            display: 'flex',
            justifyContent: 'center'
          }}>
             <button onClick={handleScan} style={{
               background: 'white',
               color: 'black',
               padding: '12px 32px',
               borderRadius: '50px',
               fontWeight: 600,
               display: 'flex',
               alignItems: 'center',
               gap: '8px'
             }}>
               <Camera size={20} /> Simulate Scan
             </button>
          </div>
        </div>
      )}

      {step === 'pay' && (
        <div style={{ padding: '24px', height: '100%', display: 'flex', flexDirection: 'column' }}>
          <div style={{ flex: 1 }}>
            <div style={{ textAlign: 'center', marginBottom: '32px' }}>
              <div style={{ width: '60px', height: '60px', background: '#F0F9FF', borderRadius: '50%', margin: '0 auto 16px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span style={{ fontSize: '24px' }}>🏪</span>
              </div>
              <h2 style={{ fontSize: '20px', fontWeight: 700 }}>Ali General Store</h2>
              <p style={{ color: 'var(--color-text-muted)' }}>ID: 98234723</p>
            </div>

            <div style={{ marginBottom: '32px' }}>
              <label style={{ display: 'block', fontSize: '14px', marginBottom: '8px', color: 'var(--color-text-muted)' }}>Enter Amount</label>
              <div style={{ display: 'flex', alignItems: 'center', borderBottom: '2px solid var(--color-gray-200)', paddingBottom: '8px' }}>
                <span style={{ fontSize: '24px', fontWeight: 600, marginRight: '8px' }}>PKR</span>
                <input type="number" defaultValue={500} style={{ 
                  fontSize: '32px', 
                  fontWeight: 700, 
                  border: 'none', 
                  outline: 'none', 
                  width: '100%',
                  background: 'transparent'
                }} />
              </div>
            </div>

            <div style={{ marginBottom: '24px' }}>
               <h3 style={{ fontSize: '16px', fontWeight: 600, marginBottom: '16px' }}>Pay via</h3>
               
               <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                 <label style={{ 
                   display: 'flex', 
                   alignItems: 'center', 
                   gap: '12px', 
                   padding: '16px', 
                   borderRadius: '16px', 
                   border: '2px solid var(--color-primary-green)',
                   background: '#F0FDF4',
                   cursor: 'pointer'
                 }}>
                   <input type="radio" name="method" defaultChecked style={{ accentColor: 'var(--color-primary-green)' }} />
                   <div style={{ width: '40px', height: '40px', background: 'white', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                     <Wallet size={20} color="#00C853" />
                   </div>
                   <div style={{ flex: 1 }}>
                     <p style={{ fontWeight: 600 }}>Layyah Wallet</p>
                     <p style={{ fontSize: '12px', color: 'var(--color-text-muted)' }}>Balance: PKR 142,500</p>
                   </div>
                 </label>

                 <label style={{ 
                   display: 'flex', 
                   alignItems: 'center', 
                   gap: '12px', 
                   padding: '16px', 
                   borderRadius: '16px', 
                   border: '1px solid var(--color-gray-200)',
                   background: 'white',
                   cursor: 'pointer'
                 }}>
                   <input type="radio" name="method" style={{ accentColor: 'var(--color-primary-green)' }} />
                   <div style={{ width: '40px', height: '40px', background: '#F5F5F5', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                     <CreditCard size={20} color="#000" />
                   </div>
                   <div style={{ flex: 1 }}>
                     <p style={{ fontWeight: 600 }}>Chase Wise Card</p>
                     <p style={{ fontSize: '12px', color: 'var(--color-text-muted)' }}>**** 4242</p>
                   </div>
                 </label>
               </div>
            </div>
          </div>

          <button onClick={handlePay} style={{
            width: '100%',
            padding: '16px',
            background: 'var(--color-dark)',
            color: 'white',
            border: 'none',
            borderRadius: '16px',
            fontSize: '16px',
            fontWeight: 700,
            cursor: 'pointer'
          }}>Pay PKR 500</button>
        </div>
      )}

      {step === 'success' && (
        <div style={{ padding: '24px', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
           <div style={{
             width: '80px',
             height: '80px',
             borderRadius: '50%',
             background: '#00C853',
             display: 'flex',
             alignItems: 'center',
             justifyContent: 'center',
             marginBottom: '24px',
             boxShadow: '0 10px 20px rgba(0, 200, 83, 0.3)'
           }}>
             <Check size={40} color="white" />
           </div>
           
           <h2 style={{ fontSize: '24px', fontWeight: 700, marginBottom: '8px', color: 'var(--color-primary-green)' }}>Payment Successful!</h2>
           <p style={{ fontSize: '16px', color: 'var(--color-text-muted)', marginBottom: '32px' }}>
             Paid PKR 500 to <br/> <strong style={{ color: 'black' }}>Ali General Store</strong>
           </p>

           <div style={{
             background: '#F8FAFC',
             padding: '24px',
             borderRadius: '20px',
             width: '100%',
             marginBottom: '32px',
             textAlign: 'left'
           }}>
             <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px' }}>
               <span style={{ color: 'var(--color-text-muted)' }}>Transaction ID</span>
               <span style={{ fontWeight: 500 }}>TRX-987234</span>
             </div>
             <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0' }}>
               <span style={{ color: 'var(--color-text-muted)' }}>Date & Time</span>
               <span style={{ fontWeight: 500 }}>24 Jan, 10:30 AM</span>
             </div>
           </div>

           <Link href="/" style={{
            width: '100%',
            padding: '16px',
            background: 'var(--color-dark)',
            color: 'white',
            border: 'none',
            borderRadius: '16px',
            fontSize: '16px',
            fontWeight: 700,
            display: 'block'
           }}>Return to Home</Link>
        </div>
      )}
    </MobileLayout>
  );
}
