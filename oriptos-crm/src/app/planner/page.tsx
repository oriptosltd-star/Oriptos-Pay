'use client';

import CRMSimpleLayout from '@/components/layout/CRMSimpleLayout';
import clsx from 'clsx';
import { useState } from 'react';
import {
  IconPlus as TiPlus,
  IconChevronLeft as TiChevronLeft,
  IconChevronRight as TiChevronRight,
  IconBrandWhatsapp as TiBrandWhatsapp,
  IconBrandFacebook as TiBrandFacebook,
  IconBrandTiktok as TiBrandTiktok,
  IconBrandInstagram as TiBrandInstagram,
  IconBrandTelegram as TiBrandTelegram,
} from '@tabler/icons-react';

interface Plan {
  id: string;
  title: string;
  platform: 'whatsapp' | 'facebook' | 'tiktok' | 'instagram' | 'telegram';
  time: string;
  day: number;
}

const platformStyles = {
  whatsapp: { bg: '#d1fae5', border: '#10b981', icon: <TiBrandWhatsapp size={12} /> },
  facebook: { bg: '#ede9fe', border: '#7c3aed', icon: <TiBrandFacebook size={12} /> },
  tiktok: { bg: '#fef3c7', border: '#f59e0b', icon: <TiBrandTiktok size={12} /> },
  instagram: { bg: '#fee2e2', border: '#ef4444', icon: <TiBrandInstagram size={12} /> },
  telegram: { bg: '#dbeafe', border: '#3b82f6', icon: <TiBrandTelegram size={12} /> },
};

const plans: Plan[] = [
  { id: '1', title: 'Product Launch Campaign', platform: 'facebook', time: '10:00 AM', day: 2 },
  { id: '2', title: 'Customer Follow-up', platform: 'whatsapp', time: '2:00 PM', day: 3 },
  { id: '3', title: 'Video Content Review', platform: 'tiktok', time: '11:00 AM', day: 5 },
  { id: '4', title: 'Story Posting', platform: 'instagram', time: '6:00 PM', day: 5 },
  { id: '5', title: 'Support Response', platform: 'telegram', time: '9:00 AM', day: 7 },
  { id: '6', title: 'Ad Campaign Setup', platform: 'facebook', time: '3:00 PM', day: 8 },
];

const today = new Date();
const currentMonth = today.toLocaleString('default', { month: 'long' });
const currentYear = today.getFullYear();
const daysInMonth = 30;
const startDay = 3; // Wednesday

const weekDays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

export default function PlannerPage() {
  const [viewMode, setViewMode] = useState<'week' | 'month'>('month');

  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);

  return (
    <CRMSimpleLayout>
      <div className="h-full flex flex-col">
        {/* Header */}
        <div className="h-12 px-6 flex items-center justify-between border-b border-[#e2e8f0] bg-white">
          <div className="flex items-center gap-4">
            <h1 className="text-sm font-medium text-[#1e293b]">Planner</h1>
            <div className="flex items-center gap-1 bg-[#f1f5f9] rounded-lg p-0.5">
              <button
                onClick={() => setViewMode('week')}
                className={clsx(
                  'px-2 py-1 text-[10px] rounded-md transition-colors',
                  viewMode === 'week' ? 'bg-white text-[#1e293b] shadow-sm' : 'text-[#64748b]'
                )}
              >
                Week
              </button>
              <button
                onClick={() => setViewMode('month')}
                className={clsx(
                  'px-2 py-1 text-[10px] rounded-md transition-colors',
                  viewMode === 'month' ? 'bg-white text-[#1e293b] shadow-sm' : 'text-[#64748b]'
                )}
              >
                Month
              </button>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button className="btn btn-ghost text-[10px] py-1">
              <TiChevronLeft size={14} />
            </button>
            <span className="text-sm font-medium text-[#1e293b]">
              {currentMonth} {currentYear}
            </span>
            <button className="btn btn-ghost text-[10px] py-1">
              <TiChevronRight size={14} />
            </button>
            <button className="btn btn-primary text-[10px] ml-2">
              <TiPlus size={12} />
              New Plan
            </button>
          </div>
        </div>

        {/* Calendar Grid */}
        <div className="flex-1 overflow-auto p-4">
          {/* Week Days Header */}
          <div className="grid grid-cols-7 gap-px mb-2">
            {weekDays.map((day) => (
              <div
                key={day}
                className="text-[10px] font-medium text-[#64748b] text-center py-2 uppercase tracking-wide"
              >
                {day}
              </div>
            ))}
          </div>

          {/* Days Grid */}
          <div className="grid grid-cols-7 gap-px bg-[#e2e8f0] border border-[#e2e8f0] rounded-lg overflow-hidden">
            {/* Empty cells for start day */}
            {Array.from({ length: startDay }).map((_, idx) => (
              <div key={`empty-${idx}`} className="bg-[#f8fafc] min-h-[100px]" />
            ))}

            {/* Day cells */}
            {days.map((day) => {
              const isToday = day === today.getDate();
              const dayPlans = plans.filter((p) => p.day === day);

              return (
                <div
                  key={day}
                  className={clsx(
                    'bg-white min-h-[100px] p-1.5 relative',
                    isToday && 'bg-[#faf5ff]'
                  )}
                >
                  {/* Day number */}
                  <div className="flex items-center justify-between mb-1">
                    <span
                      className={clsx(
                        'text-[11px] font-medium',
                        isToday ? 'text-[#7c3aed]' : 'text-[#64748b]'
                      )}
                    >
                      {day}
                    </span>
                    {isToday && (
                      <span className="w-1.5 h-1.5 bg-[#7c3aed] rounded-full" />
                    )}
                  </div>

                  {/* Plans */}
                  <div className="space-y-1">
                    {dayPlans.map((plan) => (
                      <div
                        key={plan.id}
                        className="text-[9px] px-1.5 py-0.5 rounded truncate"
                        style={{
                          backgroundColor: platformStyles[plan.platform].bg,
                          borderLeft: `2px solid ${platformStyles[plan.platform].border}`,
                        }}
                      >
                        <div className="flex items-center gap-1">
                          {platformStyles[plan.platform].icon}
                          <span className="truncate text-[#1e293b]">{plan.title}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Color Legend */}
        <div className="h-10 px-6 flex items-center gap-4 border-t border-[#e2e8f0] bg-white text-[10px]">
          <span className="text-[#64748b]">Platforms:</span>
          <div className="flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-[#7c3aed]" />
            <span className="text-[#64748b]">Facebook</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-[#10b981]" />
            <span className="text-[#64748b]">WhatsApp</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-[#f59e0b]" />
            <span className="text-[#64748b]">TikTok</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-[#ef4444]" />
            <span className="text-[#64748b]">Instagram</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-[#3b82f6]" />
            <span className="text-[#64748b]">Telegram</span>
          </div>
        </div>
      </div>
    </CRMSimpleLayout>
  );
}