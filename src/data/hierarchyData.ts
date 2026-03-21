// Comprehensive Hierarchical India Data Structure
// Country → State → Mandal/Zone → City/Parliament → MLA Constituency → Area/Town → Village/Mohalla

import {
  hyderabadEastVillages,
  hyderabadWestVillages,
  secunderabadNorthVillages,
  mumbaiNorthVillages,
  puneVillages,
  bangaloreVillages,
  chennaiVillages,
  lucknowVillages,
  jaipurVillages,
  ahmedabadVillages,
} from "./villagesData";

export interface VillageMohalla {
  id: string;
  name: string;
  type: "Village" | "Mohalla";
  population: number;
  literacy: number;
  caste?: string[];
  religion?: string[];
  sex?: { male: number; female: number };
  issues?: string[];
}

export interface AreaTown {
  id: string;
  name: string;
  type: "Area" | "Town";
  population: number;
  infrastructure?: string;
  villages: VillageMohalla[];
}

export interface MLAConstituency {
  id: string;
  name: string;
  population: number;
  currentMLA?: string;
  party?: string;
  lastElectionYear?: number;
  literacy: number;
  areas: AreaTown[];
}

export interface ParliamentCity {
  id: string;
  name: string;
  type: "Parliamentary" | "City";
  population: number;
  mlaCount: number;
  currentMP?: string;
  party?: string;
  lastElectionYear?: number;
  literacy: number;
  infrastructure?: string;
  mlas: MLAConstituency[];
}

export interface MandalZone {
  id: string;
  name: string;
  type: "Mandal" | "Zone";
  population: number;
  districts: number;
  parliamentConstituencies: ParliamentCity[];
}

export interface State {
  id: string;
  name: string;
  code: string;
  population: number;
  literacy: number;
  mandalZones: MandalZone[];
}

export interface Country {
  name: string;
  code: string;
  states: State[];
}

// ============================================
// TELANGANA
// ============================================
const telanganaData: State = {
  id: "tg-001",
  name: "Telangana",
  code: "TG",
  population: 35100000,
  literacy: 66.5,
  mandalZones: [
    {
      id: "tg-mandal-001",
      name: "Hyderabad Division",
      type: "Mandal",
      population: 12000000,
      districts: 2,
      parliamentConstituencies: [
        {
          id: "tg-mp-001",
          name: "Hyderabad",
          type: "Parliamentary",
          population: 4500000,
          mlaCount: 4,
          currentMP: "BJP Candidate",
          party: "BJP",
          lastElectionYear: 2019,
          literacy: 75,
          infrastructure: "Excellent",
          mlas: [
            {
              id: "tg-mla-001",
              name: "Hyderabad (East)",
              population: 1000000,
              currentMLA: "TRS Candidate",
              party: "TRS",
              lastElectionYear: 2018,
              literacy: 75,
              areas: [
                {
                  id: "tg-area-001",
                  name: "Banjara Hills",
                  type: "Area",
                  population: 200000,
                  infrastructure: "Excellent",
                  villages: hyderabadEastVillages.slice(0, 2),
                },
                {
                  id: "tg-area-002",
                  name: "Jubilee Hills",
                  type: "Area",
                  population: 220000,
                  infrastructure: "Excellent",
                  villages: hyderabadEastVillages.slice(2, 4),
                },
                {
                  id: "tg-area-003",
                  name: "Madhapur",
                  type: "Town",
                  population: 150000,
                  infrastructure: "Good",
                  villages: [hyderabadEastVillages[4]],
                },
              ],
            },
            {
              id: "tg-mla-002",
              name: "Hyderabad (West)",
              population: 950000,
              currentMLA: "AIMIM Candidate",
              party: "AIMIM",
              lastElectionYear: 2018,
              literacy: 72,
              areas: [
                {
                  id: "tg-area-004",
                  name: "Secunderabad Cantonment",
                  type: "Area",
                  population: 300000,
                  infrastructure: "Good",
                  villages: hyderabadWestVillages.slice(0, 1),
                },
                {
                  id: "tg-area-005",
                  name: "Paradise",
                  type: "Area",
                  population: 250000,
                  infrastructure: "Average",
                  villages: hyderabadWestVillages.slice(1, 2),
                },
                {
                  id: "tg-area-006",
                  name: "Somajiguda",
                  type: "Town",
                  population: 200000,
                  infrastructure: "Good",
                  villages: hyderabadWestVillages.slice(2, 3),
                },
              ],
            },
            {
              id: "tg-mla-003",
              name: "Hyderabad Central",
              population: 850000,
              currentMLA: "Congress Candidate",
              party: "Congress",
              lastElectionYear: 2018,
              literacy: 78,
              areas: [
                {
                  id: "tg-area-007",
                  name: "Nampally",
                  type: "Area",
                  population: 300000,
                  infrastructure: "Average",
                  villages: hyderabadWestVillages.slice(3, 4),
                },
              ],
            },
          ],
        },
        {
          id: "tg-mp-002",
          name: "Secunderabad",
          type: "Parliamentary",
          population: 3800000,
          mlaCount: 4,
          currentMP: "AIMIM Candidate",
          party: "AIMIM",
          lastElectionYear: 2019,
          literacy: 71,
          infrastructure: "Good",
          mlas: [
            {
              id: "tg-mla-004",
              name: "Secunderabad (North)",
              population: 900000,
              currentMLA: "AIMIM Candidate",
              party: "AIMIM",
              lastElectionYear: 2018,
              literacy: 72,
              areas: [
                {
                  id: "tg-area-009",
                  name: "Nacharam",
                  type: "Area",
                  population: 250000,
                  infrastructure: "Average",
                  villages: secunderabadNorthVillages.slice(0, 1),
                },
                {
                  id: "tg-area-010",
                  name: "Redpalli",
                  type: "Town",
                  population: 200000,
                  infrastructure: "Average",
                  villages: secunderabadNorthVillages.slice(1, 2),
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};

// ============================================
// MAHARASHTRA
// ============================================
const maharashtraData: State = {
  id: "mh-001",
  name: "Maharashtra",
  code: "MH",
  population: 112400000,
  literacy: 82.3,
  mandalZones: [
    {
      id: "mh-mandal-001",
      name: "Mumbai Metropolitan Zone",
      type: "Zone",
      population: 20000000,
      districts: 2,
      parliamentConstituencies: [
        {
          id: "mh-mp-001",
          name: "Mumbai North",
          type: "Parliamentary",
          population: 3500000,
          mlaCount: 3,
          currentMP: "BJP Candidate",
          party: "BJP",
          lastElectionYear: 2019,
          literacy: 85,
          infrastructure: "Excellent",
          mlas: [
            {
              id: "mh-mla-001",
              name: "Borivali",
              population: 1050000,
              currentMLA: "BJP Candidate",
              party: "BJP",
              lastElectionYear: 2019,
              literacy: 85,
              areas: [
                {
                  id: "mh-area-001",
                  name: "Borivali East",
                  type: "Area",
                  population: 350000,
                  infrastructure: "Good",
                  villages: mumbaiNorthVillages.slice(0, 2),
                },
                {
                  id: "mh-area-002",
                  name: "Borivali West",
                  type: "Area",
                  population: 330000,
                  infrastructure: "Good",
                  villages: [mumbaiNorthVillages[2]],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: "mh-mandal-002",
      name: "Pune Division",
      type: "Zone",
      population: 8500000,
      districts: 2,
      parliamentConstituencies: [
        {
          id: "mh-mp-002",
          name: "Pune",
          type: "Parliamentary",
          population: 4200000,
          mlaCount: 3,
          currentMP: "NCP Candidate",
          party: "NCP",
          lastElectionYear: 2019,
          literacy: 82,
          infrastructure: "Good",
          mlas: [
            {
              id: "mh-mla-002",
              name: "Pune City",
              population: 1300000,
              currentMLA: "NCP Candidate",
              party: "NCP",
              lastElectionYear: 2019,
              literacy: 82,
              areas: [
                {
                  id: "mh-area-003",
                  name: "Aundh",
                  type: "Area",
                  population: 300000,
                  infrastructure: "Good",
                  villages: [puneVillages[0]],
                },
                {
                  id: "mh-area-004",
                  name: "Baner",
                  type: "Area",
                  population: 280000,
                  infrastructure: "Good",
                  villages: [puneVillages[1]],
                },
                {
                  id: "mh-area-005",
                  name: "Katraj",
                  type: "Town",
                  population: 250000,
                  infrastructure: "Average",
                  villages: [puneVillages[2]],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};

// ============================================
// KARNATAKA
// ============================================
const karnatakaData: State = {
  id: "ka-001",
  name: "Karnataka",
  code: "KA",
  population: 61130000,
  literacy: 75.6,
  mandalZones: [
    {
      id: "ka-mandal-001",
      name: "Bangalore Metropolitan",
      type: "Zone",
      population: 12000000,
      districts: 1,
      parliamentConstituencies: [
        {
          id: "ka-mp-001",
          name: "Bangalore South",
          type: "Parliamentary",
          population: 4000000,
          mlaCount: 3,
          currentMP: "Congress Candidate",
          party: "Congress",
          lastElectionYear: 2019,
          literacy: 89,
          infrastructure: "Excellent",
          mlas: [
            {
              id: "ka-mla-001",
              name: "Bangalore (South)",
              population: 1200000,
              currentMLA: "Congress Candidate",
              party: "Congress",
              lastElectionYear: 2018,
              literacy: 89,
              areas: [
                {
                  id: "ka-area-001",
                  name: "Whitefield",
                  type: "Area",
                  population: 350000,
                  infrastructure: "Excellent",
                  villages: [bangaloreVillages[0]],
                },
                {
                  id: "ka-area-002",
                  name: "Koramangala",
                  type: "Area",
                  population: 320000,
                  infrastructure: "Good",
                  villages: [bangaloreVillages[1]],
                },
                {
                  id: "ka-area-003",
                  name: "Indiranagar",
                  type: "Area",
                  population: 310000,
                  infrastructure: "Good",
                  villages: [bangaloreVillages[2]],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};

// ============================================
// TAMIL NADU
// ============================================
const tamilNaduData: State = {
  id: "tn-001",
  name: "Tamil Nadu",
  code: "TN",
  population: 72147000,
  literacy: 80.3,
  mandalZones: [
    {
      id: "tn-mandal-001",
      name: "Chennai Metropolitan",
      type: "Zone",
      population: 11000000,
      districts: 1,
      parliamentConstituencies: [
        {
          id: "tn-mp-001",
          name: "Chennai South",
          type: "Parliamentary",
          population: 3500000,
          mlaCount: 3,
          currentMP: "DMK Candidate",
          party: "DMK",
          lastElectionYear: 2019,
          literacy: 92,
          infrastructure: "Excellent",
          mlas: [
            {
              id: "tn-mla-001",
              name: "T. Nagar",
              population: 900000,
              currentMLA: "DMK Candidate",
              party: "DMK",
              lastElectionYear: 2021,
              literacy: 92,
              areas: [
                {
                  id: "tn-area-001",
                  name: "T. Nagar",
                  type: "Area",
                  population: 350000,
                  infrastructure: "Good",
                  villages: [chennaiVillages[0]],
                },
                {
                  id: "tn-area-002",
                  name: "Mylapore",
                  type: "Area",
                  population: 330000,
                  infrastructure: "Good",
                  villages: [chennaiVillages[1]],
                },
                {
                  id: "tn-area-003",
                  name: "Besant Nagar",
                  type: "Area",
                  population: 310000,
                  infrastructure: "Good",
                  villages: [chennaiVillages[2]],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};

// ============================================
// UTTAR PRADESH
// ============================================
const utarPradeshData: State = {
  id: "up-001",
  name: "Uttar Pradesh",
  code: "UP",
  population: 199812000,
  literacy: 67.7,
  mandalZones: [
    {
      id: "up-mandal-001",
      name: "Lucknow Division",
      type: "Mandal",
      population: 8000000,
      districts: 2,
      parliamentConstituencies: [
        {
          id: "up-mp-001",
          name: "Lucknow",
          type: "Parliamentary",
          population: 2800000,
          mlaCount: 3,
          currentMP: "BJP Candidate",
          party: "BJP",
          lastElectionYear: 2019,
          literacy: 76,
          infrastructure: "Good",
          mlas: [
            {
              id: "up-mla-001",
              name: "Lucknow (East)",
              population: 850000,
              currentMLA: "BJP Candidate",
              party: "BJP",
              lastElectionYear: 2022,
              literacy: 76,
              areas: [
                {
                  id: "up-area-001",
                  name: "Aliganj",
                  type: "Area",
                  population: 280000,
                  infrastructure: "Average",
                  villages: [lucknowVillages[0]],
                },
                {
                  id: "up-area-002",
                  name: "Gomti Nagar",
                  type: "Area",
                  population: 270000,
                  infrastructure: "Average",
                  villages: [lucknowVillages[1]],
                },
                {
                  id: "up-area-003",
                  name: "Hazratganj",
                  type: "Town",
                  population: 260000,
                  infrastructure: "Good",
                  villages: [lucknowVillages[2]],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};

// ============================================
// RAJASTHAN
// ============================================
const rajasthanData: State = {
  id: "rj-001",
  name: "Rajasthan",
  code: "RJ",
  population: 68548000,
  literacy: 66.1,
  mandalZones: [
    {
      id: "rj-mandal-001",
      name: "Jaipur Division",
      type: "Mandal",
      population: 6000000,
      districts: 2,
      parliamentConstituencies: [
        {
          id: "rj-mp-001",
          name: "Jaipur",
          type: "Parliamentary",
          population: 2500000,
          mlaCount: 3,
          currentMP: "BJP Candidate",
          party: "BJP",
          lastElectionYear: 2019,
          literacy: 81,
          infrastructure: "Good",
          mlas: [
            {
              id: "rj-mla-001",
              name: "Jaipur (Central)",
              population: 750000,
              currentMLA: "BJP Candidate",
              party: "BJP",
              lastElectionYear: 2023,
              literacy: 81,
              areas: [
                {
                  id: "rj-area-001",
                  name: "C-Scheme",
                  type: "Area",
                  population: 250000,
                  infrastructure: "Good",
                  villages: [jaipurVillages[0]],
                },
                {
                  id: "rj-area-002",
                  name: "Malviya Nagar",
                  type: "Area",
                  population: 230000,
                  infrastructure: "Good",
                  villages: [jaipurVillages[1]],
                },
                {
                  id: "rj-area-003",
                  name: "Sanganer",
                  type: "Town",
                  population: 210000,
                  infrastructure: "Average",
                  villages: [jaipurVillages[2]],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};

// ============================================
// GUJARAT
// ============================================
const gujaratData: State = {
  id: "gj-001",
  name: "Gujarat",
  code: "GJ",
  population: 60383000,
  literacy: 79.3,
  mandalZones: [
    {
      id: "gj-mandal-001",
      name: "Ahmedabad Division",
      type: "Zone",
      population: 10000000,
      districts: 2,
      parliamentConstituencies: [
        {
          id: "gj-mp-001",
          name: "Ahmedabad",
          type: "Parliamentary",
          population: 3500000,
          mlaCount: 3,
          currentMP: "BJP Candidate",
          party: "BJP",
          lastElectionYear: 2019,
          literacy: 83,
          infrastructure: "Good",
          mlas: [
            {
              id: "gj-mla-001",
              name: "Ahmedabad (East)",
              population: 1000000,
              currentMLA: "BJP Candidate",
              party: "BJP",
              lastElectionYear: 2022,
              literacy: 83,
              areas: [
                {
                  id: "gj-area-001",
                  name: "Thaltej",
                  type: "Area",
                  population: 300000,
                  infrastructure: "Good",
                  villages: [ahmedabadVillages[0]],
                },
                {
                  id: "gj-area-002",
                  name: "Satellite",
                  type: "Area",
                  population: 280000,
                  infrastructure: "Good",
                  villages: [ahmedabadVillages[1]],
                },
                {
                  id: "gj-area-003",
                  name: "Vastrapur",
                  type: "Area",
                  population: 260000,
                  infrastructure: "Good",
                  villages: [ahmedabadVillages[2]],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};

// ============================================
// MAIN EXPORT
// ============================================
export const INDIA: Country = {
  name: "India",
  code: "IN",
  states: [
    telanganaData,
    maharashtraData,
    karnatakaData,
    tamilNaduData,
    utarPradeshData,
    rajasthanData,
    gujaratData,
  ],
};

// HELPER FUNCTIONS
export const getAllStates = (): State[] => {
  return INDIA.states;
};

export const getStateByName = (stateName: string): State | undefined => {
  return INDIA.states.find((s) => s.name === stateName);
};

export const getMandalZones = (stateName: string): MandalZone[] => {
  const state = getStateByName(stateName);
  return state?.mandalZones || [];
};

export const getParliamentConstituencies = (
  stateName: string,
  mandalId: string
): ParliamentCity[] => {
  const state = getStateByName(stateName);
  const mandal = state?.mandalZones.find((m) => m.id === mandalId);
  return mandal?.parliamentConstituencies || [];
};

export const getMLAConstituencies = (
  stateName: string,
  mandalId: string,
  parliamentId: string
): MLAConstituency[] => {
  const parliaments = getParliamentConstituencies(stateName, mandalId);
  const parliament = parliaments.find((p) => p.id === parliamentId);
  return parliament?.mlas || [];
};

export const getAreas = (
  stateName: string,
  mandalId: string,
  parliamentId: string,
  mlaId: string
): AreaTown[] => {
  const mlas = getMLAConstituencies(stateName, mandalId, parliamentId);
  const mla = mlas.find((m) => m.id === mlaId);
  return mla?.areas || [];
};

export const getVillages = (
  stateName: string,
  mandalId: string,
  parliamentId: string,
  mlaId: string,
  areaId: string
): VillageMohalla[] => {
  const areas = getAreas(stateName, mandalId, parliamentId, mlaId);
  const area = areas.find((a) => a.id === areaId);
  return area?.villages || [];
};
