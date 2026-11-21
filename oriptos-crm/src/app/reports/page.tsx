'use client';

import CRMSimpleLayout from '@/components/layout/CRMSimpleLayout';
import clsx from 'clsx';
import { useState } from 'react';
import {
  IconArrowUp as TiArrowUp,
  IconArrowDown as TiArrowDown,
  IconMessage as TiMessage,
  IconClock as TiClock,
  IconCheck as TiCheck,
  IconCurrencyDollar as TiCurrencyDollar,
} from '@tabler/icons-react';

interface MetricCard {
  label: string;
  value: string;
  trend: string;
  trendUp: boolean;
}

interface ChannelPerformance {
  channel: string;
  color: string;
  percentage: number;
  conversations: number;
}

const metrics: MetricCard[] = [
  { label: 'Conversations', value: '1,247', trend: '+12%', trendUp: true },
  { label: 'Avg Response Time', value: '2.5m', trend: '-8%', trendUp: true },
  { label: 'Resolution Rate', value: '94%', trend: '+3%', trendUp: true },
  { label: 'Revenue Pipeline', value: '$45.2K', trend: '+18%', trendUp: true },
];

const channelPerformance: ChannelPerformance[] = [
  { channel: 'WhatsApp', color: '#25D366', percentage: 45, conversations: 561 },
  { channel: 'Instagram', color: '#E4405F', percentage: 28, conversations: 349 },
  { channel: 'Facebook', color: '#1877F2', percentage: 15, conversations: 187 },
  { channel: 'Telegram', color: '#0088CC', percentage: 8, conversations: 100 },
  { channel: 'TikTok', color: '#000000', percentage: 4, conversations: 50 },
];

export default function ReportsPage() {
  const [activeFilter, setActiveFilter] = useState('This Week');
  const filters = ['This Week', 'This Month', 'All Agents'];

  return (
    <CRMSimpleLayout>
      <div className="p-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-lg font-medium text-[#1e293b]">Reports</h1>
            <p className="text-xs text-[#64748b] mt-1">Analytics and performance insights</p>
          </div>
          <div className="flex gap-1">
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
        </div>

        {/* Metric Cards */}
        <div className="grid grid-cols-4 gap-4 mb-8">
          <div className="card p-4">
            <div className="flex items-center gap-2 mb-2">
              <TiMessage size={14} className="text-[#64748b]" />
              <span className="text-[10px] text-[#64748b]">Conversations</span>
            </div>
            <div className="text-2xl font-medium text-[#1e293b]">{metrics[0].value}</div>
            <div className={clsx(
              'flex items-center gap-1 mt-2 text-[9px]',
              metrics[0].trendUp ? 'text-[#10b981]' : 'text-[#ef4444]'
            )}>
              {metrics[0].trendUp ? <TiArrowUp size={10} /> : <TiArrowDown size={10} />}
              <span>{metrics[0].trend}</span>
              <span className="text-[#94a3b8]">vs last period</span>
            </div>
          </div>

          <div className="card p-4">
            <div className="flex items-center gap-2 mb-2">
              <TiClock size={14} className="text-[#64748b]" />
              <span className="text-[10px] text-[#64748b]">Avg Response Time</span>
            </div>
            <div className="text-2xl font-medium text-[#1e293b]">{metrics[1].value}</div>
            <div className={clsx(
              'flex items-center gap-1 mt-2 text-[9px]',
              metrics[1].trendUp ? 'text-[#10b981]' : 'text-[#ef4444]'
            )}>
              {metrics[1].trendUp ? <TiArrowUp size={10} /> : <TiArrowDown size={10} />}
              <span>{metrics[1].trend}</span>
              <span className="text-[#94a3b8]">vs last period</span>
            </div>
          </div>

          <div className="card p-4">
            <div className="flex items-center gap-2 mb-2">
              <TiCheck size={14} className="text-[#64748b]" />
              <span className="text-[10px] text-[#64748b]">Resolution Rate</span>
            </div>
            <div className="text-2xl font-medium text-[#1e293b]">{metrics[2].value}</div>
            <div className={clsx(
              'flex items-center gap-1 mt-2 text-[9px]',
              metrics[2].trendUp ? 'text-[#10b981]' : 'text-[#ef4444]'
            )}>
              {metrics[2].trendUp ? <TiArrowUp size={10} /> : <TiArrowDown size={10} />}
              <span>{metrics[2].trend}</span>
              <span className="text-[#94a3b8]">vs last period</span>
            </div>
          </div>

          <div className="card p-4">
            <div className="flex items-center gap-2 mb-2">
              <TiCurrencyDollar size={14} className="text-[#64748b]" />
              <span className="text-[10px] text-[#64748b]">Revenue Pipeline</span>
            </div>
            <div className="text-2xl font-medium text-[#1e293b]">{metrics[3].value}</div>
            <div className={clsx(
              'flex items-center gap-1 mt-2 text-[9px]',
              metrics[3].trendUp ? 'text-[#10b981]' : 'text-[#ef4444]'
            )}>
              {metrics[3].trendUp ? <TiArrowUp size={10} /> : <TiArrowDown size={10} />}
              <span>{metrics[3].trend}</span>
              <span className="text-[#94a3b8]">vs last period</span>
            </div>
          </div>
        </div>

        {/* Channel Performance */}
        <div className="card p-6">
          <h2 className="text-sm font-medium text-[#1e293b] mb-4">Channel Performance</h2>
          
          <div className="space-y-4">
            {channelPerformance.map((channel) => (
              <div key={channel.channel}>
                <div className="flex items-center justify-between mb-1">
                  <div className="flex items-center gap-2">
                    <span
                      className="w-3 h-3 rounded-full"
                      style={{ backgroundColor: channel.color }}
                    />
                    <span className="text-xs text-[#1e293b]">{channel.channel}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-medium text-[#1e293b]">{channel.conversations}</span>
                    <span className="text-[9px] text-[#64748b]">({channel.percentage}%)</span>
                  </div>
                </div>
                <div className="h-2 bg-[#f1f5f9] rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full transition-all"
                    style={{
                      width: `${channel.percentage}%`,
                      backgroundColor: channel.color,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Summary */}
          <div className="mt-6 pt-4 border-t border-[#e2e8f0] grid grid-cols-3 gap-4 text-center">
            <div>
              <div className="text-lg font-medium text-[#1e293b]">1,247</div>
              <div className="text-[10px] text-[#64748b]">Total Conversations</div>
            </div>
            <div>
              <div className="text-lg font-medium text-[#1e293b]">2.5m</div>
              <div className="text-[10px] text-[#64748b]">Avg Response</div>
            </div>
            <div>
              <div className="text-lg font-medium text-[#10b981]">94%</div>
              <div className="text-[10px] text-[#64748b]">Resolution Rate</div>
            </div>
          </div>
        </div>

        {/* Agent Performance Table */}
        <div className="card p-6 mt-6">
          <h2 className="text-sm font-medium text-[#1e293b] mb-4">Agent Performance</h2>
          <table className="table">
            <thead>
              <tr>
                <th>Agent</th>
                <th>Conversations</th>
                <th>Avg Response</th>
                <th>Resolution</th>
                <th>Rating</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="font-medium">Sarah Johnson</td>
                <td>234</td>
                <td>1.8m</td>
                <td className="text-[#10b981]">96%</td>
                <td className="badge badge-green">4.9</td>
              </tr>
              <tr>
                <td className="font-medium">Mike Wilson</td>
                <td>198</td>
                <td>2.2m</td>
                <td className="text-[#10b981]">92%</td>
                <td className="badge badge-green">4.7</td>
              </tr>
              <tr>
                <td className="font-medium">Emily Davis</td>
                <td>187</td>
                <td>2.5m</td>
                <td className="text-[#10b981]">94%</td>
                <td className="badge badge-green">4.8</td>
              </tr>
              <tr>
                <td className="font-medium">James Brown</td>
                <td>156</td>
                <td>3.1m</td>
                <td className="text-[#f59e0b]">88%</td>
                <td className="badge badge-orange">4.5</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </CRMSimpleLayout>
  );
}