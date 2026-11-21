'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { 
  CreditCard, 
  LayoutDashboard, 
  Settings, 
  Users, 
  LogOut,
  Landmark,
  Blocks
} from "lucide-react";

export function Sidebar({ className }: { className?: string }) {
  const pathname = usePathname();

  const routes = [
    {
      label: "Overview",
      icon: LayoutDashboard,
      href: "/dashboard",
      color: "text-sky-500",
    },
    {
      label: "Payments",
      icon: CreditCard,
      href: "/dashboard/payments",
      color: "text-violet-500",
    },
    {
      label: "Balances",
      icon: Landmark,
      href: "/dashboard/balances",
      color: "text-pink-700",
    },
    {
      label: "Customers",
      icon: Users,
      href: "/dashboard/customers",
      color: "text-orange-700",
    },
    {
      label: "Settings",
      icon: Settings,
      href: "/dashboard/settings",
    },
  ];

  return (
    <div className={cn("space-y-4 py-4 flex flex-col h-full bg-[#111827] text-white", className)}>
      <div className="px-3 py-2 flex-1">
        <Link href="/dashboard" className="flex items-center pl-3 mb-14">
          <div className="relative w-8 h-8 mr-4 bg-gradient-to-r from-blue-600 to-violet-600 rounded-lg flex items-center justify-center">
            <span className="font-bold text-lg text-white">U</span>
          </div>
          <h1 className={cn("text-2xl font-bold")}>
            Upfinit Pay
          </h1>
        </Link>
        <div className="space-y-1">
          {routes.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              className={cn(
                "text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-white hover:bg-white/10 rounded-lg transition",
                pathname === route.href ? "text-white bg-white/10" : "text-zinc-400"
              )}
            >
              <div className="flex items-center flex-1">
                <route.icon className={cn("h-5 w-5 mr-3", route.color)} />
                {route.label}
              </div>
            </Link>
          ))}
        </div>
      </div>
      <div className="px-3 py-2">
         <Button variant="ghost" className="w-full justify-start text-zinc-400 hover:text-white hover:bg-white/10">
            <LogOut className="h-5 w-5 mr-3" />
            Sign Out
         </Button>
      </div>
    </div>
  );
}
