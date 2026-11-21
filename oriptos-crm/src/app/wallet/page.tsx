'use client';

import CRMSimpleLayout from '@/components/layout/CRMSimpleLayout';
import clsx from 'clsx';
import {
  IconWallet as TiWallet,
  IconArrowUp as TiArrowUp,
  IconArrowDown as TiArrowDown,
  IconCreditCard as TiCreditCard,
  IconGift as TiGift,
  IconShoppingCart as TiShoppingCart,
  IconRefresh as TiRefresh,
  IconCheck as TiCheck,
} from '@tabler/icons-react';

interface Transaction {
  id: string;
  type: 'credit' | 'debit';
  amount: string;
  description: string;
  date: string;
}

const transactions: Transaction[] = [
  { id: '1', type: 'debit', amount: '-$49.00', description: 'Monthly Subscription', date: 'May 15, 2026' },
  { id: '2', type: 'credit', amount: '+$100.00', description: 'Wallet Top-up', date: 'May 12, 2026' },
  { id: '3', type: 'debit', amount: '-$15.00', description: 'SMS Bundle Purchase', date: 'May 10, 2026' },
  { id: '4', type: 'debit', amount: '-$25.00', description: 'WhatsApp API Credits', date: 'May 8, 2026' },
  { id: '5', type: 'credit', amount: '+$50.00', description: 'Referral Bonus', date: 'May 5, 2026' },
  { id: '6', type: 'debit', amount: '-$8.00', description: 'Voice Minutes', date: 'May 3, 2026' },
];

export default function WalletPage() {
  return (
    <CRMSimpleLayout>
      <div className="p-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-lg font-medium text-[#1e293b]">Wallet</h1>
            <p className="text-xs text-[#64748b] mt-1">Manage your credits and billing</p>
          </div>
          <button className="btn btn-primary text-[11px]">
            <TiWallet size={12} />
            Add Funds
          </button>
        </div>

        {/* Balance Cards */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          <div className="card p-6 bg-gradient-to-br from-[#7c3aed] to-[#5b21b6] text-white">
            <div className="text-[10px] opacity-70 mb-1">Available Balance</div>
            <div className="text-3xl font-medium">$127.50</div>
            <div className="text-[10px] opacity-70 mt-2">Last updated: Just now</div>
          </div>
          <div className="card p-4">
            <div className="text-[10px] text-[#64748b] mb-1">This Month Spent</div>
            <div className="text-xl font-medium text-[#1e293b]">$97.00</div>
            <div className="text-[9px] text-[#94a3b8] mt-1">of $200 budget</div>
            <div className="mt-2 h-1.5 bg-[#f1f5f9] rounded-full overflow-hidden">
              <div className="h-full w-[48%] bg-[#f59e0b] rounded-full" />
            </div>
          </div>
          <div className="card p-4">
            <div className="text-[10px] text-[#64748b] mb-1">Credits Remaining</div>
            <div className="text-xl font-medium text-[#1e293b]">847 / 2,000</div>
            <div className="text-[9px] text-[#94a3b8] mt-1">Conversations</div>
            <div className="mt-2 h-1.5 bg-[#f1f5f9] rounded-full overflow-hidden">
              <div className="h-full w-[42%] bg-[#7c3aed] rounded-full" />
            </div>
          </div>
        </div>

        {/* Usage Breakdown */}
        <div className="card p-6 mb-6">
          <h2 className="text-sm font-medium text-[#1e293b] mb-4">Usage Breakdown</h2>
          <div className="grid grid-cols-4 gap-4">
            <div className="text-center p-3 bg-[#f8fafc] rounded-lg">
              <div className="text-lg font-medium text-[#1e293b]">847</div>
              <div className="text-[10px] text-[#64748b]">Conversations</div>
            </div>
            <div className="text-center p-3 bg-[#f8fafc] rounded-lg">
              <div className="text-lg font-medium text-[#1e293b]">2,450</div>
              <div className="text-[10px] text-[#64748b]">SMS Credits</div>
            </div>
            <div className="text-center p-3 bg-[#f8fafc] rounded-lg">
              <div className="text-lg font-medium text-[#1e293b]">120</div>
              <div className="text-[10px] text-[#64748b]">Voice Minutes</div>
            </div>
            <div className="text-center p-3 bg-[#f8fafc] rounded-lg">
              <div className="text-lg font-medium text-[#1e293b]">5 GB</div>
              <div className="text-[10px] text-[#64748b]">Media Storage</div>
            </div>
          </div>
        </div>

        {/* Transaction History */}
        <div className="card p-6">
          <h2 className="text-sm font-medium text-[#1e293b] mb-4">Transaction History</h2>
          <div className="space-y-3">
            {transactions.map((tx) => (
              <div key={tx.id} className="flex items-center justify-between py-2 border-b border-[#e2e8f0] last:border-0">
                <div className="flex items-center gap-3">
                  <div className={clsx(
                    'w-8 h-8 rounded-full flex items-center justify-center',
                    tx.type === 'credit' ? 'bg-[#d1fae5]' : 'bg-[#fee2e2]'
                  )}>
                    {tx.type === 'credit' ? (
                      <TiArrowDown size={14} className="text-[#059669]" />
                    ) : (
                      <TiArrowUp size={14} className="text-[#dc2626]" />
                    )}
                  </div>
                  <div>
                    <div className="text-xs font-medium text-[#1e293b]">{tx.description}</div>
                    <div className="text-[9px] text-[#94a3b8]">{tx.date}</div>
                  </div>
                </div>
                <span className={clsx(
                  'text-xs font-medium',
                  tx.type === 'credit' ? 'text-[#10b981]' : 'text-[#ef4444]'
                )}>
                  {tx.amount}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Payment Methods */}
        <div className="card p-6 mt-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-sm font-medium text-[#1e293b]">Payment Methods</h2>
            <button className="btn btn-secondary text-[10px]">
              <TiCreditCard size={12} />
              Add Method
            </button>
          </div>
          <div className="flex items-center gap-3 p-3 bg-[#f8fafc] rounded-lg">
            <TiCreditCard size={20} className="text-[#64748b]" />
            <div className="flex-1">
              <div className="text-xs font-medium text-[#1e293b]">Visa ending in 4242</div>
              <div className="text-[9px] text-[#94a3b8]">Expires 12/2027</div>
            </div>
            <span className="badge badge-green">Default</span>
          </div>
        </div>
      </div>
    </CRMSimpleLayout>
  );
}