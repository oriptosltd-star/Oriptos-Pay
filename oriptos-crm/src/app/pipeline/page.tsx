'use client';

import CRMSimpleLayout from '@/components/layout/CRMSimpleLayout';
import clsx from 'clsx';
import {
  IconPlus as TiPlus,
  IconCalendar as TiCalendar,
  IconBrandWhatsapp as TiBrandWhatsapp,
  IconBrandInstagram as TiBrandInstagram,
  IconBrandTelegram as TiBrandTelegram,
  IconDotsVertical as TiDotsVertical,
} from '@tabler/icons-react';

interface Deal {
  id: string;
  name: string;
  value: string;
  channel: string;
  channelIcon?: React.ReactNode;
  tags: string[];
  followUpDate?: string;
  isOverdue?: boolean;
}

interface PipelineStage {
  id: string;
  name: string;
  color: string;
  deals: Deal[];
}

const pipelineStages: PipelineStage[] = [
  {
    id: 'new',
    name: 'New Lead',
    color: '#3b82f6',
    deals: [
      { id: '1', name: 'John Smith', value: '$2,500', channel: 'WhatsApp', channelIcon: <TiBrandWhatsapp size={12} />, tags: ['Hot'], followUpDate: 'May 18' },
      { id: '2', name: 'Emma Wilson', value: '$1,200', channel: 'Instagram', channelIcon: <TiBrandInstagram size={12} />, tags: ['New'], followUpDate: 'May 20' },
      { id: '3', name: 'Michael Brown', value: '$3,800', channel: 'Facebook', tags: ['Hot', 'Urgent'], followUpDate: 'May 17', isOverdue: true },
    ],
  },
  {
    id: 'contacted',
    name: 'Contacted',
    color: '#f59e0b',
    deals: [
      { id: '4', name: 'Sarah Davis', value: '$5,000', channel: 'WhatsApp', channelIcon: <TiBrandWhatsapp size={12} />, tags: ['Qualified'], followUpDate: 'May 19' },
      { id: '5', name: 'David Miller', value: '$1,800', channel: 'Telegram', channelIcon: <TiBrandTelegram size={12} />, tags: ['Follow-up'], followUpDate: 'May 21' },
    ],
  },
  {
    id: 'qualified',
    name: 'Qualified',
    color: '#8b5cf6',
    deals: [
      { id: '6', name: 'Jennifer Taylor', value: '$8,500', channel: 'WhatsApp', channelIcon: <TiBrandWhatsapp size={12} />, tags: ['VIP', 'Hot'], followUpDate: 'May 22' },
      { id: '7', name: 'Robert Garcia', value: '$4,200', channel: 'Instagram', channelIcon: <TiBrandInstagram size={12} />, tags: ['Qualified'], },
    ],
  },
  {
    id: 'won',
    name: 'Won',
    color: '#10b981',
    deals: [
      { id: '8', name: 'Lisa Anderson', value: '$12,000', channel: 'WhatsApp', channelIcon: <TiBrandWhatsapp size={12} />, tags: ['Closed'], },
      { id: '9', name: 'James Brown', value: '$6,500', channel: 'Telegram', channelIcon: <TiBrandTelegram size={12} />, tags: ['Closed'], },
    ],
  },
  {
    id: 'lost',
    name: 'Lost',
    color: '#ef4444',
    deals: [
      { id: '10', name: 'Chris Martin', value: '$3,000', channel: 'Facebook', tags: ['Lost'], },
    ],
  },
];

export default function PipelinePage() {
  return (
    <CRMSimpleLayout>
      <div className="h-full flex flex-col">
        {/* Header */}
        <div className="h-12 px-6 flex items-center justify-between border-b border-[#e2e8f0] bg-white">
          <div>
            <h1 className="text-sm font-medium text-[#1e293b]">Pipeline</h1>
            <p className="text-[10px] text-[#64748b]">Track and manage your deals</p>
          </div>
          <div className="flex items-center gap-2">
            <button className="btn btn-secondary text-[11px]">
              Filter
            </button>
            <button className="btn btn-primary text-[11px]">
              <TiPlus size={12} />
              Add Deal
            </button>
          </div>
        </div>

        {/* Kanban Board */}
        <div className="flex-1 overflow-x-auto p-4">
          <div className="flex gap-4 h-full min-w-max">
            {pipelineStages.map((stage) => (
              <div key={stage.id} className="kanban-column flex flex-col">
                {/* Column Header */}
                <div className="flex items-center gap-2 mb-3 px-1">
                  <span
                    className="w-2 h-2 rounded-full"
                    style={{ backgroundColor: stage.color }}
                  />
                  <span className="text-[10px] font-medium uppercase text-[#64748b] tracking-wide">
                    {stage.name}
                  </span>
                  <span className="badge badge-purple text-[9px]">
                    {stage.deals.length}
                  </span>
                </div>

                {/* Deal Cards */}
                <div className="flex-1 space-y-2">
                  {stage.deals.map((deal) => (
                    <div
                      key={deal.id}
                      className={clsx(
                        'kanban-card',
                        stage.id === 'won' && 'border-l-2 border-l-[#10b981]'
                      )}
                    >
                      <div className="flex items-start justify-between mb-2">
                        <span className="text-xs font-medium text-[#1e293b]">
                          {deal.name}
                        </span>
                        <button className="text-[#94a3b8] hover:text-[#64748b]">
                          <TiDotsVertical size={12} />
                        </button>
                      </div>
                      <div className="text-[11px] font-medium text-[#7c3aed] mb-2">
                        {deal.value}
                      </div>
                      <div className="flex items-center gap-1 text-[10px] text-[#64748b] mb-2">
                        {deal.channelIcon}
                        <span>{deal.channel}</span>
                      </div>
                      {deal.tags.length > 0 && (
                        <div className="flex flex-wrap gap-1">
                          {deal.tags.map((tag, idx) => (
                            <span
                              key={idx}
                              className={clsx(
                                'text-[9px] px-1.5 py-0.5 rounded',
                                tag === 'Hot' ? 'bg-[#fee2e2] text-[#dc2626]' :
                                tag === 'VIP' ? 'bg-[#ede9fe] text-[#7c3aed]' :
                                tag === 'New' ? 'bg-[#dbeafe] text-[#2563eb]' :
                                tag === 'Qualified' ? 'bg-[#d1fae5] text-[#059669]' :
                                tag === 'Closed' ? 'bg-[#d1fae5] text-[#059669]' :
                                tag === 'Lost' ? 'bg-[#fee2e2] text-[#dc2626]' :
                                'bg-[#f1f5f9] text-[#64748b]'
                              )}
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}
                      {deal.followUpDate && (
                        <div className={clsx(
                          'flex items-center gap-1 mt-2 text-[9px]',
                          deal.isOverdue ? 'text-[#ef4444]' : 'text-[#64748b]'
                        )}>
                          <TiCalendar size={10} />
                          <span>{deal.followUpDate}</span>
                          {deal.isOverdue && (
                            <span className="ml-1 font-medium">Overdue</span>
                          )}
                        </div>
                      )}
                    </div>
                  ))}

                  {/* Add Deal Card */}
                  <button className="w-full py-2 text-[11px] text-[#64748b] border border-dashed border-[#e2e8f0] rounded-lg hover:bg-[#f8fafc] hover:border-[#7c3aed] transition-colors">
                    + Add deal
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Summary Bar */}
        <div className="h-10 px-6 flex items-center gap-6 border-t border-[#e2e8f0] bg-white text-[11px]">
          <div className="flex items-center gap-2">
            <span className="status-dot status-dot-blue" />
            <span className="text-[#64748b]">New Lead:</span>
            <span className="font-medium text-[#1e293b]">3</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="status-dot status-dot-orange" />
            <span className="text-[#64748b]">Contacted:</span>
            <span className="font-medium text-[#1e293b]">2</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="status-dot" style={{ backgroundColor: '#8b5cf6' }} />
            <span className="text-[#64748b]">Qualified:</span>
            <span className="font-medium text-[#1e293b]">2</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="status-dot status-dot-green" />
            <span className="text-[#64748b]">Won:</span>
            <span className="font-medium text-[#1e293b]">2</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="status-dot status-dot-red" />
            <span className="text-[#64748b]">Lost:</span>
            <span className="font-medium text-[#1e293b]">1</span>
          </div>
          <div className="ml-auto font-medium text-[#7c3aed]">
            Total Pipeline: $50,500
          </div>
        </div>
      </div>
    </CRMSimpleLayout>
  );
}