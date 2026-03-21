"use client";

import { useState, useEffect } from "react";
import { VillageMohalla } from "@/data/hierarchyData";

interface Issue {
  id: string;
  title: string;
  description: string;
  severity: number; // 1-10
  affectedPopulation: number;
  impactScore: number; // AI calculated
}

interface SelectedHierarchy {
  state?: { name: string };
  mandal?: { name: string };
  parliament?: { name: string };
  mla?: { name: string };
  area?: { name: string };
  village?: VillageMohalla;
}

export default function HeatmapPage() {
  const [selected, setSelected] = useState<SelectedHierarchy | null>(null);
  const [issues, setIssues] = useState<Issue[]>([]);
  const [newIssue, setNewIssue] = useState({
    title: "",
    description: "",
    severity: 5,
    affectedPopulation: 0,
  });

  // Load selected hierarchy from localStorage
  useEffect(() => {
    const stored = localStorage.getItem("selectedHierarchy");
    if (stored) {
      try {
        const data = JSON.parse(stored);
        setSelected(data);
        // Load issues if they were previously saved
        const savedIssues = localStorage.getItem("villageIssues");
        if (savedIssues) {
          setIssues(JSON.parse(savedIssues));
        }
      } catch (error) {
        console.error("Failed to load hierarchy:", error);
      }
    }
  }, []);

  // Calculate impact score (AI Formula)
  const calculateImpactScore = (severity: number, population: number): number => {
    // Impact = (Severity * 10) + (Population as % of village) / 2
    const villagePopulation = selected?.village?.population || 100000;
    const affectionRate = (population / villagePopulation) * 100;
    return Math.min(
      100,
      (severity * 10 + affectionRate) / 2
    );
  };

  const handleAddIssue = () => {
    if (!newIssue.title.trim()) {
      alert("Please enter an issue title");
      return;
    }

    const impactScore = calculateImpactScore(
      newIssue.severity,
      newIssue.affectedPopulation
    );

    const issue: Issue = {
      id: Date.now().toString(),
      title: newIssue.title,
      description: newIssue.description,
      severity: newIssue.severity,
      affectedPopulation: newIssue.affectedPopulation,
      impactScore,
    };

    const updatedIssues = [...issues, issue].sort(
      (a, b) => b.impactScore - a.impactScore
    );
    setIssues(updatedIssues);
    localStorage.setItem("villageIssues", JSON.stringify(updatedIssues));

    // Reset form
    setNewIssue({
      title: "",
      description: "",
      severity: 5,
      affectedPopulation: 0,
    });
  };

  const handleDeleteIssue = (id: string) => {
    const updated = issues.filter((issue) => issue.id !== id);
    setIssues(updated);
    localStorage.setItem("villageIssues", JSON.stringify(updated));
  };

  if (!selected?.village) {
    return (
      <div className="p-8 min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
        <div className="max-w-2xl mx-auto p-8 bg-yellow-50 border-2 border-yellow-200 rounded-lg">
          <h2 className="text-2xl font-bold text-yellow-900 mb-2">
            ⚠️ No Location Selected
          </h2>
          <p className="text-yellow-800">
            Please go to the <strong>Profile</strong> page and select a
            village/mohalla first. Then return here to add issues and generate
            insights.
          </p>
        </div>
      </div>
    );
  }

  const breadcrumb = [
    selected.state?.name,
    selected.mandal?.name,
    selected.parliament?.name,
    selected.mla?.name,
    selected.area?.name,
    selected.village?.name,
  ].filter(Boolean);

  return (
    <div className="p-8 bg-gradient-to-br from-slate-50 to-slate-100 min-h-screen">
      <h1 className="text-4xl font-bold text-slate-900 mb-2">Issue Heatmap</h1>
      <p className="text-slate-600 mb-8">
        Analyze and rank voter concerns by AI-calculated impact on your
        political strategy
      </p>

      {/* Breadcrumb */}
      <div className="mb-8 p-4 bg-white rounded-lg border border-slate-200 shadow-sm">
        <p className="text-sm text-slate-600 font-semibold">
          📍 {breadcrumb.join(" → ")}
        </p>
      </div>

      {/* Location Summary */}
      <div className="mb-8 p-6 bg-white rounded-lg shadow-lg border border-slate-200">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">
          {selected.village.name}
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="p-4 bg-blue-50 rounded-lg">
            <p className="text-slate-600 text-sm font-semibold">Population</p>
            <p className="text-xl font-bold text-blue-900">
              {selected.village.population.toLocaleString()}
            </p>
          </div>
          <div className="p-4 bg-green-50 rounded-lg">
            <p className="text-slate-600 text-sm font-semibold">Literacy</p>
            <p className="text-xl font-bold text-green-900">
              {selected.village.literacy}%
            </p>
          </div>
          <div className="p-4 bg-purple-50 rounded-lg">
            <p className="text-slate-600 text-sm font-semibold">Total Issues</p>
            <p className="text-xl font-bold text-purple-900">{issues.length}</p>
          </div>
          <div className="p-4 bg-orange-50 rounded-lg">
            <p className="text-slate-600 text-sm font-semibold">Top Impact</p>
            <p className="text-xl font-bold text-orange-900">
              {issues.length > 0 ? Math.round(issues[0].impactScore) : "—"}
            </p>
          </div>
        </div>
      </div>

      {/* Add New Issue Form */}
      <div className="mb-8 p-8 bg-white rounded-lg shadow-lg">
        <h3 className="text-2xl font-bold text-slate-900 mb-6">Add New Issue</h3>
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">
              Issue Title
            </label>
            <input
              type="text"
              placeholder="e.g., Water Supply, Road Quality, Employment"
              value={newIssue.title}
              onChange={(e) =>
                setNewIssue({ ...newIssue, title: e.target.value })
              }
              className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">
              Description
            </label>
            <textarea
              placeholder="Detailed explanation of the issue"
              value={newIssue.description}
              onChange={(e) =>
                setNewIssue({ ...newIssue, description: e.target.value })
              }
              className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              rows={3}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Severity Level (1-10)
              </label>
              <div className="flex items-center gap-4">
                <input
                  type="range"
                  min="1"
                  max="10"
                  value={newIssue.severity}
                  onChange={(e) =>
                    setNewIssue({
                      ...newIssue,
                      severity: parseInt(e.target.value),
                    })
                  }
                  className="flex-1 h-2 bg-slate-200 rounded-lg appearance-none"
                />
                <span className="text-2xl font-bold text-blue-600 w-12 text-right">
                  {newIssue.severity}
                </span>
              </div>
              <p className="text-xs text-slate-600 mt-2">
                1 = Minor • 10 = Critical
              </p>
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Population Affected
              </label>
              <input
                type="number"
                min="0"
                placeholder={`0 - ${selected.village.population}`}
                value={newIssue.affectedPopulation}
                onChange={(e) =>
                  setNewIssue({
                    ...newIssue,
                    affectedPopulation: parseInt(e.target.value) || 0,
                  })
                }
                className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              />
              <p className="text-xs text-slate-600 mt-2">
                {newIssue.affectedPopulation > 0 &&
                  `${(
                    (newIssue.affectedPopulation / selected.village.population) *
                    100
                  ).toFixed(1)}% of population`}
              </p>
            </div>
          </div>

          <button
            onClick={handleAddIssue}
            className="w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg transition"
          >
            + Add Issue & Auto-Rank
          </button>
        </div>
      </div>

      {/* Issues List Ranked by Impact */}
      <div className="p-8 bg-white rounded-lg shadow-lg">
        <h3 className="text-2xl font-bold text-slate-900 mb-6">
          Issues Ranked by AI Impact Score
        </h3>

        {issues.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-slate-600 text-lg">
              No issues added yet. Add one above to get started!
            </p>
          </div>
        ) : (
          <div className="space-y-4">
            {issues.map((issue, index) => {
              const impactPercentage = (issue.impactScore / 100) * 100;
              return (
                <div
                  key={issue.id}
                  className="p-6 border-2 border-slate-200 rounded-lg hover:border-blue-500 transition"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-3xl font-bold text-blue-600">
                          #{index + 1}
                        </span>
                        <h4 className="text-xl font-bold text-slate-900">
                          {issue.title}
                        </h4>
                      </div>
                      <p className="text-slate-700 mb-4">
                        {issue.description}
                      </p>
                    </div>
                    <button
                      onClick={() => handleDeleteIssue(issue.id)}
                      className="px-4 py-2 bg-red-100 hover:bg-red-200 text-red-700 rounded-lg transition font-semibold"
                    >
                      Delete
                    </button>
                  </div>

                  <div className="grid grid-cols-3 gap-4 mb-4">
                    <div>
                      <p className="text-sm text-slate-600 font-semibold">
                        Severity
                      </p>
                      <p className="text-2xl font-bold text-red-600">
                        {issue.severity}/10
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-slate-600 font-semibold">
                        Affected
                      </p>
                      <p className="text-2xl font-bold text-orange-600">
                        {selected.village
                          ? Math.round(
                              (issue.affectedPopulation /
                                selected.village.population) *
                                100
                            )
                          : 0}
                        %
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-slate-600 font-semibold">
                        Impact Score
                      </p>
                      <p className="text-2xl font-bold text-green-600">
                        {Math.round(issue.impactScore)}
                      </p>
                    </div>
                  </div>

                  {/* Impact Bar */}
                  <div className="w-full bg-slate-200 rounded-full h-3 overflow-hidden">
                    <div
                      className="bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 h-full rounded-full transition-all duration-300"
                      style={{ width: `${impactPercentage}%` }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* AI Insights */}
      {issues.length > 0 && (
        <div className="mt-8 p-8 bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg shadow-lg border-2 border-purple-200">
          <h3 className="text-2xl font-bold text-purple-900 mb-4">
            🤖 AI Strategic Insights
          </h3>
          <ul className="space-y-3">
            <li className="flex items-start">
              <span className="text-lg mr-3">💡</span>
              <span className="text-slate-800">
                <strong>Top Priority:</strong> {issues[0].title} affects{" "}
                {Math.round(
                  (issues[0].affectedPopulation /
                    selected.village.population) *
                    100
                )}
                % of voters with severity {issues[0].severity}/10
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-lg mr-3">📊</span>
              <span className="text-slate-800">
                <strong>Total Impact:</strong> {issues.length} issues identified,
                affecting average{" "}
                {Math.round(
                  (issues.reduce((sum, i) => sum + i.affectedPopulation, 0) /
                    selected.village.population /
                    issues.length) *
                    100
                )}
                % of population per issue
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-lg mr-3">🎯</span>
              <span className="text-slate-800">
                <strong>Strategic Focus:</strong> Campaign strategy should
                prioritize the top 3 issues to maximize voter impact and
                address core concerns
              </span>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
