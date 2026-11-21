'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  IconInbox as TiInbox,
  IconMessage as TiMessage,
  IconLayoutKanban as TiLayoutKanban,
  IconUsers as TiUsers,
  IconCalendar as TiCalendar,
  IconDeviceMobile as TiDeviceMobile,
  IconChartBar as TiChartBar,
  IconSettings as TiSettings,
} from '@tabler/icons-react';
import clsx from 'clsx';

const navItems = [
  { icon: TiInbox, label: 'Inbox', href: '/inbox' },
  { icon: TiMessage, label: 'Channels', href: '/channels' },
  { icon: TiLayoutKanban, label: 'Pipeline', href: '/pipeline' },
  { icon: TiUsers, label: 'Contacts', href: '/contacts' },
  { icon: TiCalendar, label: 'Planner', href: '/planner' },
  { icon: TiDeviceMobile, label: 'Fleet', href: '/fleet' },
];

const bottomNavItems = [
  { icon: TiChartBar, label: 'Reports', href: '/reports' },
  { icon: TiSettings, label: 'Settings', href: '/settings' },
];

export default function IconNav() {
  const pathname = usePathname();

  return (
    <div className="col-icon-nav h-screen bg-[#12122a] flex flex-col items-center py-3">
      {/* Logo */}
      <div className="w-[36px] h-[36px] bg-[#7c3aed] rounded-lg flex items-center justify-center mb-4">
        <span className="text-white font-bold text-sm">O</span>
      </div>

      {/* Main Nav Items */}
      <nav className="flex flex-col gap-1 flex-1">
        {navItems.map((item) => {
          const isActive = pathname === item.href || pathname?.startsWith(item.href + '/');
          return (
            <Link
              key={item.href}
              href={item.href}
              className={clsx(
                'w-[58px] flex flex-col items-center justify-center py-[7px] px-[5px] rounded-[8px] transition-all duration-150',
                isActive
                  ? 'bg-[rgba(124,58,237,0.25)]'
                  : 'hover:bg-[rgba(255,255,255,0.07)]'
              )}
            >
              <item.icon
                size={20}
                className={clsx(
                  'mb-1',
                  isActive ? 'text-[#a78bfa]' : 'text-[rgba(255,255,255,0.4)]'
                )}
              />
              <span
                className={clsx(
                  'text-[9px] text-center',
                  isActive ? 'text-[#a78bfa]' : 'text-[rgba(255,255,255,0.35)]'
                )}
              >
                {item.label}
              </span>
            </Link>
          );
        })}
      </nav>

      {/* Separator */}
      <div className="w-[40px] h-[0.5px] bg-[rgba(255,255,255,0.1)] my-2" />

      {/* Bottom Nav Items */}
      <nav className="flex flex-col gap-1">
        {bottomNavItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={clsx(
                'w-[58px] flex flex-col items-center justify-center py-[7px] px-[5px] rounded-[8px] transition-all duration-150',
                isActive
                  ? 'bg-[rgba(124,58,237,0.25)]'
                  : 'hover:bg-[rgba(255,255,255,0.07)]'
              )}
            >
              <item.icon
                size={20}
                className={clsx(
                  'mb-1',
                  isActive ? 'text-[#a78bfa]' : 'text-[rgba(255,255,255,0.4)]'
                )}
              />
              <span
                className={clsx(
                  'text-[9px] text-center',
                  isActive ? 'text-[#a78bfa]' : 'text-[rgba(255,255,255,0.35)]'
                )}
              >
                {item.label}
              </span>
            </Link>
          );
        })}
      </nav>

      {/* User Avatar */}
      <div className="mt-4">
        <div className="w-[30px] h-[30px] bg-[#7c3aed] rounded-full flex items-center justify-center">
          <span className="text-white font-medium text-[10px]">SZ</span>
        </div>
      </div>
    </div>
  );
}