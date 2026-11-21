'use client';

import clsx from 'clsx';
import { IconEdit as TiEdit } from '@tabler/icons-react';

interface SectionSidebarProps {
  title?: string;
  items: {
    label: string;
    badge?: number;
    active?: boolean;
  }[];
  groups?: {
    label: string;
    items: {
      label: string;
      badge?: number;
      active?: boolean;
    }[];
  }[];
}

export default function SectionSidebar({ title, items, groups }: SectionSidebarProps) {
  return (
    <div className="col-section-sidebar h-screen bg-[#f8fafc] border-r border-[#e2e8f0] flex flex-col">
      {/* Header */}
      {title && (
        <div className="h-10 px-4 flex items-center justify-between border-b border-[#e2e8f0]">
          <span className="text-sm font-medium text-[#1e293b]">{title}</span>
          <TiEdit size={14} className="text-[#94a3b8] cursor-pointer" />
        </div>
      )}

      {/* Content */}
      <div className="flex-1 overflow-y-auto py-2">
        {groups ? (
          groups.map((group, gIdx) => (
            <div key={gIdx}>
              <div className="section-label">{group.label}</div>
              {group.items.map((item, iIdx) => (
                <div
                  key={iIdx}
                  className={clsx(
                    'list-item',
                    item.active && 'list-item-active'
                  )}
                >
                  <span>{item.label}</span>
                  {item.badge && (
                    <span className={clsx(
                      'badge ml-auto',
                      item.label === 'Unassigned' ? 'badge-orange' :
                      item.label === 'My Assignments' ? 'badge-blue' : 'badge-purple'
                    )}>
                      {item.badge}
                    </span>
                  )}
                </div>
              ))}
            </div>
          ))
        ) : items.length > 0 ? (
          items.map((item, idx) => (
            <div
              key={idx}
              className={clsx(
                'list-item',
                item.active && 'list-item-active'
              )}
            >
              <span>{item.label}</span>
              {item.badge && (
                <span className="badge badge-purple ml-auto">
                  {item.badge}
                </span>
              )}
            </div>
          ))
        ) : null}
      </div>
    </div>
  );
}