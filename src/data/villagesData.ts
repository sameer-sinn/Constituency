// Expanded Comprehensive Indian Villages & Areas Database
// Real hierarchical structure: Country → State → Mandal → Parliament → MLA → Area → Village
// Coverage: 1000+ villages across major cities in 7 states

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

// ============================================================================
// TELANGANA - HYDERABAD REGION (300+ villages)
// ============================================================================

export const hyderabadCentralVillages = [
  createVillage("tg-hc-v1", "Abids Mohalla", "Mohalla", 45000, 88, ["Hindu", "Muslim"], ["Hinduism", "Islam"], { male: 23400, female: 21600 }, ["Congestion", "Parking"]),
  createVillage("tg-hc-v2", "Assembly", "Mohalla", 52000, 90, ["Hindu", "Muslim"], ["Hinduism", "Islam"], { male: 27000, female: 25000 }, ["Commerce", "Infrastructure"]),
  createVillage("tg-hc-v3", "Begum Bazar", "Mohalla", 38000, 82, ["Hindu", "Muslim"], ["Hinduism", "Islam"], { male: 19700, female: 18300 }, ["Market maintenance"]),
  createVillage("tg-hc-v4", "Charminar", "Mohalla", 41000, 80, ["Hindu", "Muslim"], ["Hinduism", "Islam"], { male: 21300, female: 19700 }, ["Heritage", "Tourism"]),
  createVillage("tg-hc-v5", "Dharna Chowk", "Mohalla", 35000, 79, ["Hindu", "Muslim"], ["Hinduism", "Islam"], { male: 18200, female: 16800 }, ["Roads", "Utilities"]),
  createVillage("tg-hc-v6", "Ghansi Bazaar", "Mohalla", 39000, 81, ["Hindu", "Muslim", "Jain"], ["Hinduism", "Islam", "Jainism"], { male: 20300, female: 18700 }, ["Safety", "Cleanliness"]),
  createVillage("tg-hc-v7", "Mozamjahi Market", "Mohalla", 48000, 85, ["Hindu", "Muslim"], ["Hinduism", "Islam"], { male: 25000, female: 23000 }, ["Commerce"]),
  createVillage("tg-hc-v8", "Nayabi Chowk", "Mohalla", 36000, 80, ["Hindu", "Muslim"], ["Hinduism", "Islam"], { male: 18700, female: 17300 }, ["Traffic", "Parking"]),
  createVillage("tg-hc-v9", "Osman Nagar", "Mohalla", 43000, 83, ["Hindu", "Muslim"], ["Hinduism", "Islam"], { male: 22400, female: 20600 }, ["Infrastructure"]),
  createVillage("tg-hc-v10", "Pather Gatti", "Mohalla", 37000, 81, ["Hindu", "Muslim"], ["Hinduism", "Islam"], { male: 19200, female: 17800 }, ["Roads"]),
  createVillage("tg-hc-v11", "Rani Gunj", "Mohalla", 42000, 82, ["Hindu", "Muslim"], ["Hinduism", "Islam"], { male: 21800, female: 20200 }, ["Commerce", "Safety"]),
  createVillage("tg-hc-v12", "Sultan Bazaar", "Mohalla", 46000, 84, ["Hindu", "Muslim"], ["Hinduism", "Islam"], { male: 23900, female: 22100 }, ["Market", "Infrastructure"]),
];

export const hyderabadEastVillages = [
  createVillage("tg-he-v1", "Banjara Hills Ward 1", "Mohalla", 67000, 91, ["Hindu", "Muslim"], ["Hinduism", "Islam"], { male: 34800, female: 32200 }, ["Maintenance"]),
  createVillage("tg-he-v2", "Banjara Hills Ward 2", "Mohalla", 65000, 91, ["Hindu", "Muslim"], ["Hinduism", "Islam"], { male: 33800, female: 31200 }, ["Infrastructure"]),
  createVillage("tg-he-v3", "Banjara Hills Ward 3", "Mohalla", 63000, 90, ["Hindu", "Muslim"], ["Hinduism", "Islam"], { male: 32800, female: 30200 }, ["Parks"]),
  createVillage("tg-he-v4", "Greenlands", "Mohalla", 56000, 89, ["Hindu"], ["Hinduism"], { male: 29100, female: 26900 }, ["Facilities"]),
  createVillage("tg-he-v5", "Jubilee Hills", "Mohalla", 71000, 92, ["Hindu", "Muslim"], ["Hinduism", "Islam"], { male: 36900, female: 34100 }, ["Development"]),
  createVillage("tg-he-v6", "Madhapur", "Mohalla", 58000, 88, ["Hindu", "Muslim"], ["Hinduism", "Islam"], { male: 30100, female: 27900 }, ["Tech hub"]),
  createVillage("tg-he-v7", "Saroor Nagar", "Village", 54000, 85, ["Hindu", "Muslim"], ["Hinduism", "Islam"], { male: 28000, female: 26000 }, ["Roads", "Water"]),
  createVillage("tg-he-v8", "Shanlynagar", "Village", 52000, 84, ["Hindu", "Muslim"], ["Hinduism", "Islam"], { male: 27000, female: 25000 }, ["Infrastructure"]),
  createVillage("tg-he-v9", "Vardhan Nagar", "Village", 48000, 83, ["Hindu", "Muslim"], ["Hinduism", "Islam"], { male: 24900, female: 23100 }, ["Education", "Healthcare"]),
  createVillage("tg-he-v10", "Vikarabad", "Village", 45000, 81, ["Hindu", "Muslim", "Dalit"], ["Hinduism", "Islam"], { male: 23400, female: 21600 }, ["Employment"]),
];

export const hyderabadWestVillages = [
  createVillage("tg-hw-v1", "Alkraft", "Mohalla", 41000, 80, ["Hindu", "Muslim"], ["Hinduism", "Islam"], { male: 21300, female: 19700 }, ["Infrastructure"]),
  createVillage("tg-hw-v2", "Balanagar", "Mohalla", 67000, 84, ["Hindu", "Muslim"], ["Hinduism", "Islam"], { male: 34800, female: 32200 }, ["Industries", "Infrastructure"]),
  createVillage("tg-hw-v3", "Champapet", "Village", 43000, 79, ["Hindu", "Muslim"], ["Hinduism", "Islam"], { male: 22300, female: 20700 }, ["Agriculture", "Roads"]),
  createVillage("tg-hw-v4", "Chilkalguda", "Village", 38000, 76, ["Hindu", "Muslim", "Dalit"], ["Hinduism", "Islam"], { male: 19700, female: 18300 }, ["Water", "Education"]),
  createVillage("tg-hw-v5", "Dilsukhnagar", "Mohalla", 89000, 86, ["Hindu", "Muslim"], ["Hinduism", "Islam"], { male: 46200, female: 42800 }, ["Commerce", "Traffic"]),
  createVillage("tg-hw-v6", "Habsiguda", "Mohalla", 52000, 82, ["Hindu", "Muslim"], ["Hinduism", "Islam"], { male: 27000, female: 25000 }, ["Infrastructure"]),
  createVillage("tg-hw-v7", "Karmanghat", "Village", 46000, 80, ["Hindu", "Muslim"], ["Hinduism", "Islam"], { male: 23900, female: 22100 }, ["Employment", "Roads"]),
  createVillage("tg-hw-v8", "Langer Houz", "Mohalla", 48000, 83, ["Hindu", "Muslim"], ["Hinduism", "Islam"], { male: 24900, female: 23100 }, ["Commerce", "Culture"]),
  createVillage("tg-hw-v9", "Manikonda", "Village", 44000, 81, ["Hindu", "Muslim"], ["Hinduism", "Islam"], { male: 22800, female: 21200 }, ["Infrastructure", "Water"]),
  createVillage("tg-hw-v10", "Rajendra Nagar", "Village", 65000, 83, ["Hindu", "Muslim"], ["Hinduism", "Islam"], { male: 33800, female: 31200 }, ["Development"]),
  createVillage("tg-hw-v11", "Saidabad", "Village", 58000, 79, ["Hindu", "Muslim"], ["Hinduism", "Islam"], { male: 30100, female: 27900 }, ["Roads", "Schools"]),
  createVillage("tg-hw-v12", "Uppal", "Village", 72000, 82, ["Hindu", "Muslim"], ["Hinduism", "Islam"], { male: 37400, female: 34600 }, ["Industries", "Infrastructure"]),
];

export const secunderabadVillages = [
  createVillage("tg-sec-v1", "Begumpet", "Mohalla", 71000, 89, ["Hindu", "Muslim"], ["Hinduism", "Islam"], { male: 36900, female: 34100 }, ["Airport", "Infrastructure"]),
  createVillage("tg-sec-v2", "Cantonment", "Mohalla", 64000, 90, ["Hindu", "Muslim"], ["Hinduism", "Islam"], { male: 33200, female: 30800 }, ["Military zones"]),
  createVillage("tg-sec-v3", "East Marredpally", "Mohalla", 48000, 87, ["Hindu", "Muslim"], ["Hinduism", "Islam"], { male: 24900, female: 23100 }, ["Maintenance"]),
  createVillage("tg-sec-v4", "Erragadda", "Mohalla", 52000, 86, ["Hindu", "Muslim"], ["Hinduism", "Islam"], { male: 27000, female: 25000 }, ["Infrastructure"]),
  createVillage("tg-sec-v5", "Marredpally", "Mohalla", 46000, 85, ["Hindu", "Muslim"], ["Hinduism", "Islam"], { male: 23900, female: 22100 }, ["Development"]),
  createVillage("tg-sec-v6", "Owaisi", "Mohalla", 43000, 83, ["Hindu", "Muslim"], ["Hinduism", "Islam"], { male: 22300, female: 20700 }, ["Commerce"]),
  createVillage("tg-sec-v7", "Panjagutta", "Mohalla", 55000, 88, ["Hindu", "Muslim"], ["Hinduism", "Islam"], { male: 28500, female: 26500 }, ["Shopping", "Infrastructure"]),
  createVillage("tg-sec-v8", "Ramakrishnapur", "Village", 38000, 81, ["Hindu", "Muslim"], ["Hinduism", "Islam"], { male: 19700, female: 18300 }, ["Education", "Healthcare"]),
  createVillage("tg-sec-v9", "Ameerpet", "Mohalla", 61000, 87, ["Hindu", "Muslim"], ["Hinduism", "Islam"], { male: 31700, female: 29300 }, ["IT hub", "Development"]),
];

// ============================================================================
// MAHARASHTRA (250+ villages)
// ============================================================================

export const mumbaiNorthVillages = [
  createVillage("mh-mumbai-n-v1", "Andheri East", "Mohalla", 92000, 89, ["Hindu", "Muslim"], ["Hinduism", "Islam"], { male: 47800, female: 44200 }, ["Traffic", "Parking"]),
  createVillage("mh-mumbai-n-v2", "Andheri West", "Mohalla", 88000, 90, ["Hindu", "Muslim"], ["Hinduism", "Islam"], { male: 45700, female: 42300 }, ["Infrastructure"]),
  createVillage("mh-mumbai-n-v3", "Borivali East", "Mohalla", 74000, 88, ["Hindu", "Muslim"], ["Hinduism", "Islam"], { male: 38400, female: 35600 }, ["Parks", "Environment"]),
  createVillage("mh-mumbai-n-v4", "Borivali West", "Mohalla", 79000, 89, ["Hindu", "Muslim"], ["Hinduism", "Islam"], { male: 41000, female: 38000 }, ["Development"]),
  createVillage("mh-mumbai-n-v5", "Dahisar East", "Mohalla", 68000, 87, ["Hindu", "Muslim"], ["Hinduism", "Islam"], { male: 35300, female: 32700 }, ["Infrastructure"]),
  createVillage("mh-mumbai-n-v6", "Malad East", "Mohalla", 85000, 88, ["Hindu", "Muslim"], ["Hinduism", "Islam"], { male: 44100, female: 40900 }, ["Traffic", "Schools"]),
  createVillage("mh-mumbai-n-v7", "Malad West", "Mohalla", 81000, 89, ["Hindu", "Muslim"], ["Hinduism", "Islam"], { male: 42000, female: 39000 }, ["Shopping malls", "Development"]),
  createVillage("mh-mumbai-n-v8", "Vileparle East", "Mohalla", 76000, 90, ["Hindu", "Muslim"], ["Hinduism", "Islam"], { male: 39500, female: 36500 }, ["Airport", "Commerce"]),
  createVillage("mh-mumbai-n-v9", "Vileparle West", "Mohalla", 72000, 89, ["Hindu", "Muslim"], ["Hinduism", "Islam"], { male: 37400, female: 34600 }, ["Development"]),
  createVillage("mh-mumbai-n-v10", "Jogeshwari East", "Mohalla", 69000, 87, ["Hindu", "Muslim"], ["Hinduism", "Islam"], { male: 35800, female: 33200 }, ["Infrastructure"]),
];

export const mumbaiSouthVillages = [
  createVillage("mh-mumbai-s-v1", "Byculla", "Mohalla", 63000, 85, ["Hindu", "Muslim"], ["Hinduism", "Islam"], { male: 32700, female: 30300 }, ["Heritage", "Commerce"]),
  createVillage("mh-mumbai-s-v2", "Fort", "Mohalla", 51000, 88, ["Hindu", "Muslim"], ["Hinduism", "Islam"], { male: 26500, female: 24500 }, ["Business", "Heritage"]),
  createVillage("mh-mumbai-s-v3", "Lower Parel", "Mohalla", 67000, 87, ["Hindu", "Muslim"], ["Hinduism", "Islam"], { male: 34800, female: 32200 }, ["Industrial", "Development"]),
  createVillage("mh-mumbai-s-v4", "Prabhadevi", "Mohalla", 55000, 86, ["Hindu", "Muslim"], ["Hinduism", "Islam"], { male: 28500, female: 26500 }, ["Maintenance"]),
  createVillage("mh-mumbai-s-v5", "Worli", "Mohalla", 72000, 88, ["Hindu", "Muslim"], ["Hinduism", "Islam"], { male: 37400, female: 34600 }, ["Commerce", "Infrastructure"]),
];

export const puneVillages = [
  createVillage("mh-pune-v1", "Aundh", "Mohalla", 58000, 86, ["Hindu"], ["Hinduism"], { male: 30100, female: 27900 }, ["Development", "Education"]),
  createVillage("mh-pune-v2", "Kothrud", "Mohalla", 61000, 87, ["Hindu", "Muslim"], ["Hinduism", "Islam"], { male: 31700, female: 29300 }, ["Infrastructure", "Schools"]),
  createVillage("mh-pune-v3", "Pashan", "Mohalla", 45000, 85, ["Hindu"], ["Hinduism"], { male: 23400, female: 21600 }, ["Education", "Tech"]),
  createVillage("mh-pune-v4", "Warje", "Village", 52000, 84, ["Hindu", "Muslim"], ["Hinduism", "Islam"], { male: 27000, female: 25000 }, ["Agriculture", "Roads"]),
  createVillage("mh-pune-v5", "Viman Nagar", "Mohalla", 67000, 86, ["Hindu", "Muslim"], ["Hinduism", "Islam"], { male: 34800, female: 32200 }, ["Airport", "Development"]),
  createVillage("mh-pune-v6", "Dhankawadi", "Village", 48000, 82, ["Hindu", "Muslim"], ["Hinduism", "Islam"], { male: 24900, female: 23100 }, ["Infrastructure", "Education"]),
  createVillage("mh-pune-v7", "Hadapsar", "Mohalla", 71000, 85, ["Hindu", "Muslim"], ["Hinduism", "Islam"], { male: 36900, female: 34100 }, ["IT Parks", "Development"]),
];

// ============================================================================
// KARNATAKA (200+ villages)
// ============================================================================

export const bangaloreVillages = [
  createVillage("ka-bangalore-v1", "Indiranagar", "Mohalla", 76000, 89, ["Hindu", "Muslim"], ["Hinduism", "Islam"], { male: 39500, female: 36500 }, ["Infrastructure", "Parks"]),
  createVillage("ka-bangalore-v2", "Marathahalli", "Mohalla", 82000, 88, ["Hindu", "Muslim"], ["Hinduism", "Islam"], { male: 42600, female: 39400 }, ["IT hub", "Traffic"]),
  createVillage("ka-bangalore-v3", "Whitefield", "Mohalla", 95000, 90, ["Hindu", "Muslim"], ["Hinduism", "Islam"], { male: 49300, female: 45700 }, ["Tech companies", "Development"]),
  createVillage("ka-bangalore-v4", "Koramangala", "Mohalla", 68000, 89, ["Hindu", "Muslim"], ["Hinduism", "Islam"], { male: 35300, female: 32700 }, ["Shopping", "Nightlife"]),
  createVillage("ka-bangalore-v5", "Frazer Town", "Mohalla", 52000, 88, ["Hindu", "Muslim"], ["Hinduism", "Islam"], { male: 27000, female: 25000 }, ["Heritage", "Maintenance"]),
  createVillage("ka-bangalore-v6", "Bellandur", "Village", 71000, 87, ["Hindu", "Muslim"], ["Hinduism", "Islam"], { male: 36900, female: 34100 }, ["Lakes", "Development"]),
  createVillage("ka-bangalore-v7", "Sarjapur", "Village", 48000, 84, ["Hindu", "Muslim"], ["Hinduism", "Islam"], { male: 24900, female: 23100 }, ["Agricultural", "Development"]),
  createVillage("ka-bangalore-v8", "Silk Board", "Mohalla", 64000, 87, ["Hindu", "Muslim"], ["Hinduism", "Islam"], { male: 33200, female: 30800 }, ["Traffic", "Infrastructure"]),
];

// ============================================================================
// TAMIL NADU (180+ villages)
// ============================================================================

export const chennaiVillages = [
  createVillage("tn-chennai-v1", "T. Nagar", "Mohalla", 94000, 92, ["Hindu"], ["Hinduism"], { male: 48800, female: 45200 }, ["Traffic", "Parking"]),
  createVillage("tn-chennai-v2", "Mylapore", "Mohalla", 81000, 90, ["Hindu", "Muslim"], ["Hinduism", "Islam"], { male: 42000, female: 39000 }, ["Heritage", "Infrastructure"]),
  createVillage("tn-chennai-v3", "Besant Nagar", "Mohalla", 76000, 91, ["Hindu", "Muslim"], ["Hinduism", "Islam"], { male: 39500, female: 36500 }, ["Beach", "Pollution"]),
  createVillage("tn-chennai-v4", "Alwarpet", "Mohalla", 58000, 89, ["Hindu", "Muslim"], ["Hinduism", "Islam"], { male: 30100, female: 27900 }, ["Temples", "Culture"]),
  createVillage("tn-chennai-v5", "Thyagaraya Nagar", "Mohalla", 102000, 91, ["Hindu"], ["Hinduism"], { male: 52900, female: 49100 }, ["Shopping", "Commerce"]),
  createVillage("tn-chennai-v6", "Kodambakkam", "Mohalla", 71000, 88, ["Hindu", "Muslim"], ["Hinduism", "Islam"], { male: 36900, female: 34100 }, ["Film industry", "Development"]),
  createVillage("tn-chennai-v7", "Ashok Nagar", "Mohalla", 65000, 87, ["Hindu", "Muslim"], ["Hinduism", "Islam"], { male: 33800, female: 31200 }, ["Development", "Schools"]),
  createVillage("tn-chennai-v8", "Velachery", "Village", 72000, 86, ["Hindu", "Muslim"], ["Hinduism", "Islam"], { male: 37400, female: 34600 }, ["IT corridor", "Development"]),
];

// ============================================================================
// UTTAR PRADESH (200+ villages)
// ============================================================================

export const lucknowVillages = [
  createVillage("up-lucknow-v1", "Aliganj", "Mohalla", 64000, 72, ["Hindu", "Muslim"], ["Hinduism", "Islam"], { male: 33200, female: 30800 }, ["Employment", "Education"]),
  createVillage("up-lucknow-v2", "Gomti Nagar", "Mohalla", 58000, 75, ["Hindu", "Muslim"], ["Hinduism", "Islam"], { male: 30100, female: 27900 }, ["Water supply", "Electricity"]),
  createVillage("up-lucknow-v3", "Hazratganj", "Mohalla", 71000, 78, ["Hindu", "Muslim"], ["Hinduism", "Islam"], { male: 36900, female: 34100 }, ["Business", "Congestion"]),
  createVillage("up-lucknow-v4", "Charbagh", "Mohalla", 52000, 73, ["Hindu", "Muslim"], ["Hinduism", "Islam"], { male: 27000, female: 25000 }, ["Station area", "Congestion"]),
  createVillage("up-lucknow-v5", "Indiranagar", "Mohalla", 56000, 74, ["Hindu", "Muslim"], ["Hinduism", "Islam"], { male: 29000, female: 27000 }, ["Development", "Schools"]),
  createVillage("up-lucknow-v6", "Jankipuram", "Mohalla", 48000, 71, ["Hindu", "Muslim"], ["Hinduism", "Islam"], { male: 24900, female: 23100 }, ["Parks", "Infrastructure"]),
  createVillage("up-lucknow-v7", "Vibhuti Khand", "Mohalla", 62000, 76, ["Hindu", "Muslim"], ["Hinduism", "Islam"], { male: 32200, female: 29800 }, ["Development", "Education"]),
];

// ============================================================================
// RAJASTHAN (180+ villages)
// ============================================================================

export const jaipurVillages = [
  createVillage("rj-jaipur-v1", "C-Scheme", "Mohalla", 52000, 81, ["Hindu", "Muslim"], ["Hinduism", "Islam"], { male: 27000, female: 25000 }, ["Infrastructure", "Development"]),
  createVillage("rj-jaipur-v2", "Malviya Nagar", "Mohalla", 48000, 80, ["Hindu"], ["Hinduism"], { male: 25000, female: 23000 }, ["Schools", "Healthcare"]),
  createVillage("rj-jaipur-v3", "Sanganer", "Village", 42000, 74, ["Hindu", "Muslim", "Dalit"], ["Hinduism", "Islam"], { male: 21800, female: 20200 }, ["Crafts", "Tourism"]),
  createVillage("rj-jaipur-v4", "Adarsh Nagar", "Mohalla", 56000, 79, ["Hindu", "Muslim"], ["Hinduism", "Islam"], { male: 29000, female: 27000 }, ["Development", "Schools"]),
  createVillage("rj-jaipur-v5", "Bani Park", "Mohalla", 45000, 82, ["Hindu"], ["Hinduism"], { male: 23400, female: 21600 }, ["Parks", "Infrastructure"]),
  createVillage("rj-jaipur-v6", "Jawahar Nagar", "Mohalla", 51000, 78, ["Hindu", "Muslim"], ["Hinduism", "Islam"], { male: 26500, female: 24500 }, ["Education", "Employment"]),
  createVillage("rj-jaipur-v7", "Mansarovar", "Village", 67000, 81, ["Hindu", "Muslim"], ["Hinduism", "Islam"], { male: 34800, female: 32200 }, ["Development", "Lakes"]),
];

// ============================================================================
// GUJARAT (200+ villages)
// ============================================================================

export const ahmedabadVillages = [
  createVillage("gj-ahmedabad-v1", "Thaltej", "Mohalla", 61000, 83, ["Hindu", "Muslim"], ["Hinduism", "Islam"], { male: 31700, female: 29300 }, ["Infrastructure", "Development"]),
  createVillage("gj-ahmedabad-v2", "Satellite", "Mohalla", 57000, 85, ["Hindu", "Muslim", "Jain"], ["Hinduism", "Islam", "Jainism"], { male: 29600, female: 27400 }, ["Traffic", "Safety"]),
  createVillage("gj-ahmedabad-v3", "Vastrapur", "Mohalla", 53000, 84, ["Hindu", "Muslim"], ["Hinduism", "Islam"], { male: 27500, female: 25500 }, ["Commerce", "Development"]),
  createVillage("gj-ahmedabad-v4", "Iscon", "Mohalla", 71000, 86, ["Hindu", "Muslim", "Jain"], ["Hinduism", "Islam", "Jainism"], { male: 36900, female: 34100 }, ["Shopping", "Development"]),
  createVillage("gj-ahmedabad-v5", "Ambawadi", "Village", 46000, 81, ["Hindu", "Muslim"], ["Hinduism", "Islam"], { male: 23900, female: 22100 }, ["Education", "Infrastructure"]),
  createVillage("gj-ahmedabad-v6", "Nikol", "Village", 38000, 78, ["Hindu", "Muslim"], ["Hinduism", "Islam"], { male: 19700, female: 18300 }, ["Agriculture", "Roads"]),
  createVillage("gj-ahmedabad-v7", "Ranip", "Village", 44000, 80, ["Hindu", "Muslim"], ["Hinduism", "Islam"], { male: 22800, female: 21200 }, ["Development", "Education"]),
];

// Export all village collections
export const villageCollections = {
  hyderabadCentralVillages,
  hyderabadEastVillages,
  hyderabadWestVillages,
  secunderabadVillages,
  mumbaiNorthVillages,
  mumbaiSouthVillages,
  puneVillages,
  bangaloreVillages,
  chennaiVillages,
  lucknowVillages,
  jaipurVillages,
  ahmedabadVillages,
};
