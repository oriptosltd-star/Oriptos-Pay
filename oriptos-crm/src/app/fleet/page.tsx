'use client';

import CRMSimpleLayout from '@/components/layout/CRMSimpleLayout';
import clsx from 'clsx';
import { useState } from 'react';
import {
  IconPlus as TiPlus,
  IconSearch as TiSearch,
  IconDeviceMobile as TiDeviceMobile,
  IconCheck as TiCheck,
  IconX as TiX,
  IconLink as TiLink,
  IconDotsVertical as TiDotsVertical,
  IconQrcode as TiQrcode,
  IconRefresh as TiRefresh,
} from '@tabler/icons-react';

interface Device {
  id: string;
  name: string;
  phone: string;
  status: 'active' | 'offline' | 'banned' | 'disconnected';
  lastSeen: string;
  channel: string;
}

const devices: Device[] = [
  { id: '1', name: 'Business Account 1', phone: '+1 234 567 8901', status: 'active', lastSeen: '2 min ago', channel: 'WhatsApp' },
  { id: '2', name: 'Business Account 2', phone: '+1 234 567 8902', status: 'active', lastSeen: '5 min ago', channel: 'WhatsApp' },
  { id: '3', name: 'Support Number', phone: '+1 234 567 8903', status: 'active', lastSeen: '1 hour ago', channel: 'WhatsApp' },
  { id: '4', name: 'Sales Team', phone: '+1 234 567 8904', status: 'offline', lastSeen: '2 days ago', channel: 'WhatsApp' },
  { id: '5', name: 'Marketing Bot', phone: '+1 234 567 8905', status: 'disconnected', lastSeen: '1 week ago', channel: 'WhatsApp' },
  { id: '6', name: 'Test Account', phone: '+1 234 567 8906', status: 'banned', lastSeen: '3 days ago', channel: 'WhatsApp' },
  { id: '7', name: 'Customer Service', phone: '+1 234 567 8907', status: 'active', lastSeen: '10 min ago', channel: 'WhatsApp' },
  { id: '8', name: 'Lead Gen Bot', phone: '+1 234 567 8908', status: 'active', lastSeen: '30 min ago', channel: 'WhatsApp' },
];

const statusStyles = {
  active: { badge: 'badge-green', label: 'Active' },
  offline: { badge: 'badge-orange', label: 'Offline' },
  banned: { badge: 'badge-red', label: 'Banned' },
  disconnected: { badge: 'badge-blue', label: 'Disconnected' },
};

export default function FleetPage() {
  const [activeTab, setActiveTab] = useState('All');
  const tabs = ['All', 'Active', 'Disconnected', 'Banned'];

  const activeCount = devices.filter((d) => d.status === 'active').length;
  const offlineCount = devices.filter((d) => d.status === 'offline').length;
  const bannedCount = devices.filter((d) => d.status === 'banned').length;
  const disconnectedCount = devices.filter((d) => d.status === 'disconnected').length;

  return (
    <CRMSimpleLayout>
      <div className="p-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-lg font-medium text-[#1e293b]">Fleet</h1>
            <p className="text-xs text-[#64748b] mt-1">Manage connected devices and instances</p>
          </div>
          <button className="btn btn-primary text-[11px]">
            <TiPlus size={12} />
            Add Device
          </button>
        </div>

        {/* Stat Cards */}
        <div className="grid grid-cols-4 gap-4 mb-6">
          <div className="card p-4">
            <div className="flex items-center gap-2 mb-2">
              <TiDeviceMobile size={16} className="text-[#64748b]" />
              <span className="text-[10px] text-[#64748b]">Total Fleet</span>
            </div>
            <div className="text-xl font-medium text-[#1e293b]">{devices.length}</div>
          </div>
          <div className="card p-4">
            <div className="flex items-center gap-2 mb-2">
              <span className="status-dot status-dot-green" />
              <span className="text-[10px] text-[#64748b]">Active</span>
            </div>
            <div className="text-xl font-medium text-[#10b981]">{activeCount}</div>
          </div>
          <div className="card p-4">
            <div className="flex items-center gap-2 mb-2">
              <span className="status-dot status-dot-orange" />
              <span className="text-[10px] text-[#64748b]">Offline</span>
            </div>
            <div className="text-xl font-medium text-[#f59e0b]">{offlineCount}</div>
          </div>
          <div className="card p-4">
            <div className="flex items-center gap-2 mb-2">
              <span className="status-dot status-dot-red" />
              <span className="text-[10px] text-[#64748b]">Banned</span>
            </div>
            <div className="text-xl font-medium text-[#ef4444]">{bannedCount}</div>
          </div>
        </div>

        {/* Search & Filters */}
        <div className="flex items-center gap-4 mb-4">
          <div className="relative flex-1 max-w-md">
            <TiSearch size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#94a3b8]" />
            <input
              type="text"
              placeholder="Search devices..."
              className="input pl-8 w-full text-[11px]"
            />
          </div>
          <div className="flex gap-1">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={clsx(
                  'filter-pill',
                  activeTab === tab ? 'filter-pill-active' : 'filter-pill-inactive'
                )}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Device List */}
        <div className="space-y-2">
          {devices.map((device) => (
            <div
              key={device.id}
              className="card p-4 flex items-center justify-between hover:border-[#7c3aed] transition-colors"
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-[#f1f5f9] rounded-lg flex items-center justify-center">
                  <TiDeviceMobile size={20} className="text-[#64748b]" />
                </div>
                <div>
                  <div className="text-sm font-medium text-[#1e293b]">{device.name}</div>
                  <div className="text-[11px] text-[#64748b]">{device.phone}</div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="text-right">
                  <span className={clsx('badge', statusStyles[device.status].badge)}>
                    {statusStyles[device.status].label}
                  </span>
                  <div className="text-[9px] text-[#94a3b8] mt-1">
                    Last seen: {device.lastSeen}
                  </div>
                </div>

                <div className="flex gap-1">
                  <button className="btn btn-ghost text-[10px] p-1.5" title="QR Code">
                    <TiQrcode size={14} />
                  </button>
                  <button className="btn btn-ghost text-[10px] p-1.5" title="Reconnect">
                    <TiRefresh size={14} />
                  </button>
                  <button className="btn btn-ghost text-[10px] p-1.5" title="More">
                    <TiDotsVertical size={14} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-between mt-4 text-[11px] text-[#64748b]">
          <span>Showing 1-8 of 8 devices</span>
          <div className="flex gap-1">
            <button className="btn btn-ghost text-[10px] py-1 px-2" disabled>Previous</button>
            <button className="btn btn-primary text-[10px] py-1 px-2">1</button>
            <button className="btn btn-ghost text-[10px] py-1 px-2" disabled>Next</button>
          </div>
        </div>
      </div>
    </CRMSimpleLayout>
  );
}