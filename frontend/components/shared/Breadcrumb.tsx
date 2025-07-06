// components/Breadcrumb.tsx
'use client';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

export default function Breadcrumb() {
  const pathname = usePathname();
  const segments = pathname.split('/').filter(Boolean);

  return (
    <nav className="text-sm text-gray-600 my-4">
      <ol className="flex items-center space-x-2">
        <li>
          <Link href="/" className="hover:underline">Home</Link>
        </li>
        {segments.map((segment, index) => {
          const path = '/' + segments.slice(0, index + 1).join('/');
          const label = segment.charAt(0).toUpperCase() + segment.slice(1);
          const isLast = index === segments.length - 1;

          return (
            <li key={path} className="flex items-center space-x-2">
              <span>/</span>
              {isLast ? (
                <span className="text-gray-800">{label}</span>
              ) : (
                <Link href={path} className="hover:underline">{label}</Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
