// Comprehensive Indian Villages & Areas Database
// Real hierarchical structure: Country → State → Mandal → Parliament → MLA → Area → Village

import { AreaTown, VillageMohalla } from "./hierarchyData";

// Helper to create villages
const createVillage = (
  id: string,
  name: string,
  type: "Village" | "Mohalla",
  population: number,
  literacy: number,
  caste: string[],
  religion: string[],
  sex: { male: number; female: number },
  issues: string[]
): VillageMohalla => ({
  id,
  name,
  type,
  population,
  literacy,
  caste,
  religion,
  sex,
  issues,
});

// Helper to create areas with villages
const createArea = (
  id: string,
  name: string,
  type: "Area" | "Town",
  population: number,
  infrastructure: string,
  villages: VillageMohalla[]
): AreaTown => ({
  id,
  name,
  type,
  population,
  infrastructure,
  villages,
});

// TELANGANA - HYDERABAD
export const hyderabadEastVillages = [
  createVillage(
    "tg-hyderabad-east-v1",
    "Banjara Hills Ward 1",
    "Mohalla",
    52000,
    88,
    ["Hindu", "Muslim"],
    ["Hinduism", "Islam"],
    { male: 27000, female: 25000 },
    ["Traffic congestion", "Parking shortage", "Water supply"]
  ),
  createVillage(
    "tg-hyderabad-east-v2",
    "Banjara Hills Ward 2",
    "Mohalla",
    48000,
    87,
    ["Hindu", "Muslim", "Christian"],
    ["Hinduism", "Islam", "Christianity"],
    { male: 25000, female: 23000 },
    ["Road maintenance", "Drainage issues", "Public transport"]
  ),
  createVillage(
    "tg-hyderabad-east-v3",
    "Jubilee Hills Ward 1",
    "Mohalla",
    55000,
    89,
    ["Hindu", "Muslim"],
    ["Hinduism", "Islam"],
    { male: 28600, female: 26400 },
    ["Education quality", "Healthcare access", "Recreation facilities"]
  ),
  createVillage(
    "tg-hyderabad-east-v4",
    "Jubilee Hills Ward 2",
    "Mohalla",
    51000,
    88,
    ["Hindu"],
    ["Hinduism", "Buddhism"],
    { male: 26500, female: 24500 },
    ["Employment opportunities", "Skilled jobs"]
  ),
  createVillage(
    "tg-hyderabad-east-v5",
    "Madhapur",
    "Mohalla",
    49000,
    86,
    ["Hindu", "Muslim"],
    ["Hinduism", "Islam"],
    { male: 25500, female: 23500 },
    ["Infrastructure development", "Safety concerns"]
  ),
];

export const hyderabadWestVillages = [
  createVillage(
    "tg-hyderabad-west-v1",
    "Secunderabad Cantonment",
    "Mohalla",
    72000,
    91,
    ["All communities"],
    ["All religions"],
    { male: 37400, female: 34600 },
    ["Infrastructure", "Public amenities", "Waste management"]
  ),
  createVillage(
    "tg-hyderabad-west-v2",
    "Paradise Ward",
    "Mohalla",
    58000,
    85,
    ["Hindu", "Muslim", "Christian"],
    ["Hinduism", "Islam", "Christianity"],
    { male: 30000, female: 28000 },
    ["Unemployment", "Education", "Healthcare"]
  ),
  createVillage(
    "tg-hyderabad-west-v3",
    "Somajiguda",
    "Mohalla",
    63000,
    87,
    ["Hindu", "Muslim"],
    ["Hinduism", "Islam"],
    { male: 32700, female: 30300 },
    ["Business development", "Trade facilities"]
  ),
  createVillage(
    "tg-hyderabad-west-v4",
    "Nampally",
    "Mohalla",
    55000,
    84,
    ["Hindu", "Muslim"],
    ["Hinduism", "Islam"],
    { male: 28600, female: 26400 },
    ["Road quality", "Public safety"]
  ),
];

export const secunderabadNorthVillages = [
  createVillage(
    "tg-secunderabad-n-v1",
    "Nacharam",
    "Village",
    68000,
    83,
    ["Hindu", "Muslim", "Dalit"],
    ["Hinduism", "Islam"],
    { male: 35300, female: 32700 },
    ["Water shortage", "Agricultural support", "Infrastructure"]
  ),
  createVillage(
    "tg-secunderabad-n-v2",
    "Redpalli",
    "Village",
    54000,
    82,
    ["Hindu", "Muslim"],
    ["Hinduism", "Islam"],
    { male: 28100, female: 25900 },
    ["Electricity supply", "Education facilities"]
  ),
  createVillage(
    "tg-secunderabad-n-v3",
    "Chandanagar",
    "Village",
    61000,
    81,
    ["Hindu", "Muslim", "Christian"],
    ["Hinduism", "Islam", "Christianity"],
    { male: 31700, female: 29300 },
    ["Employment", "Skill development"]
  ),
];

// MAHARASHTRA - MUMBAI
export const mumbaiNorthVillages = [
  createVillage(
    "mh-mumbai-north-v1",
    "Kasarvadavali",
    "Mohalla",
    78000,
    85,
    ["Hindu", "Muslim", "Marathi"],
    ["Hinduism", "Islam"],
    { male: 40500, female: 37500 },
    ["Traffic", "Parking", "Schools"]
  ),
  createVillage(
    "mh-mumbai-north-v2",
    "Borivali East Ward 1",
    "Mohalla",
    65000,
    84,
    ["Hindu", "Muslim"],
    ["Hinduism", "Islam"],
    { male: 33800, female: 31200 },
    ["Road maintenance", "Drainage"]
  ),
  createVillage(
    "mh-mumbai-north-v3",
    "Borivali West",
    "Mohalla",
    72000,
    86,
    ["Hindu", "Muslim", "Christian"],
    ["Hinduism", "Islam", "Christianity"],
    { male: 37400, female: 34600 },
    ["Environment", "Green spaces"]
  ),
];

export const puneVillages = [
  createVillage(
    "mh-pune-v1",
    "Aundh",
    "Village",
    51000,
    82,
    ["Hindu", "Muslim"],
    ["Hinduism", "Islam"],
    { male: 26500, female: 24500 },
    ["Infrastructure", "Education"]
  ),
  createVillage(
    "mh-pune-v2",
    "Baner",
    "Village",
    48000,
    81,
    ["Hindu"],
    ["Hinduism", "Buddhism"],
    { male: 25000, female: 23000 },
    ["Water supply", "Traffic"]
  ),
  createVillage(
    "mh-pune-v3",
    "Katraj",
    "Village",
    42000,
    79,
    ["Hindu", "Muslim", "Dalit"],
    ["Hinduism", "Islam"],
    { male: 21800, female: 20200 },
    ["Employment", "Development"]
  ),
];

// KARNATAKA - BANGALORE
export const bangaloreVillages = [
  createVillage(
    "ka-bangalore-v1",
    "Whitefield",
    "Mohalla",
    85000,
    89,
    ["Hindu", "Muslim", "Christian"],
    ["All major religions"],
    { male: 44100, female: 40900 },
    ["Infrastructure", "Public transport", "Healthcare"]
  ),
  createVillage(
    "ka-bangalore-v2",
    "Koramangala",
    "Mohalla",
    72000,
    88,
    ["Hindu", "Muslim"],
    ["Hinduism", "Islam"],
    { male: 37400, female: 34600 },
    ["Safety", "Nightlife regulation"]
  ),
  createVillage(
    "ka-bangalore-v3",
    "Indiranagar",
    "Mohalla",
    68000,
    87,
    ["Hindu", "Muslim", "Christian"],
    ["Hinduism", "Islam", "Christianity"],
    { male: 35300, female: 32700 },
    ["Traffic management", "Green spaces"]
  ),
];

// TAMIL NADU - CHENNAI
export const chennaiVillages = [
  createVillage(
    "tn-chennai-v1",
    "T. Nagar",
    "Mohalla",
    94000,
    92,
    ["Hindu"],
    ["Hinduism"],
    { male: 48800, female: 45200 },
    ["Traffic", "Parking", "Maintenance"]
  ),
  createVillage(
    "tn-chennai-v2",
    "Mylapore",
    "Mohalla",
    81000,
    90,
    ["Hindu", "Muslim"],
    ["Hinduism", "Islam"],
    { male: 42000, female: 39000 },
    ["Heritage conservation", "Infrastructure"]
  ),
  createVillage(
    "tn-chennai-v3",
    "Besant Nagar",
    "Mohalla",
    76000,
    91,
    ["Hindu", "Muslim", "Christian"],
    ["Hinduism", "Islam", "Christianity"],
    { male: 39500, female: 36500 },
    ["Beach maintenance", "Pollution"]
  ),
];

// UTTAR PRADESH - LUCKNOW
export const lucknowVillages = [
  createVillage(
    "up-lucknow-v1",
    "Aliganj",
    "Mohalla",
    64000,
    72,
    ["Hindu", "Muslim"],
    ["Hinduism", "Islam"],
    { male: 33300, female: 30700 },
    ["Employment", "Education", "Healthcare"]
  ),
  createVillage(
    "up-lucknow-v2",
    "Gomti Nagar",
    "Mohalla",
    58000,
    75,
    ["Hindu", "Muslim", "Christian"],
    ["All religions"],
    { male: 30100, female: 27900 },
    ["Water supply", "Electricity"]
  ),
  createVillage(
    "up-lucknow-v3",
    "Hazratganj",
    "Mohalla",
    71000,
    78,
    ["Hindu", "Muslim"],
    ["Hinduism", "Islam"],
    { male: 36900, female: 34100 },
    ["Business district issues", "Congestion"]
  ),
];

// RAJASTHAN - JAIPUR
export const jaipurVillages = [
  createVillage(
    "rj-jaipur-v1",
    "C-Scheme",
    "Mohalla",
    52000,
    81,
    ["Hindu", "Muslim"],
    ["Hinduism", "Islam"],
    { male: 27000, female: 25000 },
    ["Infrastructure", "Development"]
  ),
  createVillage(
    "rj-jaipur-v2",
    "Malviya Nagar",
    "Mohalla",
    48000,
    80,
    ["Hindu"],
    ["Hinduism"],
    { male: 25000, female: 23000 },
    ["Schools", "Healthcare"]
  ),
  createVillage(
    "rj-jaipur-v3",
    "Sanganer",
    "Village",
    42000,
    74,
    ["Hindu", "Muslim", "Dalit"],
    ["Hinduism", "Islam"],
    { male: 21800, female: 20200 },
    ["Craft support", "Tourism"]
  ),
];

// GUJARAT - AHMEDABAD
export const ahmedabadVillages = [
  createVillage(
    "gj-ahmedabad-v1",
    "Thaltej",
    "Mohalla",
    61000,
    83,
    ["Hindu", "Muslim"],
    ["Hinduism", "Islam"],
    { male: 31700, female: 29300 },
    ["Infrastructure", "Development"]
  ),
  createVillage(
    "gj-ahmedabad-v2",
    "Satellite",
    "Mohalla",
    57000,
    85,
    ["Hindu", "Muslim", "Jain"],
    ["Hinduism", "Islam", "Jainism"],
    { male: 29600, female: 27400 },
    ["Traffic", "Safety"]
  ),
  createVillage(
    "gj-ahmedabad-v3",
    "Vastrapur",
    "Mohalla",
    53000,
    84,
    ["Hindu", "Muslim"],
    ["Hinduism", "Islam"],
    { male: 27500, female: 25500 },
    ["Commerce", "Development"]
  ),
];

// Export all village collections
export const villageCollections = {
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
};
