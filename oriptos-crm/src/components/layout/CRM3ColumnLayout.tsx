'use client';

import IconNav from './IconNav';
import SectionSidebar from './SectionSidebar';
import { ReactNode } from 'react';

interface CRM3ColumnLayoutProps {
  sectionTitle?: string;
  sectionItems?: { label: string; badge?: number; active?: boolean }[];
  sectionGroups?: {
    label: string;
    items: { label: string; badge?: number; active?: boolean }[];
  }[];
  children: ReactNode;
}

export default function CRM3ColumnLayout({
  sectionTitle,
  sectionItems,
  sectionGroups,
  children,
}: CRM3ColumnLayoutProps) {
  return (
    <div className="flex h-screen overflow-hidden">
      {/* Col 1: Icon Nav */}
      <IconNav />

      {/* Col 2: Section Sidebar */}
      <SectionSidebar
        title={sectionTitle}
        items={sectionItems || []}
        groups={sectionGroups}
      />

      {/* Col 3: Main Content */}
      <div className="flex-1 overflow-auto bg-[#f8fafc]">
        {children}
      </div>
    </div>
  );
}