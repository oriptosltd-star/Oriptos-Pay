import { Header } from "@/components/dashboard/header";
import { Sidebar } from "@/components/dashboard/sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen bg-zinc-50 overflow-hidden">
      {/* Desktop Sidebar */}
      <div className="hidden md:flex w-64 flex-col fixed inset-y-0 border-r bg-[#111827]">
        <Sidebar className="bg-[#111827]" />
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col md:pl-64 h-full">
         <Header />
         <main className="flex-1 p-8 overflow-y-auto">
            {children}
         </main>
      </div>
    </div>
  );
}
