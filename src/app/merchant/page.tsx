'use client';

import React from 'react';
import MobileLayout from '@/components/Layout/MobileLayout';
import { BookOpen, UserPlus, Volume2 } from 'lucide-react';

export default function MerchantPage() {
  return (
    <MobileLayout>
      <div style={{ padding: '20px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
          <h1 style={{ fontSize: '24px', fontWeight: 700 }}>Digital Khata</h1>
          <button style={{
            background: 'var(--color-primary-blue)',
            color: 'white',
            width: '40px',
            height: '40px',
            borderRadius: '12px',
            border: 'none',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <UserPlus size={20} />
          </button>
        </div>

        {/* Khata Summary */}
        <div style={{
          background: 'linear-gradient(135deg, #4F46E5 0%, #7C3AED 100%)',
          borderRadius: '20px',
          padding: '24px',
          color: 'white',
          marginBottom: '24px',
          display: 'flex',
          justifyContent: 'space-between'
        }}>
          <div>
            <p style={{ fontSize: '14px', opacity: 0.8, marginBottom: '4px' }}>You will give</p>
            <p style={{ fontSize: '20px', fontWeight: 700 }}>PKR 0</p>
          </div>
          <div style={{ textAlign: 'right' }}>
            <p style={{ fontSize: '14px', opacity: 0.8, marginBottom: '4px' }}>You will get</p>
            <p style={{ fontSize: '20px', fontWeight: 700, color: '#A7F3D0' }}>PKR 12,400</p>
          </div>
        </div>

        {/* Customer List */}
        <h3 style={{ fontSize: '16px', fontWeight: 600, marginBottom: '16px' }}>Customers</h3>
        
        <div style={{ background: 'white', borderRadius: '20px', overflow: 'hidden', boxShadow: 'var(--shadow-sm)' }}>
           {[
             { name: 'Ahmed Traders', amount: 1200, time: '2h ago' },
             { name: 'Fatima Boutique', amount: 850, time: '5h ago' },
             { name: 'Rehman Cold Drink', amount: 300, time: '1d ago' },
             { name: 'Asif Electric', amount: 4500, time: '2d ago' }
           ].map((item, i) => (
             <div key={i} style={{
               padding: '16px',
               borderBottom: '1px solid var(--color-gray-100)',
               display: 'flex',
               justifyContent: 'space-between',
               alignItems: 'center'
             }}>
               <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                 <div style={{
                   width: '40px', 
                   height: '40px', 
                   borderRadius: '50%', 
                   background: '#F1F5F9',
                   display: 'flex', 
                   alignItems: 'center', 
                   justifyContent: 'center',
                   fontSize: '14px',
                   fontWeight: 700,
                   color: 'var(--color-gray-500)'
                 }}>
                   {item.name.charAt(0)}
                 </div>
                 <div>
                   <p style={{ fontWeight: 600, fontSize: '14px' }}>{item.name}</p>
                   <p style={{ fontSize: '12px', color: 'var(--color-text-muted)' }}>{item.time}</p>
                 </div>
               </div>
               
               <div style={{ textAlign: 'right' }}>
                 <p style={{ fontWeight: 700, fontSize: '14px', color: '#DC2626' }}>PKR {item.amount}</p>
                 <button style={{
                   background: 'none',
                   border: 'none',
                   color: 'var(--color-primary-blue)',
                   fontSize: '12px',
                   fontWeight: 600,
                   marginTop: '4px',
                   cursor: 'pointer'
                 }}>Remind</button>
               </div>
             </div>
           ))}
        </div>

        {/* Soundbox Setting */}
        <div style={{
          marginTop: '24px',
          background: 'white',
          borderRadius: '16px',
          padding: '16px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}>
           <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
             <div style={{ 
               width: '40px', 
               height: '40px', 
               borderRadius: '12px', 
               background: '#FFF7ED', 
               display: 'flex', 
               alignItems: 'center', 
               justifyContent: 'center' 
             }}>
               <Volume2 size={24} color="#F97316" />
             </div>
             <div>
               <p style={{ fontWeight: 600, fontSize: '14px' }}>Soundbox Alerts</p>
               <p style={{ fontSize: '12px', color: 'var(--color-text-muted)' }}>Voice notifications active</p>
             </div>
           </div>
           <div style={{
             width: '40px',
             height: '24px',
             background: 'var(--color-primary-green)',
             borderRadius: '12px',
             position: 'relative',
             cursor: 'pointer'
           }}>
             <div style={{
               position: 'absolute',
               right: '2px',
               top: '2px',
               width: '20px',
               height: '20px',
               borderRadius: '50%',
               background: 'white'
             }}></div>
           </div>
        </div>

      </div>
    </MobileLayout>
  );
}
