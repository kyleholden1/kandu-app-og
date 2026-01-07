"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Zap, Wind, BookOpen } from "lucide-react";

export default function BottomNav() {
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-50 flex justify-center">
      <div className="w-full max-w-md px-6 py-4 flex justify-between items-end gap-6">
        <Link href="/sos" className={`flex flex-col items-center gap-1 flex-1 transition ${isActive('/sos') ? 'text-red-500' : 'text-gray-300'}`}>
          <div className={`p-2.5 rounded-full transition ${isActive('/sos') ? 'bg-red-50' : ''}`}>
            <Zap size={24} fill={isActive('/sos') ? "currentColor" : "none"} />
          </div>
          <span className="text-xs font-semibold">SOS</span>
        </Link>

        <Link href="/restore" className={`flex flex-col items-center gap-1 flex-1 transition ${isActive('/restore') ? 'text-teal-600' : 'text-gray-300'}`}>
          <div className={`p-2.5 rounded-full transition ${isActive('/restore') ? 'bg-teal-50' : ''}`}>
            <Wind size={24} />
          </div>
          <span className="text-xs font-semibold">Restore</span>
        </Link>

        <Link href="/learn" className={`flex flex-col items-center gap-1 flex-1 transition ${isActive('/learn') ? 'text-blue-600' : 'text-gray-300'}`}>
          <div className={`p-2.5 rounded-full transition ${isActive('/learn') ? 'bg-blue-50' : ''}`}>
            <BookOpen size={24} />
          </div>
          <span className="text-xs font-semibold">Learn</span>
        </Link>
      </div>
    </nav>
  );
}
