'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Building2 } from 'lucide-react';

export function MainNav() {
  const pathname = usePathname();

  const routes = [
    {
      href: '/dashboard',
      label: 'Dashboard',
    },
    {
      href: '/properties',
      label: 'Properties',
    },
    {
      href: '/applications',
      label: 'Applications',
    },
    {
      href: '/visits',
      label: 'Visits',
    },
  ];

  return (
    <div className="flex items-center space-x-6">
      <Link href="/dashboard" className="flex items-center space-x-2">
        <Building2 className="h-6 w-6" />
        <span className="font-bold">PropTech</span>
      </Link>
      <nav className="flex items-center space-x-6">
        {routes.map((route) => (
          <Link
            key={route.href}
            href={route.href}
            className={cn(
              'text-sm font-medium transition-colors hover:text-primary',
              pathname === route.href
                ? 'text-primary'
                : 'text-muted-foreground'
            )}
          >
            {route.label}
          </Link>
        ))}
      </nav>
    </div>
  );
}