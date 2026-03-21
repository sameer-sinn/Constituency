"use client";

import { useState } from "react";

export default function OpponentPage() {
  const [showComparison, setShowComparison] = useState(false);

  const opponentData = {
    name: "Rajesh Kumar",
    party: "Opposition Party",
    lastVoteShare: 38,
    strengths: [
      "Strong base in rural areas",
      "Long-term constituency presence",
      "Business community support",
    ],
    weaknesses: [
      "Limited youth connect",
      "Healthcare sector criticism",
      "Rural infrastructure neglect",
    ],
  };

  const comparisonData = [
    {
      category: "Youth Engagement",
      ourScore: 8.5,
      oppScore: 4.2,
      recommendation: "Leverage youth focus. Opponent weak here.",
    },
    {
      category: "Healthcare Plan",
      ourScore: 8.8,
      oppScore: 3.5,
      recommendation: "Aggressive healthcare messaging. Key differentiator.",
    },
    {
      category: "Employment Focus",
      ourScore: 9.2,
      oppScore: 5.1,
      recommendation: "Our strongest area. Push hard on job creation plans.",
    },
    {
      category: "Rural Infrastructure",
      ourScore: 7.1,
      oppScore: 8.9,
      recommendation: "Opponent's strength. Don't compete, differentiate.",
    },
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="space-y-2">
        <h1 className="text-3xl font-bold text-gray-900">Opponent Analysis</h1>
        <p className="text-lg text-gray-600">
          Compare your strategy vs opponent's to find weaknesses and exploit opportunities
        </p>
      </div>

      {/* Opponent Info Input */}
      {!showComparison ? (
        <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
          <h2 className="mb-4 text-xl font-semibold text-gray-900">Add Opponent Data</h2>

          <div className="space-y-4 mb-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Opponent Name *
              </label>
              <input
                type="text"
                placeholder="e.g., Rajesh Kumar"
                className="w-full rounded-lg border border-gray-300 px-4 py-2 text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Party Name
                </label>
                <input
                  type="text"
                  placeholder="e.g., Opposition Party"
                  className="w-full rounded-lg border border-gray-300 px-4 py-2 text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Last Election Vote Share (%)
                </label>
                <input
                  type="number"
                  placeholder="e.g., 38"
                  className="w-full rounded-lg border border-gray-300 px-4 py-2 text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Key Strengths (one per line)
              </label>
              <textarea
                placeholder="Strong rural base&#10;Long constituency presence&#10;Business community support"
                className="w-full rounded-lg border border-gray-300 px-4 py-2 text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                rows={3}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Key Weaknesses (one per line)
              </label>
              <textarea
                placeholder="Limited youth connect&#10;Healthcare criticism&#10;Infrastructure neglect"
                className="w-full rounded-lg border border-gray-300 px-4 py-2 text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                rows={3}
              />
            </div>
          </div>

          <button
            onClick={() => setShowComparison(true)}
            className="rounded-lg bg-blue-600 px-6 py-2 font-medium text-white hover:bg-blue-700 transition-colors"
          >
            Analyze Opponent
          </button>
        </div>
      ) : (
        <>
          {/* Opponent Profile */}
          <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
            <h2 className="mb-4 text-xl font-semibold text-gray-900">
              {opponentData.name} - {opponentData.party}
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Strengths</h3>
                <ul className="space-y-2">
                  {opponentData.strengths.map((strength, idx) => (
                    <li
                      key={idx}
                      className="flex gap-2 text-gray-700"
                    >
                      <span className="text-green-600 font-bold">✓</span>
                      <span>{strength}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Weaknesses</h3>
                <ul className="space-y-2">
                  {opponentData.weaknesses.map((weakness, idx) => (
                    <li
                      key={idx}
                      className="flex gap-2 text-gray-700"
                    >
                      <span className="text-red-600 font-bold">✗</span>
                      <span>{weakness}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-4 p-4 bg-blue-50 border border-blue-200 rounded-lg">
              <p className="text-sm text-blue-900">
                Last election vote share: <span className="font-bold">{opponentData.lastVoteShare}%</span>
              </p>
            </div>
          </div>

          {/* Comparative Analysis */}
          <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
            <h2 className="mb-6 text-xl font-semibold text-gray-900">
              🎯 Comparative Strategy Analysis
            </h2>

            <div className="space-y-6">
              {comparisonData.map((item, idx) => (
                <div key={idx} className="border-b border-gray-200 pb-4 last:border-b-0">
                  <div className="flex justify-between items-center mb-3">
                    <h3 className="font-semibold text-gray-900">{item.category}</h3>
                    <span className={item.ourScore > item.oppScore ? "text-green-600 font-bold" : "text-gray-600"}>
                      📊 Our Advantage
                    </span>
                  </div>

                  <div className="space-y-2">
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-gray-700">We: {item.ourScore.toFixed(1)}/10</span>
                        <span className="text-gray-700">Them: {item.oppScore.toFixed(1)}/10</span>
                      </div>
                      <div className="flex gap-2">
                        <div className="flex-1 bg-gray-200 rounded-full h-2 overflow-hidden">
                          <div
                            className="bg-blue-600 h-full"
                            style={{ width: `${(item.ourScore / 10) * 100}%` }}
                          ></div>
                        </div>
                        <div className="flex-1 bg-gray-200 rounded-full h-2 overflow-hidden">
                          <div
                            className="bg-gray-500 h-full"
                            style={{ width: `${(item.oppScore / 10) * 100}%` }}
                          ></div>
                        </div>
                      </div>
                    </div>

                    <div className={`p-3 rounded-lg ${
                      item.ourScore > item.oppScore
                        ? "bg-green-50 border border-green-200"
                        : "bg-orange-50 border border-orange-200"
                    }`}>
                      <p className={item.ourScore > item.oppScore ? "text-green-900" : "text-orange-900"}>
                        💡 <span className="font-semibold">{item.recommendation}</span>
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Strategic Opportunities */}
          <div className="rounded-lg bg-purple-50 border border-purple-200 p-6">
            <h3 className="mb-4 font-semibold text-purple-900">⚔️ Strategic Opportunities</h3>
            <ol className="space-y-3 text-purple-900 text-sm">
              <li className="flex gap-3">
                <span className="font-bold flex-shrink-0">1.</span>
                <span><strong>Youth Campaign:</strong> Opponent weak here (4.2/10). Launch aggressive youth employment initiative.</span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold flex-shrink-0">2.</span>
                <span><strong>Healthcare Messaging:</strong> Massive gap (8.8 vs 3.5). Make healthcare your core campaign pillar.</span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold flex-shrink-0">3.</span>
                <span><strong>Differentiate on Rural:</strong> Opponent leads here. Focus your messaging on urban youth instead.</span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold flex-shrink-0">4.</span>
                <span><strong>Target Vote Share:</strong> With 38% vs our strategy focus, targeting 52%+ is achievable.</span>
              </li>
            </ol>
          </div>

          <button
            onClick={() => setShowComparison(false)}
            className="rounded-lg border border-gray-300 px-6 py-2 font-medium text-gray-700 hover:bg-gray-50 transition-colors"
          >
            ↻ Analyze Different Opponent
          </button>
        </>
      )}
    </div>
  );
}
