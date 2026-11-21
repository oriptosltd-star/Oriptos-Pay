'use client';

import clsx from 'clsx';
import {
  IconMessage as TiMessage,
  IconTag as TiTag,
  IconUser as TiUser,
  IconCheck as TiCheck,
  IconArrowRight as TiArrowRight,
  IconSparkles as TiSparkles,
  IconTemplate as TiTemplate,
  IconPaperclip as TiPaperclip,
  IconNote as TiNote,
  IconClock as TiClock,
  IconSend as TiSend,
} from '@tabler/icons-react';

interface Message {
  id: string;
  type: 'incoming' | 'outgoing';
  content: string;
  timestamp: string;
}

interface ChatWorkspaceProps {
  contactName?: string;
  channelIcon?: React.ReactNode;
  channelName?: string;
  viaText?: string;
  openTime?: string;
  messages?: Message[];
  aiSuggestion?: string;
  onUseSuggestion?: () => void;
}

export default function ChatWorkspace({
  contactName = 'John Doe',
  channelIcon,
  channelName = 'WhatsApp',
  viaText = '+1 234 567 890',
  openTime = '2 hours ago',
  messages = [],
  aiSuggestion,
  onUseSuggestion,
}: ChatWorkspaceProps) {
  return (
    <div className="flex-1 h-screen flex flex-col bg-white">
      {/* Toolbar */}
      <div className="h-10 px-4 flex items-center justify-between border-b border-[#e2e8f0]">
        <div className="flex items-center gap-3">
          <div className="avatar avatar-md bg-[#ede9fe] text-[#6d28d9]">
            JD
          </div>
          <div>
            <div className="text-[13px] font-medium text-[#1e293b]">{contactName}</div>
            <div className="text-[10px] text-[#64748b] flex items-center gap-1">
              <span className="status-dot status-dot-green" />
              {channelName}
            </div>
          </div>
        </div>
        <div className="flex items-center gap-1">
          <button className="btn btn-ghost text-[11px]">
            <TiMessage size={12} />
            Auto
          </button>
          <button className="btn btn-ghost text-[11px]">
            <TiTag size={12} />
            Tag
          </button>
          <button className="btn btn-ghost text-[11px]">
            <TiUser size={12} />
            Assign
          </button>
          <button className="btn btn-green text-[11px]">
            <TiCheck size={12} />
            Resolve
          </button>
        </div>
      </div>

      {/* Channel Bar */}
      <div className="h-7 px-4 flex items-center justify-between bg-[#f8fafc] border-b border-[#e2e8f0]">
        <div className="text-[10px] text-[#64748b] flex items-center gap-1">
          <span>Via:</span>
          {channelIcon}
          <span>{viaText}</span>
        </div>
        <div className="text-[10px] text-[#64748b]">
          {openTime}
        </div>
      </div>

      {/* Chat Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-3">
        {messages.length > 0 ? (
          messages.map((msg) => (
            <div
              key={msg.id}
              className={clsx(
                msg.type === 'incoming' ? 'message-incoming' : 'message-outgoing'
              )}
            >
              <div className="text-[12px]">{msg.content}</div>
              <div className={clsx(
                'text-[9px] mt-1',
                msg.type === 'incoming' ? 'text-[#94a3b8]' : 'text-[rgba(255,255,255,0.7)]'
              )}>
                {msg.timestamp}
              </div>
            </div>
          ))
        ) : (
          <div className="empty-state h-full">
            <TiMessage size={32} className="mb-2 opacity-50" />
            <p className="text-xs">Select a conversation to start</p>
          </div>
        )}
      </div>

      {/* AI Suggestion Bar */}
      {aiSuggestion && (
        <div className="px-4 py-2 bg-[#f8fafc] border-t border-[#e2e8f0] flex items-center gap-2">
          <TiSparkles size={14} className="text-[#7c3aed]" />
          <span className="text-[11px] text-[#64748b] flex-1 truncate">
            {aiSuggestion}
          </span>
          <button
            onClick={onUseSuggestion}
            className="btn btn-secondary text-[10px] py-1 px-2"
          >
            Use
            <TiArrowRight size={10} />
          </button>
        </div>
      )}

      {/* Quick Actions */}
      <div className="px-4 py-2 flex gap-2 border-t border-[#e2e8f0]">
        <button className="btn btn-ghost text-[10px] py-1 px-2 border border-[#e2e8f0]">
          <TiTemplate size={12} />
          Template
        </button>
        <button className="btn btn-ghost text-[10px] py-1 px-2 border border-[#e2e8f0]">
          <TiPaperclip size={12} />
          Attach
        </button>
        <button className="btn btn-ghost text-[10px] py-1 px-2 border border-[#e2e8f0]">
          <TiNote size={12} />
          Note
        </button>
        <button className="btn btn-ghost text-[10px] py-1 px-2 border border-[#e2e8f0]">
          <TiClock size={12} />
          Snooze
        </button>
      </div>

      {/* Input Row */}
      <div className="p-4 border-t border-[#e2e8f0]">
        <div className="flex items-center gap-2">
          <input
            type="text"
            placeholder="Type a message..."
            className="input flex-1 text-[12px]"
          />
          <button className="w-[30px] h-[30px] rounded-full bg-[#7c3aed] text-white flex items-center justify-center">
            <TiSend size={14} />
          </button>
        </div>
      </div>
    </div>
  );
}