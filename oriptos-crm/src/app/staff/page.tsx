'use client';

import CRM3ColumnLayout from '@/components/layout/CRM3ColumnLayout';
import clsx from 'clsx';
import {
  IconPlus as TiPlus,
  IconUser as TiUser,
  IconCheck as TiCheck,
  IconClock as TiClock,
  IconMessage as TiMessage,
  IconDotsVertical as TiDotsVertical,
} from '@tabler/icons-react';

interface TeamMember {
  id: string;
  name: string;
  initials: string;
  email: string;
  role: 'Admin' | 'Manager' | 'Agent';
  status: 'Active' | 'Away';
  conversations: number;
  rating: number;
}

const teamMembers: TeamMember[] = [
  { id: '1', name: 'Sarah Johnson', initials: 'SJ', email: 'sarah@company.com', role: 'Manager', status: 'Active', conversations: 234, rating: 4.9 },
  { id: '2', name: 'Mike Wilson', initials: 'MW', email: 'mike@company.com', role: 'Agent', status: 'Active', conversations: 198, rating: 4.7 },
  { id: '3', name: 'Emily Davis', initials: 'ED', email: 'emily@company.com', role: 'Agent', status: 'Away', conversations: 187, rating: 4.8 },
  { id: '4', name: 'James Brown', initials: 'JB', email: 'james@company.com', role: 'Agent', status: 'Active', conversations: 156, rating: 4.5 },
  { id: '5', name: 'Lisa Anderson', initials: 'LA', email: 'lisa@company.com', role: 'Admin', status: 'Active', conversations: 0, rating: 5.0 },
  { id: '6', name: 'David Miller', initials: 'DM', email: 'david@company.com', role: 'Agent', status: 'Active', conversations: 142, rating: 4.6 },
];

const roleColors = {
  Admin: 'badge-purple',
  Manager: 'badge-blue',
  Agent: 'badge-green',
};

export default function StaffPage() {
  return (
    <CRM3ColumnLayout
      sectionTitle="Staff"
      sectionGroups={[
        {
          label: 'Roles',
          items: [
            { label: 'Admin', badge: 1 },
            { label: 'Manager', badge: 1 },
            { label: 'Agent', badge: 4 },
          ],
        },
        {
          label: 'Status',
          items: [
            { label: 'Active', badge: 5 },
            { label: 'Away', badge: 1 },
          ],
        },
      ]}
    >
      <div className="p-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-lg font-medium text-[#1e293b]">Staff</h1>
            <p className="text-xs text-[#64748b] mt-1">Manage team members and roles</p>
          </div>
          <button className="btn btn-primary text-[11px]">
            <TiPlus size={12} />
            Add Member
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-4 gap-4 mb-6">
          <div className="card p-4">
            <div className="text-[10px] text-[#64748b] mb-1">Total Team</div>
            <div className="text-xl font-medium text-[#1e293b]">6</div>
          </div>
          <div className="card p-4">
            <div className="text-[10px] text-[#64748b] mb-1">Online Now</div>
            <div className="text-xl font-medium text-[#10b981]">5</div>
          </div>
          <div className="card p-4">
            <div className="text-[10px] text-[#64748b] mb-1">Avg Rating</div>
            <div className="text-xl font-medium text-[#1e293b]">4.7</div>
          </div>
          <div className="card p-4">
            <div className="text-[10px] text-[#64748b] mb-1">Total Conversations</div>
            <div className="text-xl font-medium text-[#1e293b]">917</div>
          </div>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
          {teamMembers.map((member) => (
            <div key={member.id} className="card p-4">
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="avatar avatar-lg bg-[#ede9fe] text-[#7c3aed]">
                    {member.initials}
                  </div>
                  <div>
                    <div className="text-sm font-medium text-[#1e293b]">{member.name}</div>
                    <div className="text-[10px] text-[#64748b]">{member.email}</div>
                  </div>
                </div>
                <button className="btn btn-ghost p-1">
                  <TiDotsVertical size={14} className="text-[#94a3b8]" />
                </button>
              </div>

              <div className="flex items-center justify-between mb-3">
                <span className={clsx('badge', roleColors[member.role])}>{member.role}</span>
                <div className="flex items-center gap-1 text-[10px]">
                  <span className={clsx(
                    'status-dot',
                    member.status === 'Active' ? 'status-dot-green' : 'status-dot-orange'
                  )} />
                  <span className="text-[#64748b]">{member.status}</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2 pt-3 border-t border-[#e2e8f0]">
                <div className="text-center">
                  <div className="flex items-center justify-center gap-1 text-[10px] text-[#64748b] mb-0.5">
                    <TiMessage size={10} />
                    Conversations
                  </div>
                  <div className="text-sm font-medium text-[#1e293b]">{member.conversations}</div>
                </div>
                <div className="text-center">
                  <div className="text-[10px] text-[#64748b] mb-0.5">Rating</div>
                  <div className="text-sm font-medium text-[#1e293b]">{member.rating}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </CRM3ColumnLayout>
  );
}