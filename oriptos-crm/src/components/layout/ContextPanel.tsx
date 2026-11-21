'use client';

import clsx from 'clsx';
import {
  IconCalendar as TiCalendar,
  IconLayoutKanban as TiLayoutKanban,
  IconEdit as TiEdit,
  IconPhone as TiPhone,
  IconBrandWhatsapp as TiBrandWhatsapp,
} from '@tabler/icons-react';

interface ContactInfo {
  name: string;
  initials: string;
  phone: string;
  tags: string[];
}

interface ConversationInfo {
  channel: string;
  agent: string;
  status: string;
  priority: string;
  channelIcon?: React.ReactNode;
}

interface OrderInfo {
  id: string;
  amount: string;
  status: string;
  items: string;
}

interface ContextPanelProps {
  contact?: ContactInfo;
  conversation?: ConversationInfo;
  order?: OrderInfo;
}

const statusColors: Record<string, string> = {
  open: 'bg-[#7c3aed]',
  active: 'bg-[#10b981]',
  pending: 'bg-[#f59e0b]',
  resolved: 'bg-[#3b82f6]',
};

const tagColors: Record<string, string> = {
  city: 'bg-[#f1f5f9] text-[#64748b]',
  vip: 'bg-[#ede9fe] text-[#7c3aed]',
  repeat: 'bg-[#d1fae5] text-[#059669]',
  new: 'bg-[#dbeafe] text-[#2563eb]',
};

export default function ContextPanel({ contact, conversation, order }: ContextPanelProps) {
  return (
    <div className="col-context-panel h-screen bg-white border-l border-[#e2e8f0] flex flex-col overflow-y-auto">
      {/* Contact Header */}
      {contact && (
        <div className="p-4 border-b border-[#e2e8f0]">
          <div className="flex items-center gap-3 mb-3">
            <div className="avatar avatar-lg bg-[#ede9fe] text-[#6d28d9]">
              {contact.initials}
            </div>
            <div>
              <div className="text-[13px] font-medium text-[#1e293b]">{contact.name}</div>
              <div className="text-[10px] text-[#64748b] flex items-center gap-1">
                <TiPhone size={10} />
                {contact.phone}
              </div>
            </div>
          </div>
          <div className="flex flex-wrap gap-1">
            {contact.tags.map((tag, idx) => (
              <span
                key={idx}
                className={clsx(
                  'text-[9px] px-2 py-0.5 rounded-full',
                  tagColors[tag.toLowerCase()] || 'bg-[#f1f5f9] text-[#64748b]'
                )}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Conversation Info */}
      {conversation && (
        <div className="p-4 border-b border-[#e2e8f0]">
          <div className="section-label mb-2">Conversation</div>
          <div className="space-y-2">
            <div className="flex items-center justify-between text-[11px]">
              <span className="text-[#64748b]">Channel</span>
              <span className="flex items-center gap-1 text-[#1e293b]">
                {conversation.channelIcon}
                {conversation.channel}
              </span>
            </div>
            <div className="flex items-center justify-between text-[11px]">
              <span className="text-[#64748b]">Agent</span>
              <span className="text-[#1e293b]">{conversation.agent}</span>
            </div>
            <div className="flex items-center justify-between text-[11px]">
              <span className="text-[#64748b]">Status</span>
              <span className="flex items-center gap-1.5 text-[#1e293b]">
                <span className={clsx('status-dot', statusColors[conversation.status.toLowerCase()] || 'bg-[#7c3aed]')} />
                {conversation.status}
              </span>
            </div>
            <div className="flex items-center justify-between text-[11px]">
              <span className="text-[#64748b]">Priority</span>
              <span className="text-[#1e293b]">{conversation.priority}</span>
            </div>
          </div>
        </div>
      )}

      {/* Order Details */}
      {order && (
        <div className="p-4 border-b border-[#e2e8f0]">
          <div className="section-label mb-2">Order #{order.id}</div>
          <div className="space-y-2">
            <div className="flex items-center justify-between text-[11px]">
              <span className="text-[#64748b]">Amount</span>
              <span className="text-[#1e293b] font-medium">{order.amount}</span>
            </div>
            <div className="flex items-center justify-between text-[11px]">
              <span className="text-[#64748b]">Status</span>
              <span className="badge badge-green">{order.status}</span>
            </div>
            <div className="flex items-center justify-between text-[11px]">
              <span className="text-[#64748b]">Items</span>
              <span className="text-[#1e293b]">{order.items}</span>
            </div>
          </div>
        </div>
      )}

      {/* Quick Actions */}
      <div className="p-4">
        <div className="section-label mb-3">Quick Actions</div>
        <div className="space-y-2">
          <button className="btn btn-secondary w-full justify-start text-[11px]">
            <TiCalendar size={14} />
            Schedule follow-up
          </button>
          <button className="btn btn-secondary w-full justify-start text-[11px]">
            <TiLayoutKanban size={14} />
            Add to pipeline
          </button>
          <button className="btn btn-secondary w-full justify-start text-[11px]">
            <TiEdit size={14} />
            Edit contact
          </button>
        </div>
      </div>
    </div>
  );
}