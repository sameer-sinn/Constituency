"use client";

import { useState } from "react";

export default function ReportPage() {
  const [reportGenerated, setReportGenerated] = useState(false);

  const handleGenerateReport = () => {
    setReportGenerated(true);
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="space-y-2">
        <h1 className="text-3xl font-bold text-gray-900">Report Generator</h1>
        <p className="text-lg text-gray-600">
          Generate professional AI-powered reports for party leadership
        </p>
      </div>

      {!reportGenerated ? (
        <>
          {/* Options */}
          <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
            <h2 className="mb-4 text-xl font-semibold text-gray-900">Generate Report</h2>

            <div className="space-y-4 mb-6">
              <label className="flex items-center gap-3">
                <input
                  type="radio"
                  name="reportType"
                  value="executive"
                  defaultChecked
                  className="w-4 h-4"
                />
                <div>
                  <p className="font-medium text-gray-900">Executive Summary</p>
                  <p className="text-sm text-gray-600">Quick 2-page report for decision makers</p>
                </div>
              </label>

              <label className="flex items-center gap-3">
                <input
                  type="radio"
                  name="reportType"
                  value="detailed"
                  className="w-4 h-4"
                />
                <div>
                  <p className="font-medium text-gray-900">Detailed Analysis</p>
                  <p className="text-sm text-gray-600">Comprehensive report with all data & insights</p>
                </div>
              </label>

              <label className="flex items-center gap-3">
                <input
                  type="radio"
                  name="reportType"
                  value="actionPlan"
                  className="w-4 h-4"
                />
                <div>
                  <p className="font-medium text-gray-900">Action Plan</p>
                  <p className="text-sm text-gray-600">Campaign implementation roadmap</p>
                </div>
              </label>
            </div>

            <div className="flex gap-3">
              <button
                onClick={handleGenerateReport}
                className="rounded-lg bg-blue-600 px-6 py-2 font-medium text-white hover:bg-blue-700 transition-colors"
              >
                Generate Report
              </button>
              <button className="rounded-lg border border-gray-300 px-6 py-2 font-medium text-gray-700 hover:bg-gray-50 transition-colors">
                Download Template
              </button>
            </div>
          </div>

          {/* Info */}
          <div className="rounded-lg bg-blue-50 border border-blue-200 p-6">
            <h3 className="mb-3 font-semibold text-blue-900">📋 What's Included</h3>
            <ul className="space-y-2 text-blue-800 text-sm">
              <li>✓ Executive summary of constituency profile</li>
              <li>✓ Top voter concerns ranked by impact</li>
              <li>✓ Strategic recommendations by priority</li>
              <li>✓ Demographic targeting strategy</li>
              <li>✓ Competitive analysis (upcoming)</li>
              <li>✓ Implementation timeline & metrics</li>
            </ul>
          </div>
        </>
      ) : (
        <>
          {/* Report Preview */}
          <div className="rounded-lg border border-gray-300 bg-white shadow-lg overflow-hidden">
            {/* Report Header */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8">
              <h2 className="text-3xl font-bold mb-2">Campaign Strategy Report</h2>
              <p className="text-blue-100">Urban District - 42</p>
              <p className="text-blue-100 text-sm">Generated: March 21, 2026</p>
            </div>

            {/* Report Content */}
            <div className="p-8 space-y-8">
              {/* Executive Summary */}
              <section>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Executive Summary</h3>
                <p className="text-gray-700 leading-relaxed">
                  Urban District-42 presents a strong opportunity for electoral success. With a population of 2M, the
                  constituency is majority urban (75%) with high education levels. Voter sentiment analysis reveals 3
                  critical issue areas: unemployment, healthcare infrastructure, and education quality.
                </p>
              </section>

              {/* Key Findings */}
              <section>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Key Findings</h3>
                <div className="space-y-4">
                  <div className="border-l-4 border-blue-600 pl-4">
                    <p className="font-semibold text-gray-900">450K voters affected by unemployment</p>
                    <p className="text-gray-600 text-sm">Highest priority issue - youth focused programs recommended</p>
                  </div>
                  <div className="border-l-4 border-blue-600 pl-4">
                    <p className="font-semibold text-gray-900">38% population is youth (18-35)</p>
                    <p className="text-gray-600 text-sm">Natural constituency for development & employment focused messaging</p>
                  </div>
                  <div className="border-l-4 border-blue-600 pl-4">
                    <p className="font-semibold text-gray-900">Healthcare scores lowest in rural areas</p>
                    <p className="text-gray-600 text-sm">Opportunity to build support through infrastructure development promises</p>
                  </div>
                </div>
              </section>

              {/* Recommendations */}
              <section>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Strategic Recommendations</h3>
                <ol className="space-y-3 text-gray-700">
                  <li className="flex gap-3">
                    <span className="font-bold text-blue-600 flex-shrink-0">1.</span>
                    <span>Launch youth employment initiative targeting 450K affected voters</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-bold text-blue-600 flex-shrink-0">2.</span>
                    <span>Focus healthcare expansion in rural pockets - visible impact campaign</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-bold text-blue-600 flex-shrink-0">3.</span>
                    <span>Allocate 60% campaign resources to youth & women demographics</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-bold text-blue-600 flex-shrink-0">4.</span>
                    <span>Create issue-specific task forces for top 3 voter priorities</span>
                  </li>
                </ol>
              </section>
            </div>

            {/* Footer */}
            <div className="border-t border-gray-200 bg-gray-50 p-8 text-center text-sm text-gray-600">
              <p>Constituency Intelligence Dashboard | Confidential Report</p>
              <p>For official use by party leadership only</p>
            </div>
          </div>

          {/* Actions */}
          <div className="flex gap-3 justify-center">
            <button className="rounded-lg bg-blue-600 px-6 py-2 font-medium text-white hover:bg-blue-700 transition-colors">
              📥 Download as PDF
            </button>
            <button
              onClick={() => setReportGenerated(false)}
              className="rounded-lg border border-gray-300 px-6 py-2 font-medium text-gray-700 hover:bg-gray-50 transition-colors"
            >
              ↻ Generate Another
            </button>
          </div>
        </>
      )}
    </div>
  );
}
