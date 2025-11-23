'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5">
          <div className="w-10 h-10 bg-[#A5F36B] flex items-center justify-center shadow-sm">
            <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z"/>
            </svg>
          </div>
          <span className="text-2xl font-bold text-black tracking-tight">boostim</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <Link href="/#services" className="text-black hover:text-gray-700 transition-colors text-sm font-medium flex items-center gap-1.5">
            Service
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </Link>
          <Link href="/about" className="text-black hover:text-gray-700 transition-colors text-sm font-medium flex items-center gap-1.5">
            Agency
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </Link>
          <Link href="/works" className="text-black hover:text-gray-700 transition-colors text-sm font-medium flex items-center gap-1.5">
            Case study
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </Link>
          <Link href="/#blog" className="text-black hover:text-gray-700 transition-colors text-sm font-medium flex items-center gap-1.5">
            Resources
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </Link>
          <Link href="/contact" className="text-black hover:text-gray-700 transition-colors text-sm font-medium">
            Contact
          </Link>
        </nav>

        {/* CTA & Icons */}
        <div className="hidden md:flex items-center gap-3">
          <button className="px-5 py-2.5 bg-white hover:bg-gray-50 rounded-lg text-sm font-medium transition-colors border border-black/20 shadow-sm">
            Get started
          </button>
          <button className="w-10 h-10 rounded-full bg-black flex items-center justify-center hover:bg-gray-800 transition-colors">
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden w-10 h-10 flex items-center justify-center"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 py-4 space-y-4">
          <Link href="/#services" className="block text-gray-700 hover:text-black transition-colors">Services</Link>
          <Link href="/about" className="block text-gray-700 hover:text-black transition-colors">Agency</Link>
          <Link href="/works" className="block text-gray-700 hover:text-black transition-colors">Case Study</Link>
          <Link href="/#blog" className="block text-gray-700 hover:text-black transition-colors">Resources</Link>
          <Link href="/contact" className="block text-gray-700 hover:text-black transition-colors">Contact</Link>
          <button className="w-full px-5 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg text-sm font-medium transition-colors">
            Get Started
          </button>
        </div>
      )}
    </header>
  );
}

