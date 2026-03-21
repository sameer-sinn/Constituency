"use client";

export default function StrategyPage() {
  const mockStrategies = [
    {
      id: 1,
      focus: "Youth Employment Programs",
      rationale: "Unemployment is the #1 voter concern affecting 450K voters. Youth (18-35) form 38% of population.",
      demographics: ["Youth 18-35", "First-time voters"],
      priority: "high",
      reach: 420000,
    },
    {
      id: 2,
      focus: "Healthcare Infrastructure Expansion",
      rationale: "Healthcare ranked #2 issue. Rural areas have minimal clinic infrastructure.",
      demographics: ["Rural residents", "Women voters", "Elderly"],
      priority: "high",
      reach: 280000,
    },
    {
      id: 3,
      focus: "Education Quality Improvement",
      rationale: "Education is critical to families. Focus on government school modernization.",
      demographics: ["Families with children", "Women", "Middle-class"],
      priority: "medium",
      reach: 250000,
    },
    {
      id: 4,
      focus: "Public Transport Initiative",
      rationale: "Commute issues affect daily workers. Metro/bus expansion would address 4th ranked issue.",
      demographics: ["Daily commuters", "Working professionals"],
      priority: "medium",
      reach: 180000,
    },
  ];

  const priorityColor = {
    high: "bg-red-100 text-red-700 border-red-300",
    medium: "bg-yellow-100 text-yellow-700 border-yellow-300",
    low: "bg-green-100 text-green-700 border-green-300",
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="space-y-2">
        <h1 className="text-3xl font-bold text-gray-900">Strategy Advisor</h1>
        <p className="text-lg text-gray-600">
          AI-powered strategic recommendations based on your constituency data
        </p>
      </div>

      {/* Overview Card */}
      <div className="rounded-lg bg-blue-50 border border-blue-200 p-6">
        <h2 className="mb-2 text-lg font-semibold text-blue-900">📊 Analysis Summary</h2>
        <p className="text-blue-800">
          Based on your constituency profile and issue analysis, here are the recommended strategic focus areas for maximum voter impact.
        </p>
      </div>

      {/* Strategy Cards */}
      <div className="space-y-4">
        {mockStrategies.map((strategy) => (
          <div
            key={strategy.id}
            className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="flex items-start justify-between mb-4">
              <h3 className="text-xl font-bold text-gray-900">{strategy.focus}</h3>
              <span
                className={`px-3 py-1 rounded-full text-sm font-medium border ${
                  priorityColor[strategy.priority as keyof typeof priorityColor]
                }`}
              >
                {strategy.priority.toUpperCase()} PRIORITY
              </span>
            </div>

            <p className="text-gray-700 mb-4">{strategy.rationale}</p>

            <div className="space-y-3">
              <div>
                <label className="text-sm font-medium text-gray-600">Target Demographics:</label>
                <div className="flex flex-wrap gap-2 mt-2">
                  {strategy.demographics.map((demo, idx) => (
                    <span
                      key={idx}
                      className="inline-block bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                    >
                      {demo}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <label className="text-sm font-medium text-gray-600">Estimated Reach:</label>
                  <span className="text-sm font-bold text-blue-600">
                    {(strategy.reach / 1000).toFixed(0)}K voters
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                  <div
                    className="bg-blue-600 h-full"
                    style={{ width: `${(strategy.reach / 450000) * 100}%` }}
                  ></div>
                </div>
              </div>
            </div>

            <button className="mt-4 w-full rounded-lg border border-blue-300 bg-blue-50 px-4 py-2 font-medium text-blue-600 hover:bg-blue-100 transition-colors">
              Expand Strategy Details
            </button>
          </div>
        ))}
      </div>

      {/* Key Insights */}
      <div className="rounded-lg bg-green-50 border border-green-200 p-6">
        <h3 className="mb-4 font-semibold text-green-900">💡 Key Campaign Insights</h3>
        <ul className="space-y-2 text-green-800 text-sm">
          <li>✓ Consolidate votes: Focus on unemployment & healthcare (cover 730K voters)</li>
          <li>✓ Youth outreach: 38% of population is youth - maximum campaign ROI potential</li>
          <li>✓ Geographic focus: Rural areas are underserved in healthcare - opportunity area</li>
          <li>✓ Coalition potential: Women voters span all top issues - natural support base</li>
        </ul>
      </div>
    </div>
  );
}
