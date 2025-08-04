// components/PageShell.jsx

import { usePathname } from 'next/navigation';
import { useTheme } from '@/context/ThemeContext';
import { useEffect } from 'react';

export default function PageShell({ children }) {
  const pathname = usePathname();
  const theme = 'light';

  useEffect(() => {
    console.log(`[PageShell] Path: ${pathname} → Theme: ${theme}`);
  }, [pathname, theme]);

  return (
    <div className={`min-h-screen font-sans ${theme === 'light' ? 'bg-white text-gray-900' : 'bg-black text-white'}`}>
      {children}
    </div>
  );
}
