'use client';

import CRM3ColumnLayout from '@/components/layout/CRM3ColumnLayout';
import clsx from 'clsx';
import {
  IconBrandWhatsapp as TiBrandWhatsapp,
  IconBrandFacebook as TiBrandFacebook,
  IconBrandInstagram as TiBrandInstagram,
  IconBrandTiktok as TiBrandTiktok,
  IconBrandTelegram as TiBrandTelegram,
  IconBrandYoutube as TiBrandYoutube,
  IconBrandReddit as TiBrandReddit,
  IconBrandPinterest as TiBrandPinterest,
  IconMessage as TiMessage,
  IconPlus as TiPlus,
  IconCheck as TiCheck,
  IconLink as TiLink,
} from '@tabler/icons-react';

interface Channel {
  id: string;
  name: string;
  icon: React.ReactNode;
  iconColor: string;
  connected: boolean;
  instanceCount?: number;
  lastConnected?: string;
}

const channels: Channel[] = [
  { id: 'whatsapp', name: 'WhatsApp', icon: <TiBrandWhatsapp size={22} />, iconColor: '#25D366', connected: true, instanceCount: 5, lastConnected: '2 min ago' },
  { id: 'facebook', name: 'Facebook', icon: <TiBrandFacebook size={22} />, iconColor: '#1877F2', connected: true, instanceCount: 2, lastConnected: '1 hour ago' },
  { id: 'instagram', name: 'Instagram', icon: <TiBrandInstagram size={22} />, iconColor: '#E4405F', connected: true, instanceCount: 3, lastConnected: '30 min ago' },
  { id: 'tiktok', name: 'TikTok', icon: <TiBrandTiktok size={22} />, iconColor: '#000000', connected: false },
  { id: 'telegram', name: 'Telegram', icon: <TiBrandTelegram size={22} />, iconColor: '#0088CC', connected: true, instanceCount: 1, lastConnected: '5 hours ago' },
  { id: 'youtube', name: 'YouTube', icon: <TiBrandYoutube size={22} />, iconColor: '#FF0000', connected: false },
  { id: 'reddit', name: 'Reddit', icon: <TiBrandReddit size={22} />, iconColor: '#FF4500', connected: false },
  { id: 'pinterest', name: 'Pinterest', icon: <TiBrandPinterest size={22} />, iconColor: '#BD081C', connected: false },
  { id: 'quora', name: 'Quora', icon: <TiMessage size={22} />, iconColor: '#B92B27', connected: false },
];

export default function ChannelsPage() {
  return (
    <CRM3ColumnLayout
      sectionTitle="Channels"
      sectionGroups={[
        {
          label: 'All Channels',
          items: [
            { label: 'WhatsApp', badge: 5 },
            { label: 'Facebook', badge: 2 },
            { label: 'Instagram', badge: 3 },
            { label: 'TikTok' },
            { label: 'Telegram', badge: 1 },
          ],
        },
      ]}
    >
      <div className="p-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-lg font-medium text-[#1e293b]">Channels</h1>
            <p className="text-xs text-[#64748b] mt-1">Connect and manage your communication channels</p>
          </div>
        </div>

        {/* Channel Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {channels.map((channel) => (
            <div
              key={channel.id}
              className="card p-4 flex items-center justify-between hover:border-[#7c3aed] transition-colors"
            >
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center"
                  style={{ backgroundColor: `${channel.iconColor}20`, color: channel.iconColor }}
                >
                  {channel.icon}
                </div>
                <div>
                  <div className="text-sm font-medium text-[#1e293b]">{channel.name}</div>
                  {channel.connected ? (
                    <div className="flex items-center gap-1 mt-0.5">
                      <span className="status-dot status-dot-green" />
                      <span className="text-[10px] text-[#64748b]">
                        {channel.instanceCount} connected
                      </span>
                    </div>
                  ) : (
                    <span className="text-[10px] text-[#64748b]">Not connected</span>
                  )}
                </div>
              </div>
              {channel.connected ? (
                <div className="flex items-center gap-2">
                  <span className="badge badge-green">Connected</span>
                  <button className="btn btn-ghost text-[10px] py-1 px-2">
                    <TiLink size={12} />
                  </button>
                </div>
              ) : (
                <button className="btn btn-primary text-[10px] py-1.5 px-3">
                  <TiPlus size={12} />
                  Connect
                </button>
              )}
            </div>
          ))}
        </div>

        {/* Stats Summary */}
        <div className="mt-8 grid grid-cols-4 gap-4">
          <div className="card p-4 text-center">
            <div className="text-xl font-medium text-[#1e293b]">4</div>
            <div className="text-[10px] text-[#64748b]">Connected</div>
          </div>
          <div className="card p-4 text-center">
            <div className="text-xl font-medium text-[#1e293b]">11</div>
            <div className="text-[10px] text-[#64748b]">Total Instances</div>
          </div>
          <div className="card p-4 text-center">
            <div className="text-xl font-medium text-[#1e293b]">5</div>
            <div className="text-[10px] text-[#64748b]">Available</div>
          </div>
          <div className="card p-4 text-center">
            <div className="text-xl font-medium text-[#10b981]">All Active</div>
            <div className="text-[10px] text-[#64748b]">Status</div>
          </div>
        </div>
      </div>
    </CRM3ColumnLayout>
  );
}