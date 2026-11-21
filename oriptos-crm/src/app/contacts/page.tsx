'use client';

import CRM3ColumnLayout from '@/components/layout/CRM3ColumnLayout';
import clsx from 'clsx';
import { useState } from 'react';
import {
  IconSearch as TiSearch,
  IconPlus as TiPlus,
  IconFilter as TiFilter,
  IconBrandWhatsapp as TiBrandWhatsapp,
  IconBrandInstagram as TiBrandInstagram,
  IconBrandFacebook as TiBrandFacebook,
  IconBrandTelegram as TiBrandTelegram,
  IconDotsVertical as TiDotsVertical,
} from '@tabler/icons-react';

interface Contact {
  id: string;
  name: string;
  initials: string;
  phone: string;
  channel: string;
  channelIcon: React.ReactNode;
  tags: string[];
  lastContact: string;
  status: 'Active' | 'Pending' | 'Won';
}

const contacts: Contact[] = [
  { id: '1', name: 'John Smith', initials: 'JS', phone: '+1 234 567 890', channel: 'WhatsApp', channelIcon: <TiBrandWhatsapp size={14} />, tags: ['Lead', 'Hot'], lastContact: '2 hours ago', status: 'Active' },
  { id: '2', name: 'Emma Wilson', initials: 'EW', phone: '+1 234 567 891', channel: 'Instagram', channelIcon: <TiBrandInstagram size={14} />, tags: ['Customer'], lastContact: '1 day ago', status: 'Won' },
  { id: '3', name: 'Michael Brown', initials: 'MB', phone: '+1 234 567 892', channel: 'Facebook', channelIcon: <TiBrandFacebook size={14} />, tags: ['Lead'], lastContact: '3 days ago', status: 'Pending' },
  { id: '4', name: 'Sarah Davis', initials: 'SD', phone: '+1 234 567 893', channel: 'WhatsApp', channelIcon: <TiBrandWhatsapp size={14} />, tags: ['VIP', 'Customer'], lastContact: '5 hours ago', status: 'Active' },
  { id: '5', name: 'David Miller', initials: 'DM', phone: '+1 234 567 894', channel: 'Telegram', channelIcon: <TiBrandTelegram size={14} />, tags: ['Lead', 'New'], lastContact: '1 week ago', status: 'Pending' },
  { id: '6', name: 'Jennifer Taylor', initials: 'JT', phone: '+1 234 567 895', channel: 'WhatsApp', channelIcon: <TiBrandWhatsapp size={14} />, tags: ['Customer', 'Repeat'], lastContact: '1 day ago', status: 'Won' },
  { id: '7', name: 'Robert Garcia', initials: 'RG', phone: '+1 234 567 896', channel: 'Instagram', channelIcon: <TiBrandInstagram size={14} />, tags: ['Lead'], lastContact: '2 days ago', status: 'Active' },
  { id: '8', name: 'Lisa Anderson', initials: 'LA', phone: '+1 234 567 897', channel: 'Facebook', channelIcon: <TiBrandFacebook size={14} />, tags: ['VIP'], lastContact: '4 hours ago', status: 'Active' },
  { id: '9', name: 'James Brown', initials: 'JB', phone: '+1 234 567 898', channel: 'WhatsApp', channelIcon: <TiBrandWhatsapp size={14} />, tags: ['Lead', 'Hot'], lastContact: '6 hours ago', status: 'Pending' },
  { id: '10', name: 'Emily White', initials: 'EW', phone: '+1 234 567 899', channel: 'Telegram', channelIcon: <TiBrandTelegram size={14} />, tags: ['Customer'], lastContact: '3 days ago', status: 'Won' },
];

const statusStyles = {
  Active: 'badge-blue',
  Pending: 'badge-orange',
  Won: 'badge-green',
};

const avatarColors = ['#ede9fe', '#d1fae5', '#fef3c7', '#fee2e2', '#dbeafe'];
const colorText = ['#6d28d9', '#065f46', '#92400e', '#991b1b', '#1e40af'];

export default function ContactsPage() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filters = ['All', 'Leads', 'Customers', 'VIP'];

  const getAvatarColor = (idx: number) => ({
    backgroundColor: avatarColors[idx % avatarColors.length],
    color: colorText[idx % colorText.length],
  });

  return (
    <CRM3ColumnLayout
      sectionTitle="Contacts"
      sectionItems={[
        { label: 'All Contacts', badge: 156, active: true },
        { label: 'Leads', badge: 45 },
        { label: 'Customers', badge: 89 },
        { label: 'VIP', badge: 22 },
      ]}
    >
      <div className="p-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <div>
            <h1 className="text-lg font-medium text-[#1e293b]">Contacts</h1>
            <p className="text-xs text-[#64748b] mt-1">Manage your customer database</p>
          </div>
          <button className="btn btn-primary text-[11px]">
            <TiPlus size={12} />
            Add Contact
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
              placeholder="Search contacts..."
              className="input pl-8 w-48 text-[11px]"
            />
          </div>
        </div>

        {/* Table */}
        <div className="card overflow-hidden p-0">
          <table className="table">
            <thead>
              <tr>
                <th className="w-56">Name</th>
                <th className="w-40">Phone</th>
                <th className="w-28">Channel</th>
                <th className="w-40">Tags</th>
                <th className="w-32">Last Contact</th>
                <th className="w-24">Status</th>
                <th className="w-12"></th>
              </tr>
            </thead>
            <tbody>
              {contacts.map((contact, idx) => (
                <tr key={contact.id}>
                  <td>
                    <div className="flex items-center gap-2">
                      <div
                        className="avatar avatar-md flex-shrink-0"
                        style={getAvatarColor(idx)}
                      >
                        {contact.initials}
                      </div>
                      <span className="font-medium text-[#1e293b]">{contact.name}</span>
                    </div>
                  </td>
                  <td className="text-[#64748b]">{contact.phone}</td>
                  <td>
                    <span className="flex items-center gap-1 text-[#64748b]">
                      {contact.channelIcon}
                      {contact.channel}
                    </span>
                  </td>
                  <td>
                    <div className="flex flex-wrap gap-1">
                      {contact.tags.slice(0, 2).map((tag, tIdx) => (
                        <span key={tIdx} className="text-[9px] px-1.5 py-0.5 bg-[#f1f5f9] text-[#64748b] rounded">
                          {tag}
                        </span>
                      ))}
                      {contact.tags.length > 2 && (
                        <span className="text-[9px] text-[#94a3b8]">+{contact.tags.length - 2}</span>
                      )}
                    </div>
                  </td>
                  <td className="text-[#64748b] text-[11px]">{contact.lastContact}</td>
                  <td>
                    <span className={clsx('badge', statusStyles[contact.status])}>
                      {contact.status}
                    </span>
                  </td>
                  <td>
                    <button className="btn btn-ghost p-1">
                      <TiDotsVertical size={14} className="text-[#94a3b8]" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-between mt-4 text-[11px] text-[#64748b]">
          <span>Showing 1-10 of 156 contacts</span>
          <div className="flex gap-1">
            <button className="btn btn-ghost text-[10px] py-1 px-2" disabled>Previous</button>
            <button className="btn btn-primary text-[10px] py-1 px-2">1</button>
            <button className="btn btn-ghost text-[10px] py-1 px-2">2</button>
            <button className="btn btn-ghost text-[10px] py-1 px-2">3</button>
            <button className="btn btn-ghost text-[10px] py-1 px-2">...</button>
            <button className="btn btn-ghost text-[10px] py-1 px-2">16</button>
            <button className="btn btn-ghost text-[10px] py-1 px-2">Next</button>
          </div>
        </div>
      </div>
    </CRM3ColumnLayout>
  );
}