"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const menuItems = [
  {
    label: "Overview",
    href: "/dashboard",
    icon: "📊",
  },
  {
    label: "Constituency Profile",
    href: "/dashboard/profile",
    icon: "📍",
  },
  {
    label: "Issue Heatmap",
    href: "/dashboard/heatmap",
    icon: "🔥",
  },
  {
    label: "Strategy Advisor",
    href: "/dashboard/strategy",
    icon: "🧠",
  },
  {
    label: "Report Generator",
    href: "/dashboard/report",
    icon: "📝",
  },
  {
    label: "Opponent Analysis",
    href: "/dashboard/opponent",
    icon: "⚔️",
  },
];

export default function Sidebar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(true);

  return (
    <aside
      className={`transition-all duration-300 bg-gray-900 text-white flex flex-col ${
        isOpen ? "w-64" : "w-20"
      }`}
    >
      {/* Sidebar Header */}
      <div className="flex h-16 items-center justify-between border-b border-gray-800 px-4">
        {isOpen && <h2 className="font-bold text-lg">Dashboard</h2>}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="rounded hover:bg-gray-800 p-2"
        >
          <svg
            className="h-5 w-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
      </div>

      {/* Navigation Items */}
      <nav className="flex-1 space-y-2 p-4">
        {menuItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 rounded-lg px-4 py-3 transition-colors ${
                isActive
                  ? "bg-blue-600 text-white"
                  : "text-gray-300 hover:bg-gray-800"
              }`}
              title={!isOpen ? item.label : undefined}
            >
              <span className="text-xl">{item.icon}</span>
              {isOpen && <span className="font-medium">{item.label}</span>}
            </Link>
          );
        })}
      </nav>

      {/* Footer */}
      <div className="border-t border-gray-800 p-4">
        {isOpen && (
          <button className="w-full rounded-lg bg-gray-800 px-4 py-2 text-sm font-medium hover:bg-gray-700 transition-colors">
            Sign Out
          </button>
        )}
      </div>
    </aside>
  );
}
