"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Zap, Wind, BookOpen } from "lucide-react";

export default function BottomNav() {
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 pb-6 pt-3 px-6 flex justify-between items-center z-50">
      <Link href="/sos" className={`flex flex-col items-center gap-1 ${isActive('/sos') ? 'text-sos' : 'text-gray-400'}`}>
        <div className={`p-3 rounded-full -mt-8 border-4 border-white ${isActive('/sos') ? 'bg-sos text-white shadow-lg' : 'bg-gray-100 text-gray-400'}`}>
            <Zap size={28} fill={isActive('/sos') ? "currentColor" : "none"} />
        </div>
        <span className="text-xs font-medium">SOS</span>
      </Link>

      <Link href="/restore" className={`flex flex-col items-center gap-1 ${isActive('/restore') ? 'text-teal-600' : 'text-gray-400'}`}>
        <Wind size={24} />
        <span className="text-xs font-medium">Restore</span>
      </Link>

      <Link href="/learn" className={`flex flex-col items-center gap-1 ${isActive('/learn') ? 'text-blue-600' : 'text-gray-400'}`}>
        <BookOpen size={24} />
        <span className="text-xs font-medium">Learn</span>
      </Link>
    </div>
  );
}
