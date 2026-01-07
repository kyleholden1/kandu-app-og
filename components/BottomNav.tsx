'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { AlertCircle, Wind, Lightbulb } from 'lucide-react';

export default function BottomNav() {
  const pathname = usePathname();

  const navItems = [
    { href: '/sos', label: 'SOS', icon: AlertCircle, color: 'sos' },
    { href: '/restore', label: 'Restore', icon: Wind, color: 'teal' },
    { href: '/learn', label: 'Learn', icon: Lightbulb, color: 'blue' },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 max-w-md mx-auto bg-white border-t border-gray-200 flex">
      {navItems.map(({ href, label, icon: Icon, color }) => {
        const isActive = pathname === href;
        const colors: Record<string, { active: string; inactive: string }> = {
          sos: { active: 'text-sos-600', inactive: 'text-gray-400' },
          teal: { active: 'text-teal-600', inactive: 'text-gray-400' },
          blue: { active: 'text-blue-600', inactive: 'text-gray-400' },
        };
        return (
          <Link
            key={href}
            href={href}
            className={`flex-1 py-3 px-2 flex flex-col items-center gap-1 transition ${
              isActive ? colors[color].active : colors[color].inactive
            }`}
          >
            <Icon size={24} />
            <span className="text-xs font-semibold">{label}</span>
          </Link>
        );
      })}
    </nav>
  );
}
