'use client';

import CRMSimpleLayout from '@/components/layout/CRMSimpleLayout';
import clsx from 'clsx';
import {
  IconFileText as TiNewspaper,
  IconSparkles as TiSparkles,
  IconBulb as TiBulb,
  IconBug as TiBug,
  IconCheck as TiCheck,
  IconStar as TiStar,
} from '@tabler/icons-react';

interface Update {
  id: string;
  type: 'feature' | 'improvement' | 'fix' | 'announcement';
  title: string;
  description: string;
  date: string;
  badge?: string;
}

const updates: Update[] = [
  {
    id: '1',
    type: 'feature',
    title: 'AI Receptionist Enhancements',
    description: 'New AI-powered response suggestions with improved context understanding and natural language processing.',
    date: 'May 15, 2026',
    badge: 'New'
  },
  {
    id: '2',
    type: 'feature',
    title: 'Pipeline Automation Rules',
    description: 'Set up automatic actions when deals move between stages - send notifications, update fields, or trigger workflows.',
    date: 'May 12, 2026',
    badge: 'New'
  },
  {
    id: '3',
    type: 'improvement',
    title: 'Faster Message Loading',
    description: 'Optimized inbox performance for conversations with large message history. Loading times reduced by 40%.',
    date: 'May 10, 2026'
  },
  {
    id: '4',
    type: 'feature',
    title: 'Bulk Message Scheduling',
    description: 'Schedule messages to be sent at optimal times across multiple contacts. Perfect for campaigns and follow-ups.',
    date: 'May 8, 2026'
  },
  {
    id: '5',
    type: 'fix',
    title: 'WhatsApp Media Download Fix',
    description: 'Resolved issue with downloading images and videos from WhatsApp conversations.',
    date: 'May 5, 2026'
  },
  {
    id: '6',
    type: 'improvement',
    title: 'Enhanced Contact Deduplication',
    description: 'Improved algorithm to detect and merge duplicate contacts based on phone number and email.',
    date: 'May 3, 2026'
  },
  {
    id: '7',
    type: 'announcement',
    title: 'New Integration: Google Business Profile',
    description: 'Now you can manage your Google Business Profile listings directly from Oriptos. Reply to reviews and update business info.',
    date: 'May 1, 2026',
    badge: 'Beta'
  },
  {
    id: '8',
    type: 'improvement',
    title: 'Mobile App Performance',
    description: 'Several improvements to the mobile app including faster navigation and reduced battery usage.',
    date: 'April 28, 2026'
  },
];

const typeIcons = {
  feature: <TiSparkles size={14} className="text-[#7c3aed]" />,
  improvement: <TiBulb size={14} className="text-[#3b82f6]" />,
  fix: <TiBug size={14} className="text-[#f59e0b]" />,
  announcement: <TiNewspaper size={14} className="text-[#64748b]" />,
};

const typeLabels = {
  feature: 'Feature',
  improvement: 'Improvement',
  fix: 'Bug Fix',
  announcement: 'Announcement',
};

export default function UpdatesPage() {
  return (
    <CRMSimpleLayout>
      <div className="p-6 max-w-3xl mx-auto">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-lg font-medium text-[#1e293b]">What&apos;s New</h1>
          <p className="text-xs text-[#64748b] mt-1">Product updates and improvements</p>
        </div>

        {/* Featured Update */}
        <div className="card p-6 mb-6 bg-gradient-to-br from-[#faf5ff] to-[#f3e8ff] border-[#ede9fe]">
          <div className="flex items-center gap-2 mb-3">
            <span className="badge badge-purple">Featured</span>
            <span className="text-[9px] text-[#64748b]">May 2026</span>
          </div>
          <h2 className="text-base font-medium text-[#1e293b] mb-2">Turn Chats into Tasks with AI</h2>
          <p className="text-xs text-[#64748b] mb-4">
            Oriptos AI now automatically detects when a conversation requires follow-up and creates actionable tasks for your team.
          </p>
          <div className="flex gap-2">
            <button className="btn btn-primary text-[10px]">Learn More</button>
            <button className="btn btn-secondary text-[10px]">Watch Demo</button>
          </div>
        </div>

        {/* Update List */}
        <div className="space-y-3">
          {updates.map((update) => (
            <div key={update.id} className="card p-4 hover:border-[#7c3aed] transition-colors">
              <div className="flex items-start justify-between mb-2">
                <div className="flex items-center gap-2">
                  {typeIcons[update.type]}
                  <span className="text-[10px] font-medium text-[#64748b]">
                    {typeLabels[update.type]}
                  </span>
                </div>
                <span className="text-[9px] text-[#94a3b8]">{update.date}</span>
              </div>
              <h3 className="text-sm font-medium text-[#1e293b] mb-1">{update.title}</h3>
              <p className="text-[11px] text-[#64748b] mb-2">{update.description}</p>
              {update.badge && (
                <span className={clsx(
                  'badge',
                  update.badge === 'New' ? 'badge-green' : 'badge-orange'
                )}>
                  {update.badge}
                </span>
              )}
            </div>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-6">
          <button className="btn btn-secondary text-[11px]">
            Load More Updates
          </button>
        </div>
      </div>
    </CRMSimpleLayout>
  );
}