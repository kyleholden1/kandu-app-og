"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Zap, Wind, BookOpen } from "lucide-react";

export default function BottomNav() {
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-300 z-50">
      <div className="max-w-md mx-auto px-6 py-4 flex justify-around items-end gap-4 h-24">
        <Link href="/sos" className={`flex flex-col items-center gap-2 flex-1 ${isActive('/sos') ? 'text-red-500' : 'text-gray-400'}`}>
          <div className={`p-3 rounded-full -mb-2 border-4 border-white transition ${isActive('/sos') ? 'bg-red-500 text-white shadow-lg' : 'bg-gray-100 text-gray-400'}`}>
            <Zap size={28} fill={isActive('/sos') ? "currentColor" : "none"} />
          </div>
          <span className="text-xs font-semibold whitespace-nowrap">SOS</span>
        </Link>

        <Link href="/restore" className={`flex flex-col items-center gap-2 flex-1 ${isActive('/restore') ? 'text-teal-600' : 'text-gray-400'}`}>
          <Wind size={28} className="transition" />
          <span className="text-xs font-semibold whitespace-nowrap">Restore</span>
        </Link>

        <Link href="/learn" className={`flex flex-col items-center gap-2 flex-1 ${isActive('/learn') ? 'text-blue-600' : 'text-gray-400'}`}>
          <BookOpen size={28} className="transition" />
          <span className="text-xs font-semibold whitespace-nowrap">Learn</span>
        </Link>
      </div>
    </div>
  );
}
