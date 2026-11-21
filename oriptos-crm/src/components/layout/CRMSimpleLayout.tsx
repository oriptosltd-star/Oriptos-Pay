'use client';

import IconNav from './IconNav';
import { ReactNode } from 'react';

interface CRMSimpleLayoutProps {
  children: ReactNode;
}

export default function CRMSimpleLayout({ children }: CRMSimpleLayoutProps) {
  return (
    <div className="flex h-screen overflow-hidden">
      {/* Col 1: Icon Nav */}
      <IconNav />

      {/* Main Content */}
      <div className="flex-1 overflow-auto bg-[#f8fafc]">
        {children}
      </div>
    </div>
  );
}