"use client";

import { useState } from "react";
import {
  INDIA,
  getAllStates,
  State,
  MandalZone,
  ParliamentCity,
  MLAConstituency,
  AreaTown,
  VillageMohalla,
} from "@/data/hierarchyData";

interface SelectedHierarchy {
  state?: State;
  mandal?: MandalZone;
  parliament?: ParliamentCity;
  mla?: MLAConstituency;
  area?: AreaTown;
  village?: VillageMohalla;
}

export default function ProfilePage() {
  const [step, setStep] = useState(1);
  const [selected, setSelected] = useState<SelectedHierarchy>({});
  const [editMode, setEditMode] = useState(false);

  const breadcrumb = [
    INDIA.name,
    selected.state?.name,
    selected.mandal?.name,
    selected.parliament?.name,
    selected.mla?.name,
    selected.area?.name,
    selected.village?.name,
  ].filter(Boolean);

  const handleSave = () => {
    const dataToSave = {
      ...selected,
      timestamp: new Date().toISOString(),
    };
    localStorage.setItem("selectedHierarchy", JSON.stringify(dataToSave));
    setEditMode(false);
    alert("Data saved successfully!");
  };

  // ============== STEP 1: COUNTRY ==============
  if (step === 1) {
    return (
      <div className="p-8 bg-gradient-to-br from-slate-50 to-slate-100 min-h-screen">
        <h1 className="text-4xl font-bold text-slate-900 mb-2">Constituency Profile</h1>
        <p className="text-slate-600 mb-8">Select your location to view and edit constituency data</p>

        <div className="p-8 bg-white rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-slate-800 mb-6">Select Country</h2>
          <button
            onClick={() => setStep(2)}
            className="w-full p-8 bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white font-bold rounded-lg text-lg transition"
          >
            <div className="flex items-center justify-between">
              <div className="text-left">
                <p className="text-2xl font-bold">{INDIA.name}</p>
                <p className="text-sm text-blue-100 mt-1">Population: 1.4B • Code: {INDIA.code}</p>
              </div>
              <span className="text-4xl">🇮🇳</span>
            </div>
          </button>
        </div>
      </div>
    );
  }

  // ============== STEP 2: STATE ==============
  if (step === 2) {
    return (
      <div className="p-8 bg-gradient-to-br from-slate-50 to-slate-100 min-h-screen">
        <div className="mb-8 p-4 bg-white rounded-lg border border-slate-200">
          <p className="text-sm text-slate-600 font-semibold">Path: {breadcrumb.join(" → ")}</p>
        </div>

        <h1 className="text-4xl font-bold text-slate-900 mb-2">Select State</h1>

        <button
          onClick={() => setStep(1)}
          className="mb-6 px-4 py-2 bg-gray-500 hover:bg-gray-600 text-white rounded-lg"
        >
          ← Back
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {getAllStates().map((state) => (
            <button
              key={state.id}
              onClick={() => {
                setSelected({ state });
                setStep(3);
              }}
              className="p-6 bg-white border-2 border-slate-300 hover:border-blue-500 hover:bg-blue-50 rounded-lg transition text-left shadow-md hover:shadow-lg"
            >
              <h3 className="font-bold text-xl text-slate-900 mb-3">{state.name}</h3>
              <div className="space-y-2 text-sm text-slate-600">
                <p>📍 Code: {state.code}</p>
                <p>👥 Population: {(state.population / 1000000).toFixed(1)}M</p>
                <p>📚 Literacy: {state.literacy}%</p>
                <p>🗺️ Mandal/Zones: {state.mandalZones.length}</p>
              </div>
            </button>
          ))}
        </div>
      </div>
    );
  }

  // ============== STEP 3: STATE DETAILS + MANDAL SELECTION ==============
  if (step === 3 && selected.state && !selected.mandal) {
    return (
      <div className="p-8 bg-gradient-to-br from-slate-50 to-slate-100 min-h-screen">
        <div className="mb-8 p-4 bg-white rounded-lg border border-slate-200">
          <p className="text-sm text-slate-600 font-semibold">Path: {breadcrumb.join(" → ")}</p>
        </div>

        <button
          onClick={() => setStep(2)}
          className="mb-6 px-4 py-2 bg-gray-500 hover:bg-gray-600 text-white rounded-lg"
        >
          ← Back
        </button>

        {/* State Details */}
        <div className="p-8 bg-white rounded-lg shadow-lg mb-8">
          <h1 className="text-4xl font-bold text-slate-900 mb-6">{selected.state.name}</h1>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
              <p className="text-slate-600 text-sm font-semibold">Population</p>
              <p className="text-2xl font-bold text-blue-900">
                {(selected.state.population / 1000000).toFixed(1)}M
              </p>
            </div>
            <div className="p-4 bg-green-50 rounded-lg border border-green-200">
              <p className="text-slate-600 text-sm font-semibold">Literacy</p>
              <p className="text-2xl font-bold text-green-900">{selected.state.literacy}%</p>
            </div>
            <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
              <p className="text-slate-600 text-sm font-semibold">State Code</p>
              <p className="text-2xl font-bold text-purple-900">{selected.state.code}</p>
            </div>
            <div className="p-4 bg-orange-50 rounded-lg border border-orange-200">
              <p className="text-slate-600 text-sm font-semibold">Mandals</p>
              <p className="text-2xl font-bold text-orange-900">{selected.state.mandalZones.length}</p>
            </div>
          </div>
        </div>

        {/* Mandal Selection */}
        <h2 className="text-2xl font-bold text-slate-900 mb-6">Select Mandal/Zone</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {selected.state.mandalZones.map((mandal) => (
            <button
              key={mandal.id}
              onClick={() => {
                setSelected((prev) => ({ ...prev, mandal }));
                setStep(4);
              }}
              className="p-6 bg-white border-2 border-slate-300 hover:border-blue-500 hover:bg-blue-50 rounded-lg transition text-left shadow-md hover:shadow-lg"
            >
              <h3 className="font-bold text-lg text-slate-900 mb-2">{mandal.name}</h3>
              <div className="space-y-1 text-sm text-slate-600">
                <p>👥 {(mandal.population / 1000000).toFixed(2)}M people</p>
                <p>🏛️ {mandal.parliamentConstituencies.length} Parliament constituencies</p>
              </div>
            </button>
          ))}
        </div>
      </div>
    );
  }

  // ============== STEP 4: MANDAL DETAILS + PARLIAMENT SELECTION ==============
  if (step === 4 && selected.mandal && !selected.parliament) {
    return (
      <div className="p-8 bg-gradient-to-br from-slate-50 to-slate-100 min-h-screen">
        <div className="mb-8 p-4 bg-white rounded-lg border border-slate-200">
          <p className="text-sm text-slate-600 font-semibold">Path: {breadcrumb.join(" → ")}</p>
        </div>

        <button
          onClick={() => setStep(3)}
          className="mb-6 px-4 py-2 bg-gray-500 hover:bg-gray-600 text-white rounded-lg"
        >
          ← Back
        </button>

        {/* Mandal Details */}
        <div className="p-8 bg-white rounded-lg shadow-lg mb-8">
          <h1 className="text-4xl font-bold text-slate-900 mb-2">{selected.mandal.name}</h1>
          <p className="text-slate-600 mb-6">{selected.state?.name}</p>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
            <div className="p-4 bg-blue-50 rounded-lg">
              <p className="text-slate-600 text-sm font-semibold">Population</p>
              <p className="text-2xl font-bold">{(selected.mandal.population / 1000000).toFixed(2)}M</p>
            </div>
            <div className="p-4 bg-green-50 rounded-lg">
              <p className="text-slate-600 text-sm font-semibold">Type</p>
              <p className="text-xl font-bold">{selected.mandal.type}</p>
            </div>
            <div className="p-4 bg-purple-50 rounded-lg">
              <p className="text-slate-600 text-sm font-semibold">Parliament Constituencies</p>
              <p className="text-2xl font-bold">{selected.mandal.parliamentConstituencies.length}</p>
            </div>
          </div>
        </div>

        {/* Parliament Selection */}
        <h2 className="text-2xl font-bold text-slate-900 mb-6">Select Parliament/City Constituency</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {selected.mandal.parliamentConstituencies.map((parliament) => (
            <button
              key={parliament.id}
              onClick={() => {
                setSelected((prev) => ({ ...prev, parliament }));
                setStep(5);
              }}
              className="p-6 bg-white border-2 border-slate-300 hover:border-blue-500 hover:bg-blue-50 rounded-lg transition text-left shadow-md hover:shadow-lg"
            >
              <h3 className="font-bold text-lg text-slate-900 mb-2">{parliament.name}</h3>
              <div className="space-y-1 text-sm text-slate-600">
                <p>👥 {(parliament.population / 1000000).toFixed(1)}M population</p>
                <p>🗳️ {parliament.mlaCount} MLA constituencies</p>
                <p>📚 Literacy: {parliament.literacy}%</p>
              </div>
            </button>
          ))}
        </div>
      </div>
    );
  }

  // ============== STEP 5: PARLIAMENT DETAILS + MLA SELECTION ==============
  if (step === 5 && selected.parliament && !selected.mla) {
    return (
      <div className="p-8 bg-gradient-to-br from-slate-50 to-slate-100 min-h-screen">
        <div className="mb-8 p-4 bg-white rounded-lg border border-slate-200">
          <p className="text-sm text-slate-600 font-semibold">Path: {breadcrumb.join(" → ")}</p>
        </div>

        <button
          onClick={() => setStep(4)}
          className="mb-6 px-4 py-2 bg-gray-500 hover:bg-gray-600 text-white rounded-lg"
        >
          ← Back
        </button>

        {/* Parliament Details */}
        <div className="p-8 bg-white rounded-lg shadow-lg mb-8">
          <h1 className="text-4xl font-bold text-slate-900 mb-2">{selected.parliament.name}</h1>
          <p className="text-slate-600 mb-6">
            {selected.state?.name} • {selected.mandal?.name}
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <div className="p-4 bg-blue-50 rounded-lg">
              <p className="text-slate-600 text-sm font-semibold">Population</p>
              <p className="text-xl font-bold">{(selected.parliament.population / 1000000).toFixed(1)}M</p>
            </div>
            <div className="p-4 bg-green-50 rounded-lg">
              <p className="text-slate-600 text-sm font-semibold">Literacy</p>
              <p className="text-xl font-bold">{selected.parliament.literacy}%</p>
            </div>
            <div className="p-4 bg-purple-50 rounded-lg">
              <p className="text-slate-600 text-sm font-semibold">MLA Count</p>
              <p className="text-xl font-bold">{selected.parliament.mlaCount}</p>
            </div>
            <div className="p-4 bg-orange-50 rounded-lg">
              <p className="text-slate-600 text-sm font-semibold">Current MP</p>
              <p className="text-sm font-bold">{selected.parliament.currentMP || "—"}</p>
              <p className="text-xs text-orange-700">{selected.parliament.party}</p>
            </div>
          </div>
        </div>

        {/* MLA Selection */}
        <h2 className="text-2xl font-bold text-slate-900 mb-6">Select MLA Constituency</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {selected.parliament.mlas.map((mla) => (
            <button
              key={mla.id}
              onClick={() => {
                setSelected((prev) => ({ ...prev, mla }));
                setStep(6);
              }}
              className="p-6 bg-white border-2 border-slate-300 hover:border-blue-500 hover:bg-blue-50 rounded-lg transition text-left shadow-md hover:shadow-lg"
            >
              <h3 className="font-bold text-lg text-slate-900 mb-2">{mla.name}</h3>
              <div className="space-y-1 text-sm text-slate-600">
                <p>👥 {(mla.population / 1000).toFixed(0)}K population</p>
                <p>📚 Literacy: {mla.literacy}%</p>
                <p>🏛️ {mla.areas.length} areas/towns</p>
              </div>
            </button>
          ))}
        </div>
      </div>
    );
  }

  // ============== STEP 6: MLA DETAILS + AREA SELECTION ==============
  if (step === 6 && selected.mla && !selected.area) {
    return (
      <div className="p-8 bg-gradient-to-br from-slate-50 to-slate-100 min-h-screen">
        <div className="mb-8 p-4 bg-white rounded-lg border border-slate-200">
          <p className="text-sm text-slate-600 font-semibold">Path: {breadcrumb.join(" → ")}</p>
        </div>

        <button
          onClick={() => setStep(5)}
          className="mb-6 px-4 py-2 bg-gray-500 hover:bg-gray-600 text-white rounded-lg"
        >
          ← Back
        </button>

        {/* MLA Details */}
        <div className="p-8 bg-white rounded-lg shadow-lg mb-8">
          <h1 className="text-4xl font-bold text-slate-900 mb-2">{selected.mla.name}</h1>
          <p className="text-slate-600 mb-6">
            {selected.parliament?.name} • {selected.state?.name}
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <div className="p-4 bg-blue-50 rounded-lg">
              <p className="text-slate-600 text-sm font-semibold">Population</p>
              <p className="text-xl font-bold">{(selected.mla.population / 1000).toFixed(0)}K</p>
            </div>
            <div className="p-4 bg-green-50 rounded-lg">
              <p className="text-slate-600 text-sm font-semibold">Literacy</p>
              <p className="text-xl font-bold">{selected.mla.literacy}%</p>
            </div>
            <div className="p-4 bg-purple-50 rounded-lg">
              <p className="text-slate-600 text-sm font-semibold">Current MLA</p>
              <p className="text-sm font-bold">{selected.mla.currentMLA || "—"}</p>
            </div>
            <div className="p-4 bg-orange-50 rounded-lg">
              <p className="text-slate-600 text-sm font-semibold">Party</p>
              <p className="text-xl font-bold">{selected.mla.party || "—"}</p>
            </div>
          </div>
        </div>

        {/* Area Selection */}
        <h2 className="text-2xl font-bold text-slate-900 mb-6">Select Area/Town</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {selected.mla.areas.map((area) => (
            <button
              key={area.id}
              onClick={() => {
                setSelected((prev) => ({ ...prev, area }));
                setStep(7);
              }}
              className="p-6 bg-white border-2 border-slate-300 hover:border-blue-500 hover:bg-blue-50 rounded-lg transition text-left shadow-md hover:shadow-lg"
            >
              <h3 className="font-bold text-lg text-slate-900 mb-2">{area.name}</h3>
              <div className="space-y-1 text-sm text-slate-600">
                <p>👥 {(area.population / 1000).toFixed(0)}K population</p>
                <p>🏗️ {area.infrastructure}</p>
                <p>🏘️ {area.villages.length} villages/mohallas</p>
              </div>
            </button>
          ))}
        </div>
      </div>
    );
  }

  // ============== STEP 7: AREA DETAILS + VILLAGE SELECTION ==============
  if (step === 7 && selected.area && !selected.village) {
    return (
      <div className="p-8 bg-gradient-to-br from-slate-50 to-slate-100 min-h-screen">
        <div className="mb-8 p-4 bg-white rounded-lg border border-slate-200">
          <p className="text-sm text-slate-600 font-semibold">Path: {breadcrumb.join(" → ")}</p>
        </div>

        <button
          onClick={() => setStep(6)}
          className="mb-6 px-4 py-2 bg-gray-500 hover:bg-gray-600 text-white rounded-lg"
        >
          ← Back
        </button>

        {/* Area Details */}
        <div className="p-8 bg-white rounded-lg shadow-lg mb-8">
          <h1 className="text-4xl font-bold text-slate-900 mb-2">{selected.area.name}</h1>
          <p className="text-slate-600 mb-6">
            {selected.mla?.name} • {selected.parliament?.name}
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
            <div className="p-4 bg-blue-50 rounded-lg">
              <p className="text-slate-600 text-sm font-semibold">Population</p>
              <p className="text-2xl font-bold">{(selected.area.population / 1000).toFixed(0)}K</p>
            </div>
            <div className="p-4 bg-green-50 rounded-lg">
              <p className="text-slate-600 text-sm font-semibold">Infrastructure</p>
              <p className="text-lg font-bold">{selected.area.infrastructure}</p>
            </div>
            <div className="p-4 bg-purple-50 rounded-lg">
              <p className="text-slate-600 text-sm font-semibold">Type</p>
              <p className="text-lg font-bold">{selected.area.type}</p>
            </div>
          </div>
        </div>

        {/* Village Selection */}
        <h2 className="text-2xl font-bold text-slate-900 mb-6">Select Village/Mohalla</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {selected.area.villages.map((village) => (
            <button
              key={village.id}
              onClick={() => {
                setSelected((prev) => ({ ...prev, village }));
                setStep(8);
              }}
              className="p-6 bg-white border-2 border-slate-300 hover:border-blue-500 hover:bg-blue-50 rounded-lg transition text-left shadow-md hover:shadow-lg"
            >
              <h3 className="font-bold text-lg text-slate-900 mb-2">{village.name}</h3>
              <div className="space-y-1 text-sm text-slate-600">
                <p>👥 {village.population.toLocaleString()} population</p>
                <p>📚 {village.literacy}% literacy</p>
                <p>🏘️ Type: {village.type}</p>
              </div>
            </button>
          ))}
        </div>
      </div>
    );
  }

  // ============== STEP 8: VILLAGE/MOHALLA FINAL DETAILS ==============
  if (step === 8 && selected.village) {
    return (
      <div className="p-8 bg-gradient-to-br from-slate-50 to-slate-100 min-h-screen">
        <div className="mb-8 p-4 bg-white rounded-lg border border-slate-200">
          <p className="text-sm text-slate-600 font-semibold">Path: {breadcrumb.join(" → ")}</p>
        </div>

        <button
          onClick={() => setStep(7)}
          className="mb-6 px-4 py-2 bg-gray-500 hover:bg-gray-600 text-white rounded-lg"
        >
          ← Back
        </button>

        {/* Village Details */}
        <div className="p-8 bg-white rounded-lg shadow-lg mb-8">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h1 className="text-4xl font-bold text-slate-900 mb-2">{selected.village.name}</h1>
              <p className="text-slate-600">
                {selected.area?.name} • {selected.mla?.name}
              </p>
            </div>
            <button
              onClick={() => setStep(7)}
              className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg"
            >
              Change
            </button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <div className="p-4 bg-blue-50 rounded-lg">
              <p className="text-slate-600 text-sm font-semibold">Population</p>
              <p className="text-2xl font-bold">{selected.village.population.toLocaleString()}</p>
            </div>
            <div className="p-4 bg-green-50 rounded-lg">
              <p className="text-slate-600 text-sm font-semibold">Literacy</p>
              <p className="text-2xl font-bold">{selected.village.literacy}%</p>
            </div>
            <div className="p-4 bg-purple-50 rounded-lg">
              <p className="text-slate-600 text-sm font-semibold">Type</p>
              <p className="text-xl font-bold">{selected.village.type}</p>
            </div>
            <div className="p-4 bg-orange-50 rounded-lg">
              <p className="text-slate-600 text-sm font-semibold">Depth</p>
              <p className="text-xl font-bold">7 Levels</p>
            </div>
          </div>

          {selected.village.sex && (
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="p-4 bg-slate-100 rounded-lg">
                <p className="font-semibold text-slate-900 mb-2">Gender Distribution</p>
                <div className="flex gap-4">
                  <div>
                    <p className="text-slate-600 text-sm">Male</p>
                    <p className="text-lg font-bold">{selected.village.sex.male.toLocaleString()}</p>
                  </div>
                  <div>
                    <p className="text-slate-600 text-sm">Female</p>
                    <p className="text-lg font-bold">{selected.village.sex.female.toLocaleString()}</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {selected.village.caste && selected.village.caste.length > 0 && (
            <div className="p-4 bg-slate-100 rounded-lg mb-6">
              <p className="font-semibold text-slate-900 mb-2">Caste Groups</p>
              <p className="text-slate-700">{selected.village.caste.join(", ")}</p>
            </div>
          )}

          {selected.village.religion && selected.village.religion.length > 0 && (
            <div className="p-4 bg-slate-100 rounded-lg mb-6">
              <p className="font-semibold text-slate-900 mb-2">Religions</p>
              <p className="text-slate-700">{selected.village.religion.join(", ")}</p>
            </div>
          )}

          {selected.village.issues && selected.village.issues.length > 0 && (
            <div className="p-4 bg-slate-100 rounded-lg mb-6">
              <p className="font-semibold text-slate-900 mb-3">Key Issues</p>
              <ul className="space-y-2">
                {selected.village.issues.map((issue, idx) => (
                  <li key={idx} className="flex items-center text-slate-700 before:content-['▸'] before:mr-3 before:text-lg">
                    {issue}
                  </li>
                ))}
              </ul>
            </div>
          )}

          <button
            onClick={() => setEditMode(true)}
            className="mt-6 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition"
          >
            Add/Edit Custom Data
          </button>
        </div>
      </div>
    );
  }

  // ============== EDIT MODE ==============
  if (editMode && selected.village) {
    return (
      <div className="p-8 bg-gradient-to-br from-slate-50 to-slate-100 min-h-screen">
        <h1 className="text-4xl font-bold text-slate-900 mb-6">Edit Custom Data</h1>

        <div className="p-8 bg-white rounded-lg shadow-lg">
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">Political Party History</label>
              <textarea
                placeholder="e.g., TRS won 2018 election with 55% votes"
                className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                rows={3}
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">Current Voter Support (%)</label>
              <input
                type="number"
                min="0"
                max="100"
                placeholder="45"
                className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">Infrastructure Status</label>
              <input
                type="text"
                placeholder="e.g., Good • Roads paved • Power 18 hrs/day"
                className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">Additional Notes (JSON)</label>
              <textarea
                placeholder='{"mainConcern": "Water shortage", "topCropYield": "Cotton"}'
                className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none font-mono text-sm"
                rows={4}
              />
            </div>

            <div className="flex gap-4 pt-6 border-t border-slate-200">
              <button
                type="button"
                onClick={handleSave}
                className="flex-1 px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition"
              >
                Save Data
              </button>
              <button
                type="button"
                onClick={() => setEditMode(false)}
                className="flex-1 px-6 py-3 bg-gray-500 hover:bg-gray-600 text-white font-semibold rounded-lg transition"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }

  return null;
}
