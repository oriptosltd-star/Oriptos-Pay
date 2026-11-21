'use client';

import CRM3ColumnLayout from '@/components/layout/CRM3ColumnLayout';
import clsx from 'clsx';
import { useState } from 'react';
import {
  IconSearch as TiSearch,
  IconPlus as TiPlus,
  IconFilter as TiFilter,
  IconStar as TiStar,
  IconArrowRight as TiArrowRight,
} from '@tabler/icons-react';

interface Lead {
  id: string;
  name: string;
  initials: string;
  phone: string;
  source: string;
  score: number;
  assignedTo: string;
  status: 'New' | 'Contacted' | 'Qualified' | 'Converted';
}

const leads: Lead[] = [
  { id: '1', name: 'John Smith', initials: 'JS', phone: '+1 234 567 890', source: 'WhatsApp', score: 85, assignedTo: 'Sarah', status: 'New' },
  { id: '2', name: 'Emma Wilson', initials: 'EW', phone: '+1 234 567 891', source: 'Instagram', score: 72, assignedTo: 'Mike', status: 'Contacted' },
  { id: '3', name: 'Michael Brown', initials: 'MB', phone: '+1 234 567 892', source: 'Facebook', score: 90, assignedTo: 'Emily', status: 'Qualified' },
  { id: '4', name: 'Sarah Davis', initials: 'SD', phone: '+1 234 567 893', source: 'Website', score: 65, assignedTo: 'Unassigned', status: 'New' },
  { id: '5', name: 'David Miller', initials: 'DM', phone: '+1 234 567 894', source: 'TikTok', score: 78, assignedTo: 'Sarah', status: 'Contacted' },
  { id: '6', name: 'Jennifer Taylor', initials: 'JT', phone: '+1 234 567 895', source: 'WhatsApp', score: 95, assignedTo: 'Mike', status: 'Converted' },
  { id: '7', name: 'Robert Garcia', initials: 'RG', phone: '+1 234 567 896', source: 'Referral', score: 88, assignedTo: 'Emily', status: 'Qualified' },
  { id: '8', name: 'Lisa Anderson', initials: 'LA', phone: '+1 234 567 897', source: 'Instagram', score: 55, assignedTo: 'Unassigned', status: 'New' },
];

const statusColors = {
  New: 'badge-blue',
  Contacted: 'badge-orange',
  Qualified: 'badge-purple',
  Converted: 'badge-green',
};

export default function LeadBankPage() {
  const [activeFilter, setActiveFilter] = useState('All');
  const filters = ['All', 'New', 'Contacted', 'Qualified', 'Converted'];

  return (
    <CRM3ColumnLayout
      sectionTitle="Lead Bank"
      sectionGroups={[
        {
          label: 'Lead Sources',
          items: [
            { label: 'WhatsApp', badge: 12 },
            { label: 'Instagram', badge: 8 },
            { label: 'Facebook', badge: 5 },
            { label: 'Website', badge: 15 },
            { label: 'Referral', badge: 3 },
          ],
        },
      ]}
    >
      <div className="p-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <div>
            <h1 className="text-lg font-medium text-[#1e293b]">Lead Bank</h1>
            <p className="text-xs text-[#64748b] mt-1">Manage and route your leads</p>
          </div>
          <button className="btn btn-primary text-[11px]">
            <TiPlus size={12} />
            Add Lead
          </button>
        </div>

        {/* Filter Pills & Search */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex gap-1">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={clsx(
                  'filter-pill',
                  activeFilter === filter ? 'filter-pill-active' : 'filter-pill-inactive'
                )}
              >
                {filter}
              </button>
            ))}
          </div>
          <div className="relative">
            <TiSearch size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#94a3b8]" />
            <input
              type="text"
              placeholder="Search leads..."
              className="input pl-8 w-48 text-[11px]"
            />
          </div>
        </div>

        {/* Lead Table */}
        <div className="card overflow-hidden p-0">
          <table className="table">
            <thead>
              <tr>
                <th className="w-48">Lead</th>
                <th className="w-36">Source</th>
                <th className="w-24">Score</th>
                <th className="w-28">Assigned</th>
                <th className="w-28">Status</th>
                <th className="w-16">Action</th>
              </tr>
            </thead>
            <tbody>
              {leads.map((lead) => (
                <tr key={lead.id}>
                  <td>
                    <div className="flex items-center gap-2">
                      <div className="avatar avatar-md bg-[#ede9fe] text-[#7c3aed]">
                        {lead.initials}
                      </div>
                      <div>
                        <div className="font-medium text-[#1e293b] text-xs">{lead.name}</div>
                        <div className="text-[10px] text-[#64748b]">{lead.phone}</div>
                      </div>
                    </div>
                  </td>
                  <td className="text-[#64748b] text-xs">{lead.source}</td>
                  <td>
                    <div className="flex items-center gap-1">
                      <TiStar size={12} className="text-[#f59e0b]" />
                      <span className={clsx(
                        'text-xs font-medium',
                        lead.score >= 80 ? 'text-[#10b981]' :
                        lead.score >= 60 ? 'text-[#f59e0b]' : 'text-[#ef4444]'
                      )}>
                        {lead.score}
                      </span>
                    </div>
                  </td>
                  <td className="text-[#64748b] text-xs">{lead.assignedTo}</td>
                  <td>
                    <span className={clsx('badge', statusColors[lead.status])}>
                      {lead.status}
                    </span>
                  </td>
                  <td>
                    <button className="btn btn-ghost text-[10px] p-1">
                      <TiArrowRight size={12} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-between mt-4 text-[11px] text-[#64748b]">
          <span>Showing 1-8 of 43 leads</span>
          <div className="flex gap-1">
            <button className="btn btn-ghost text-[10px] py-1 px-2" disabled>Previous</button>
            <button className="btn btn-primary text-[10px] py-1 px-2">1</button>
            <button className="btn btn-ghost text-[10px] py-1 px-2">2</button>
            <button className="btn btn-ghost text-[10px] py-1 px-2">3</button>
            <button className="btn btn-ghost text-[10px] py-1 px-2">Next</button>
          </div>
        </div>
      </div>
    </CRM3ColumnLayout>
  );
}