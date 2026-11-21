'use client';

import IconNav from './IconNav';
import SectionSidebar from './SectionSidebar';
import ListPanel from './ListPanel';
import ChatWorkspace from './ChatWorkspace';
import ContextPanel from './ContextPanel';

interface Conversation {
  id: string;
  name: string;
  initials: string;
  preview: string;
  timestamp: string;
  unread: boolean;
}

interface Message {
  id: string;
  type: 'incoming' | 'outgoing';
  content: string;
  timestamp: string;
}

interface CRM5ColumnLayoutProps {
  sectionTitle?: string;
  sectionItems?: { label: string; badge?: number; active?: boolean }[];
  sectionGroups?: {
    label: string;
    items: { label: string; badge?: number; active?: boolean }[];
  }[];
  listTitle?: string;
  conversations?: Conversation[];
  selectedConversationId?: string;
  onSelectConversation?: (id: string) => void;
  contactName?: string;
  channelName?: string;
  viaText?: string;
  openTime?: string;
  messages?: Message[];
  aiSuggestion?: string;
  contact?: {
    name: string;
    initials: string;
    phone: string;
    tags: string[];
  };
  conversationInfo?: {
    channel: string;
    agent: string;
    status: string;
    priority: string;
  };
  order?: {
    id: string;
    amount: string;
    status: string;
    items: string;
  };
}

export default function CRM5ColumnLayout({
  sectionTitle,
  sectionItems,
  sectionGroups,
  listTitle = 'Conversations',
  conversations = [],
  selectedConversationId,
  onSelectConversation,
  contactName,
  channelName,
  viaText,
  openTime,
  messages = [],
  aiSuggestion,
  contact,
  conversationInfo,
  order,
}: CRM5ColumnLayoutProps) {
  return (
    <div className="flex h-screen overflow-hidden">
      {/* Col 1: Icon Nav */}
      <IconNav />

      {/* Col 2: Section Sidebar */}
      <SectionSidebar
        title={sectionTitle}
        items={sectionItems || []}
        groups={sectionGroups}
      />

      {/* Col 3: List Panel */}
      <ListPanel
        title={listTitle}
        conversations={conversations}
        selectedId={selectedConversationId}
        onSelect={onSelectConversation}
      />

      {/* Col 4: Main Workspace */}
      <ChatWorkspace
        contactName={contactName}
        channelName={channelName}
        viaText={viaText}
        openTime={openTime}
        messages={messages}
        aiSuggestion={aiSuggestion}
      />

      {/* Col 5: Context Panel */}
      <ContextPanel
        contact={contact}
        conversation={conversationInfo}
        order={order}
      />
    </div>
  );
}