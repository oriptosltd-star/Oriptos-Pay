'use client';

import { useState } from 'react';
import clsx from 'clsx';
import { IconSearch as TiSearch, IconFilter as TiFilter, IconMessage as TiMessage } from '@tabler/icons-react';

interface Conversation {
  id: string;
  name: string;
  avatar?: string;
  initials: string;
  avatarColor?: string;
  preview: string;
  timestamp: string;
  unread: boolean;
  unreadCount?: number;
}

interface ListPanelProps {
  title?: string;
  conversations?: Conversation[];
  selectedId?: string;
  onSelect?: (id: string) => void;
  searchPlaceholder?: string;
}

const avatarColors = {
  purple: { bg: '#ede9fe', text: '#6d28d9' },
  green: { bg: '#d1fae5', text: '#065f46' },
  orange: { bg: '#fef3c7', text: '#92400e' },
  red: { bg: '#fee2e2', text: '#991b1b' },
};

const colors = ['purple', 'green', 'orange', 'red'];

function getAvatarColor(status: string) {
  const idx = status.charCodeAt(0) % colors.length;
  return avatarColors[colors[idx] as keyof typeof avatarColors];
}

export default function ListPanel({
  title = 'Conversations',
  conversations = [],
  selectedId,
  onSelect,
  searchPlaceholder = 'Search conversations...'
}: ListPanelProps) {
  const [activeFilter, setActiveFilter] = useState('All');

  const filters = ['All', 'Unread', 'Priority', 'Dead'];

  return (
    <div className="col-list-panel h-screen bg-white flex flex-col border-r border-[#e2e8f0]">
      {/* Header */}
      <div className="h-10 px-3 flex items-center justify-between border-b border-[#e2e8f0]">
        <span className="text-sm font-medium text-[#1e293b]">{title}</span>
        <div className="flex items-center gap-2">
          <button className="p-1 hover:bg-[#f1f5f9] rounded">
            <TiSearch size={14} className="text-[#64748b]" />
          </button>
          <button className="p-1 hover:bg-[#f1f5f9] rounded">
            <TiFilter size={14} className="text-[#64748b]" />
          </button>
        </div>
      </div>

      {/* Filter Pills */}
      <div className="px-3 py-2 flex gap-1 border-b border-[#e2e8f0]">
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

      {/* Conversation List */}
      <div className="flex-1 overflow-y-auto">
        {conversations.length > 0 ? (
          conversations.map((conv) => {
            const color = getAvatarColor(conv.name);
            const isSelected = selectedId === conv.id;
            return (
              <div
                key={conv.id}
                onClick={() => onSelect?.(conv.id)}
                className={clsx(
                  'px-3 py-2 border-b border-[#e2e8f0] cursor-pointer transition-all',
                  isSelected && 'bg-[#f8fafc] border-l-2 border-l-[#7c3aed]'
                )}
              >
                <div className="flex items-start gap-2">
                  {/* Avatar */}
                  <div
                    className="avatar avatar-md flex-shrink-0"
                    style={{ backgroundColor: color.bg, color: color.text }}
                  >
                    {conv.initials}
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-medium text-[#1e293b] truncate">
                        {conv.name}
                      </span>
                      <span className="text-[9px] text-[#94a3b8] ml-2 flex-shrink-0">
                        {conv.timestamp}
                      </span>
                    </div>
                    <div className="flex items-center justify-between mt-0.5">
                      <span className="text-[10px] text-[#64748b] truncate">
                        {conv.preview}
                      </span>
                      {conv.unread && (
                        <span className="w-[7px] h-[7px] bg-[#7c3aed] rounded-full ml-2 flex-shrink-0" />
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <div className="empty-state">
            <TiMessage size={32} className="mb-2 opacity-50" />
            <p className="text-xs">No conversations found</p>
          </div>
        )}
      </div>
    </div>
  );
}