// components/Navbar.jsx

import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-white border-b border-gray-200 py-4 px-6 flex justify-between items-center">
      <Link href="/" className="text-2xl font-serif font-bold tracking-wide">
        Flourish
      </Link>
      <div className="space-x-4 text-sm font-medium text-gray-700">
        <Link href="/about" className="hover:text-theme-accent transition">About</Link>
        <Link href="/services" className="hover:text-theme-accent transition">Services</Link>
        <Link href="/contact" className="hover:text-theme-accent transition">Contact</Link>
      </div>
    </nav>
  );
}
