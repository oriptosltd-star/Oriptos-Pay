import React from 'react';
import Image from 'next/image';

const cards = [
  { id: 1, type: 'Wise', number: '•••• 4242', balance: '$1,250.00', color: '#92E3A9', logo: '/wise.png' },
  { id: 2, type: 'HBL', number: '•••• 8899', balance: 'PKR 50,000', color: '#008540', logo: '/hbl.png' },
  { id: 3, type: 'Mastercard', number: '•••• 1234', balance: '€450.50', color: '#EB001B', logo: '/mastercard.png' },
];

const CardCarousel = () => {
  return (
    <div style={{ marginBottom: '24px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px', padding: '0 4px' }}>
        <h3 style={{ fontSize: '16px', fontWeight: 600 }}>Linked Cards</h3>
        <span style={{ fontSize: '12px', color: 'var(--color-primary-blue)', fontWeight: 600 }}>Manage</span>
      </div>
      
      <div style={{
        display: 'flex',
        gap: '16px',
        overflowX: 'auto',
        paddingBottom: '10px',
        paddingLeft: '4px',
        paddingRight: '4px',
        scrollbarWidth: 'none', // Hide scrollbar Firefox
        msOverflowStyle: 'none' // Hide scrollbar IE
      }} className="no-scrollbar">
        
        {/* Add New Card Button */}
        <div style={{
          minWidth: '60px',
          height: '160px',
          borderRadius: '16px',
          background: 'var(--color-light)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          border: '2px dashed var(--color-gray-200)',
          color: 'var(--color-gray-500)',
          cursor: 'pointer'
        }}>
          <span style={{ fontSize: '24px' }}>+</span>
        </div>

        {cards.map((card) => (
          <div key={card.id} style={{
            minWidth: '260px',
            height: '160px',
            borderRadius: '20px',
            background: card.id === 1 ? 'linear-gradient(135deg, #2D3436 0%, #000000 74%)' : card.id === 2 ? 'linear-gradient(135deg, #008540 0%, #004D25 100%)' : 'linear-gradient(135deg, #EB001B 0%, #B00014 100%)',
            padding: '20px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            color: 'white',
            boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
            position: 'relative',
            overflow: 'hidden'
          }}>
             <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start' }}>
                <span style={{ fontSize: '14px', opacity: 0.8 }}>{card.type}</span>
                {/* Simulated Chip */}
                <div style={{ width: '30px', height: '20px', background: '#fbbf24', borderRadius: '4px', opacity: 0.8 }}></div>
             </div>

             <div>
               <p style={{ fontSize: '18px', letterSpacing: '2px', marginBottom: '4px' }}>{card.number}</p>
               <p style={{ fontSize: '12px', opacity: 0.7 }}>Exp 12/28</p>
             </div>

             <div style={{
               position: 'absolute',
               bottom: '-20px',
               right: '-20px',
               width: '100px',
               height: '100px',
               background: 'rgba(255,255,255,0.1)',
               borderRadius: '50%'
             }}></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardCarousel;
