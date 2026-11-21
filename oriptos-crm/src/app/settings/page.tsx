'use client';

import CRMSimpleLayout from '@/components/layout/CRMSimpleLayout';
import clsx from 'clsx';
import { useState } from 'react';
import {
  IconUser as TiUser,
  IconUsers as TiUsers,
  IconMessage as TiMessage,
  IconBell as TiBell,
  IconSparkles as TiSparkles,
  IconCreditCard as TiCreditCard,
  IconCheck as TiCheck,
} from '@tabler/icons-react';

const settingsTabs = [
  { id: 'profile', label: 'Profile', icon: <TiUser size={14} /> },
  { id: 'team', label: 'Team', icon: <TiUsers size={14} /> },
  { id: 'channels', label: 'Channels', icon: <TiMessage size={14} /> },
  { id: 'notifications', label: 'Notifications', icon: <TiBell size={14} /> },
  { id: 'ai-settings', label: 'AI Settings', icon: <TiSparkles size={14} /> },
  { id: 'billing', label: 'Billing', icon: <TiCreditCard size={14} /> },
];

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState('profile');

  return (
    <CRMSimpleLayout>
      <div className="flex h-full">
        {/* Left Navigation */}
        <div className="w-40 border-r border-[#e2e8f0] bg-white">
          <div className="p-4">
            <h1 className="text-sm font-medium text-[#1e293b] mb-4">Settings</h1>
            <nav className="space-y-1">
              {settingsTabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={clsx(
                    'w-full flex items-center gap-2 px-3 py-2 rounded-lg text-[12px] transition-colors',
                    activeTab === tab.id
                      ? 'bg-[#faf5ff] text-[#7c3aed] font-medium'
                      : 'text-[#64748b] hover:bg-[#f8fafc]'
                  )}
                >
                  {tab.icon}
                  <span>{tab.label}</span>
                </button>
              ))}
            </nav>
          </div>
        </div>

        {/* Right Content */}
        <div className="flex-1 overflow-y-auto p-6">
          {activeTab === 'profile' && (
            <div className="max-w-xl">
              <h2 className="text-base font-medium text-[#1e293b] mb-6">Profile Settings</h2>

              <div className="space-y-4">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-[#ede9fe] rounded-full flex items-center justify-center">
                    <span className="text-lg font-medium text-[#7c3aed]">SJ</span>
                  </div>
                  <button className="btn btn-secondary text-[11px]">Change Avatar</button>
                </div>

                <div>
                  <label className="block text-[11px] font-medium text-[#64748b] mb-1.5">
                    Full Name
                  </label>
                  <input
                    type="text"
                    defaultValue="Sarah Johnson"
                    className="input w-full text-[12px]"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-medium text-[#64748b] mb-1.5">
                    Email
                  </label>
                  <input
                    type="email"
                    defaultValue="sarah@company.com"
                    className="input w-full text-[12px]"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-medium text-[#64748b] mb-1.5">
                    Phone
                  </label>
                  <input
                    type="tel"
                    defaultValue="+1 234 567 890"
                    className="input w-full text-[12px]"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-medium text-[#64748b] mb-1.5">
                    Timezone
                  </label>
                  <select className="input w-full text-[12px]">
                    <option>America/New_York (UTC-5)</option>
                    <option>America/Los_Angeles (UTC-8)</option>
                    <option>Europe/London (UTC+0)</option>
                  </select>
                </div>

                <div className="pt-4">
                  <button className="btn btn-primary text-[11px]">
                    <TiCheck size={12} />
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'team' && (
            <div className="max-w-xl">
              <h2 className="text-base font-medium text-[#1e293b] mb-6">Team Settings</h2>

              <div className="space-y-4">
                <div className="card p-4 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="avatar avatar-lg bg-[#d1fae5] text-[#065f46]">MW</div>
                    <div>
                      <div className="text-sm font-medium text-[#1e293b]">Mike Wilson</div>
                      <div className="text-[10px] text-[#64748b]">Agent</div>
                    </div>
                  </div>
                  <button className="btn btn-ghost text-[10px]">Edit</button>
                </div>

                <div className="card p-4 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="avatar avatar-lg bg-[#fef3c7] text-[#92400e]">ED</div>
                    <div>
                      <div className="text-sm font-medium text-[#1e293b]">Emily Davis</div>
                      <div className="text-[10px] text-[#64748b]">Manager</div>
                    </div>
                  </div>
                  <button className="btn btn-ghost text-[10px]">Edit</button>
                </div>

                <button className="btn btn-secondary w-full justify-center text-[11px] mt-4">
                  + Invite Team Member
                </button>
              </div>
            </div>
          )}

          {activeTab === 'notifications' && (
            <div className="max-w-xl">
              <h2 className="text-base font-medium text-[#1e293b] mb-6">Notification Preferences</h2>

              <div className="space-y-4">
                {[
                  { label: 'New conversation', desc: 'Get notified for new messages' },
                  { label: 'Assignment updates', desc: 'When conversations are assigned to you' },
                  { label: 'Mentions', desc: 'When you are mentioned in a note' },
                  { label: 'System updates', desc: 'Important platform announcements' },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center justify-between py-2">
                    <div>
                      <div className="text-xs font-medium text-[#1e293b]">{item.label}</div>
                      <div className="text-[10px] text-[#64748b]">{item.desc}</div>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" defaultChecked className="sr-only peer" />
                      <div className="w-9 h-5 bg-[#e2e8f0] peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-[#7c3aed]"></div>
                    </label>
                  </div>
                ))}

                <div className="pt-4">
                  <button className="btn btn-primary text-[11px]">
                    <TiCheck size={12} />
                    Save Preferences
                  </button>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'billing' && (
            <div className="max-w-xl">
              <h2 className="text-base font-medium text-[#1e293b] mb-6">Billing & Subscription</h2>

              <div className="card p-4 mb-4">
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <div className="text-sm font-medium text-[#1e293b]">Growth Plan</div>
                    <div className="text-[10px] text-[#64748b]">$49/month</div>
                  </div>
                  <span className="badge badge-green">Active</span>
                </div>
                <div className="text-[10px] text-[#64748b] mb-3">
                  Renews on June 15, 2026
                </div>
                <button className="btn btn-secondary text-[10px]">Manage Subscription</button>
              </div>

              <div className="card p-4">
                <div className="text-xs font-medium text-[#1e293b] mb-3">Usage This Month</div>
                <div className="space-y-2">
                  <div className="flex justify-between text-[11px]">
                    <span className="text-[#64748b]">Conversations</span>
                    <span className="text-[#1e293b]">847 / 2,000</span>
                  </div>
                  <div className="h-1.5 bg-[#f1f5f9] rounded-full overflow-hidden">
                    <div className="h-full w-[42%] bg-[#7c3aed] rounded-full" />
                  </div>
                  <div className="flex justify-between text-[11px] mt-3">
                    <span className="text-[#64748b]">Team Members</span>
                    <span className="text-[#1e293b]">4 / 5</span>
                  </div>
                  <div className="h-1.5 bg-[#f1f5f9] rounded-full overflow-hidden">
                    <div className="h-full w-[80%] bg-[#7c3aed] rounded-full" />
                  </div>
                </div>
              </div>
            </div>
          )}

          {(activeTab === 'channels' || activeTab === 'ai-settings') && (
            <div className="max-w-xl">
              <h2 className="text-base font-medium text-[#1e293b] mb-6">
                {activeTab === 'channels' ? 'Channel Settings' : 'AI Settings'}
              </h2>
              <div className="card p-6 text-center text-[#64748b] text-xs">
                {activeTab === 'channels'
                  ? 'Configure channel-specific settings here'
                  : 'Configure AI assistant and automation settings'}
              </div>
            </div>
          )}
        </div>
      </div>
    </CRMSimpleLayout>
  );
}