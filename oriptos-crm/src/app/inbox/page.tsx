import CRM5ColumnLayout from '@/components/layout/CRM5ColumnLayout';
import { IconBrandWhatsapp as TiBrandWhatsapp } from '@tabler/icons-react';

const mockConversations = [
  { id: '1', name: 'Sarah Johnson', initials: 'SJ', preview: 'Hi, I want to place an order for...', timestamp: '2m ago', unread: true },
  { id: '2', name: 'Mike Wilson', initials: 'MW', preview: 'Thanks for the quick response!', timestamp: '15m ago', unread: false },
  { id: '3', name: 'Emily Davis', initials: 'ED', preview: 'Can you send me the catalog?', timestamp: '1h ago', unread: true },
  { id: '4', name: 'James Brown', initials: 'JB', preview: 'I need help with my order', timestamp: '2h ago', unread: false },
  { id: '5', name: 'Lisa Anderson', initials: 'LA', preview: 'When will my order arrive?', timestamp: '3h ago', unread: true },
  { id: '6', name: 'David Miller', initials: 'DM', preview: 'Great service! Will recommend', timestamp: '5h ago', unread: false },
  { id: '7', name: 'Jennifer Taylor', initials: 'JT', preview: 'Can I get a discount on bulk order?', timestamp: '6h ago', unread: false },
  { id: '8', name: 'Robert Garcia', initials: 'RG', preview: 'Need to update my shipping address', timestamp: '1d ago', unread: false },
];

const mockMessages = [
  { id: '1', type: 'incoming' as const, content: 'Hi! I want to place an order for your products.', timestamp: '10:30 AM' },
  { id: '2', type: 'outgoing' as const, content: 'Hello Sarah! Thank you for reaching out. I would be happy to help you place an order. What products are you interested in?', timestamp: '10:32 AM' },
  { id: '3', type: 'incoming' as const, content: 'I need about 50 units of your premium package. Can you give me a quote?', timestamp: '10:35 AM' },
  { id: '4', type: 'outgoing' as const, content: 'Absolutely! For 50 units of the premium package, I can offer you a 15% discount. The total would be $2,500. Would you like to proceed?', timestamp: '10:38 AM' },
];

export default function InboxPage() {
  return (
    <CRM5ColumnLayout
      sectionTitle="Inbox"
      sectionGroups={[
        {
          label: 'Views',
          items: [
            { label: 'My Assignments', badge: 5, active: true },
            { label: 'All Conversations' },
            { label: 'Unassigned', badge: 3 },
            { label: 'Snoozed' },
            { label: 'Resolved' },
          ],
        },
        {
          label: 'Channels',
          items: [
            { label: 'WhatsApp', badge: 12 },
            { label: 'Instagram' },
            { label: 'Facebook' },
            { label: 'TikTok' },
            { label: 'Telegram' },
            { label: '+ Add Channel' },
          ],
        },
      ]}
      listTitle="Conversations"
      conversations={mockConversations}
      selectedConversationId="1"
      contactName="Sarah Johnson"
      channelName="WhatsApp"
      viaText="+1 234 567 890"
      openTime="2 hours ago"
      messages={mockMessages}
      aiSuggestion="Hi Sarah! For 50 units, I can offer a 15% discount - total $2,500. Would you like to proceed?"
      contact={{
        name: 'Sarah Johnson',
        initials: 'SJ',
        phone: '+1 234 567 890',
        tags: ['VIP', 'Repeat', 'New York'],
      }}
      conversationInfo={{
        channel: 'WhatsApp',
        agent: 'You',
        status: 'Open',
        priority: 'High',
      }}
      order={{
        id: '4521',
        amount: '$2,500',
        status: 'Pending',
        items: '50 units',
      }}
    />
  );
}