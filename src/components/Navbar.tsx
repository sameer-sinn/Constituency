"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-gray-200 bg-white shadow-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo / Brand */}
          <Link href="/" className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-blue-600 to-purple-600">
              <span className="text-lg font-bold text-white">CID</span>
            </div>
            <span className="hidden text-xl font-bold text-gray-900 md:inline">
              Constituency Intelligence
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden gap-8 md:flex">
            <Link
              href="/"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Home
            </Link>
            <Link
              href="/dashboard"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Dashboard
            </Link>
            <Link
              href="#features"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Features
            </Link>
          </div>

          {/* CTA Button */}
          <Link
            href="/dashboard"
            className="hidden items-center gap-2 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-2 font-medium text-white hover:shadow-lg transition-shadow md:flex"
          >
            Launch Dashboard
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="border-t border-gray-200 pb-4 md:hidden">
            <Link
              href="/"
              className="block px-4 py-2 text-gray-600 hover:text-gray-900"
            >
              Home
            </Link>
            <Link
              href="/dashboard"
              className="block px-4 py-2 text-gray-600 hover:text-gray-900"
            >
              Dashboard
            </Link>
            <Link
              href="#features"
              className="block px-4 py-2 text-gray-600 hover:text-gray-900"
            >
              Features
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
