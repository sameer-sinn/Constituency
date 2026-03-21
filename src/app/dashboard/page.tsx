"use client";

import Link from "next/link";

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="space-y-2">
        <h1 className="text-3xl font-bold text-gray-900">
          Constituency Intelligence Dashboard
        </h1>
        <p className="text-lg text-gray-600">
          AI-powered strategic insights for political campaigns
        </p>
      </div>

      {/* Welcome Card */}
      <div className="rounded-lg border-2 border-dashed border-blue-300 bg-blue-50 p-6">
        <h2 className="mb-4 text-xl font-semibold text-blue-900">
          👋 Get Started
        </h2>
        <p className="mb-4 text-blue-800">
          Start by creating a constituency profile to unlock AI-powered insights
          for your campaign.
        </p>
        <Link
          href="/dashboard/profile"
          className="inline-block rounded-lg bg-blue-600 px-6 py-2 font-medium text-white hover:bg-blue-700 transition-colors"
        >
          Create Profile
        </Link>
      </div>

      {/* Features Overview */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {/* Constituency Profile */}
        <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
          <div className="mb-4 text-4xl">📍</div>
          <h3 className="mb-2 text-xl font-semibold text-gray-900">
            Constituency Profile
          </h3>
          <p className="mb-4 text-gray-600">
            Input demographics, population data, and key area information
          </p>
          <Link
            href="/dashboard/profile"
            className="text-blue-600 hover:text-blue-700 font-medium"
          >
            Go to Profile →
          </Link>
        </div>

        {/* Issue Heatmap */}
        <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
          <div className="mb-4 text-4xl">🔥</div>
          <h3 className="mb-2 text-xl font-semibold text-gray-900">
            Issue Heatmap
          </h3>
          <p className="mb-4 text-gray-600">
            Enter problems & let AI rank them by voter impact
          </p>
          <Link
            href="/dashboard/heatmap"
            className="text-blue-600 hover:text-blue-700 font-medium"
          >
            Analyze Issues →
          </Link>
        </div>

        {/* Strategy Advisor */}
        <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
          <div className="mb-4 text-4xl">🧠</div>
          <h3 className="mb-2 text-xl font-semibold text-gray-900">
            Strategy Advisor
          </h3>
          <p className="mb-4 text-gray-600">
            Get AI suggestions for campaign focus areas
          </p>
          <Link
            href="/dashboard/strategy"
            className="text-blue-600 hover:text-blue-700 font-medium"
          >
            View Strategy →
          </Link>
        </div>

        {/* Report Generator */}
        <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
          <div className="mb-4 text-4xl">📝</div>
          <h3 className="mb-2 text-xl font-semibold text-gray-900">
            Report Generator
          </h3>
          <p className="mb-4 text-gray-600">
            One-click AI summary reports for party leaders
          </p>
          <Link
            href="/dashboard/report"
            className="text-blue-600 hover:text-blue-700 font-medium"
          >
            Generate Report →
          </Link>
        </div>

        {/* Opponent Finder */}
        <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
          <div className="mb-4 text-4xl">⚔️</div>
          <h3 className="mb-2 text-xl font-semibold text-gray-900">
            Opponent Weakness Finder
          </h3>
          <p className="mb-4 text-gray-600">
            Compare vs opponent data to find gaps to exploit
          </p>
          <Link
            href="/dashboard/opponent"
            className="text-blue-600 hover:text-blue-700 font-medium"
          >
            Compare Data →
          </Link>
        </div>

        {/* Quick Stats */}
        <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
          <div className="mb-4 text-4xl">📊</div>
          <h3 className="mb-2 text-xl font-semibold text-gray-900">
            Quick Stats
          </h3>
          <div className="space-y-2 text-sm text-gray-600">
            <p>• Constituencies Analyzed: 0</p>
            <p>• Active Campaigns: 0</p>
            <p>• Last Report: —</p>
          </div>
        </div>
      </div>

      {/* Info Section */}
      <div className="rounded-lg border border-gray-200 bg-gray-50 p-6">
        <h3 className="mb-4 text-lg font-semibold text-gray-900">
          How It Works
        </h3>
        <ol className="space-y-3 text-gray-700">
          <li className="flex gap-3">
            <span className="font-bold text-blue-600">1.</span>
            <span>Create or select a constituency profile</span>
          </li>
          <li className="flex gap-3">
            <span className="font-bold text-blue-600">2.</span>
            <span>Input local issues and voter concerns</span>
          </li>
          <li className="flex gap-3">
            <span className="font-bold text-blue-600">3.</span>
            <span>AI analyzes data and ranks issues by voter impact</span>
          </li>
          <li className="flex gap-3">
            <span className="font-bold text-blue-600">4.</span>
            <span>Get strategic recommendations based on insights</span>
          </li>
          <li className="flex gap-3">
            <span className="font-bold text-blue-600">5.</span>
            <span>Generate professional reports for stakeholders</span>
          </li>
        </ol>
      </div>
    </div>
  );
}
