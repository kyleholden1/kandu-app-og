"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Radio, Zap, User } from "lucide-react";

export default function BottomNav() {
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <nav className="fixed bottom-6 left-6 right-6 z-50">
      <div className="max-w-sm mx-auto bg-white rounded-2xl shadow-2xl border border-gray-100 p-2 flex justify-between items-center">
        <Link 
          href="/" 
          className={`flex-1 flex flex-col items-center py-3 px-2 rounded-xl transition-all ${isActive('/') ? 'bg-teal-50 text-teal-600' : 'text-gray-400 hover:bg-gray-50'}`}
        >
          <Home size={24} strokeWidth={isActive('/') ? 3 : 2} />
        </Link>
        
        <Link 
          href="/stream" 
          className={`flex-1 flex flex-col items-center py-3 px-2 rounded-xl transition-all ${isActive('/stream') ? 'bg-blue-50 text-blue-500' : 'text-gray-400 hover:bg-gray-50'}`}
        >
          <Radio size={24} strokeWidth={isActive('/stream') ? 3 : 2} />
        </Link>

        <Link 
          href="/sos" 
          className={`flex-1 flex flex-col items-center py-3 px-2 rounded-xl transition-all ${isActive('/sos') ? 'bg-rose-50 text-rose-500' : 'text-gray-400 hover:bg-gray-50'}`}
        >
          <Zap size={24} strokeWidth={isActive('/sos') ? 3 : 2} fill={isActive('/sos') ? "currentColor" : "none"} />
        </Link>

        <Link 
          href="/" 
          className={`flex-1 flex flex-col items-center py-3 px-2 rounded-xl transition-all text-gray-400 hover:bg-gray-50`}
          title="Profile coming soon"
        >
          <User size={24} strokeWidth={2} />
        </Link>
      </div>
    </nav>
  );
}
