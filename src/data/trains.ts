// ================= TYPES =================
export type CoachType = "engine" | "general" | "sleeper" | "ac";

export interface Coach {
  label: string;
  type: CoachType;
}

export interface Train {
  id: string;
  name: string;
  nameKn: string;
  number: string;
  destination: string;
  destinationKn: string;
  platform: number;
  arrivesIn: string;
  coaches: Coach[];
}

export interface Station {
  id: string;
  name: string;
  nameKn: string;
  code: string;
}

// ================= STATIONS =================
export const STATIONS: Station[] = [
  { id: "ksr", name: "KSR Bengaluru", nameKn: "ಕೆಎಸ್‌ಆರ್ ಬೆಂಗಳೂರು", code: "SBC" },
  { id: "ydk", name: "Yadgir", nameKn: "ಯಾದಗಿರಿ", code: "YG" },
  { id: "hpt", name: "Hosapete", nameKn: "ಹೊಸಪೇಟೆ", code: "HPT" },
  { id: "tk", name: "Tumakuru", nameKn: "ತುಮಕೂರು", code: "TK" },
  { id: "asr", name: "Arsikere", nameKn: "ಅರಸೀಕೆರೆ", code: "ASK" },
  { id: "dvg", name: "Davangere", nameKn: "ದಾವಣಗೆರೆ", code: "DVG" },
];

// ================= BASE COACHES (IMPORTANT: ABOVE TRAINS) =================
const baseCoaches: Coach[] = [
  { label: "ENG", type: "engine" },
  { label: "GEN", type: "general" },
  { label: "S1", type: "sleeper" },
  { label: "S2", type: "sleeper" },
  { label: "S3", type: "sleeper" },
  { label: "B1", type: "ac" },
  { label: "A1", type: "ac" },
  { label: "GEN", type: "general" },
];

// ================= TRAINS DATA =================
export const TRAINS_BY_STATION: Record<string, Train[]> = {
  ksr: [
    {
      id: "1",
      name: "Hampi Express",
      nameKn: "ಹಂಪಿ ಎಕ್ಸ್‌ಪ್ರೆಸ್",
      number: "16591",
      destination: "Hosapete",
      destinationKn: "ಹೊಸಪೇಟೆ",
      platform: 4,
      arrivesIn: "8 min",
      coaches: baseCoaches,
    },
    {
      id: "2",
      name: "Gol Gumbaz Express",
      nameKn: "ಗೋಲ್ ಗುಂಬಜ್ ಎಕ್ಸ್‌ಪ್ರೆಸ್",
      number: "16536",
      destination: "Vijayapura",
      destinationKn: "ವಿಜಯಪುರ",
      platform: 1,
      arrivesIn: "15 min",
      coaches: baseCoaches,
    },
    {
      id: "3",
      name: "Basava Express",
      nameKn: "ಬಸವ ಎಕ್ಸ್‌ಪ್ರೆಸ್",
      number: "17308",
      destination: "Bagalkot",
      destinationKn: "ಬಾಗಲಕೋಟೆ",
      platform: 7,
      arrivesIn: "25 min",
      coaches: baseCoaches,
    },
  ],

  ydk: [
    {
      id: "1",
      name: "Hyderabad Express",
      nameKn: "ಹೈದರಾಬಾದ್ ಎಕ್ಸ್‌ಪ್ರೆಸ್",
      number: "17032",
      destination: "Bengaluru",
      destinationKn: "ಬೆಂಗಳೂರು",
      platform: 6,
      arrivesIn: "10 min",
      coaches: baseCoaches,
    },
    {
      id: "2",
      name: "Mumbai Express",
      nameKn: "ಮುಂಬೈ ಎಕ್ಸ್‌ಪ್ರೆಸ್",
      number: "22144",
      destination: "Mumbai",
      destinationKn: "ಮುಂಬೈ",
      platform: 4,
      arrivesIn: "30 min",
      coaches: baseCoaches,
    },
    {
      id: "3",
      name: "Gulbarga Passenger",
      nameKn: "ಗುಲ್ಬರ್ಗಾ ಪ್ಯಾಸೆಂಜರ್",
      number: "57452",
      destination: "Kalaburagi",
      destinationKn: "ಕಲಬುರಗಿ",
      platform: 8,
      arrivesIn: "45 min",
      coaches: baseCoaches,
    },
  ],

  hpt: [
    {
      id: "1",
      name: "Hampi Express",
      nameKn: "ಹಂಪಿ ಎಕ್ಸ್‌ಪ್ರೆಸ್",
      number: "16592",
      destination: "Bengaluru",
      destinationKn: "ಬೆಂಗಳೂರು",
      platform: 3,
      arrivesIn: "5 min",
      coaches: baseCoaches,
    },
    {
      id: "2",
      name: "Amaravati Express",
      nameKn: "ಅಮರಾವತಿ ಎಕ್ಸ್‌ಪ್ರೆಸ್",
      number: "17226",
      destination: "Vijayawada",
      destinationKn: "ವಿಜಯವಾಡ",
      platform: 2,
      arrivesIn: "18 min",
      coaches: baseCoaches,
    },
    {
      id: "3",
      name: "Ballari Passenger",
      nameKn: "ಬಳ್ಳಾರಿ ಪ್ಯಾಸೆಂಜರ್",
      number: "56911",
      destination: "Ballari",
      destinationKn: "ಬಳ್ಳಾರಿ",
      platform: 9,
      arrivesIn: "35 min",
      coaches: baseCoaches,
    },
  ],

  tk: [
    {
      id: "1",
      name: "Tumakuru Intercity",
      nameKn: "ತುಮಕೂರು ಇಂಟರ್ಸಿಟಿ",
      number: "16215",
      destination: "Mysuru",
      destinationKn: "ಮೈಸೂರು",
      platform: 2,
      arrivesIn: "12 min",
      coaches: baseCoaches,
    },
    {
      id: "2",
      name: "Yesvantpur Express",
      nameKn: "ಯಶವಂತಪುರ ಎಕ್ಸ್‌ಪ್ರೆಸ್",
      number: "16539",
      destination: "Hubballi",
      destinationKn: "ಹುಬ್ಬಳ್ಳಿ",
      platform: 1,
      arrivesIn: "22 min",
      coaches: baseCoaches,
    },
    {
      id: "3",
      name: "Chitradurga Passenger",
      nameKn: "ಚಿತ್ರದುರ್ಗ ಪ್ಯಾಸೆಂಜರ್",
      number: "56918",
      destination: "Chitradurga",
      destinationKn: "ಚಿತ್ರದುರ್ಗ",
      platform: 6,
      arrivesIn: "40 min",
      coaches: baseCoaches,
    },
  ],

  asr: [
    {
      id: "1",
      name: "Mysuru Express",
      nameKn: "ಮೈಸೂರು ಎಕ್ಸ್‌ಪ್ರೆಸ್",
      number: "16206",
      destination: "Mysuru",
      destinationKn: "ಮೈಸೂರು",
      platform: 5,
      arrivesIn: "14 min",
      coaches: baseCoaches,
    },
    {
      id: "2",
      name: "Hubballi Express",
      nameKn: "ಹುಬ್ಬಳ್ಳಿ ಎಕ್ಸ್‌ಪ್ರೆಸ್",
      number: "17325",
      destination: "Hubballi",
      destinationKn: "ಹುಬ್ಬಳ್ಳಿ",
      platform: 2,
      arrivesIn: "28 min",
      coaches: baseCoaches,
    },
    {
      id: "3",
      name: "Shivamogga Passenger",
      nameKn: "ಶಿವಮೊಗ್ಗ ಪ್ಯಾಸೆಂಜರ್",
      number: "56273",
      destination: "Shivamogga",
      destinationKn: "ಶಿವಮೊಗ್ಗ",
      platform: 6,
      arrivesIn: "50 min",
      coaches: baseCoaches,
    },
  ],

  dvg: [
    {
      id: "1",
      name: "Jan Shatabdi Express",
      nameKn: "ಜನ ಶತಾಬ್ದಿ ಎಕ್ಸ್‌ಪ್ರೆಸ್",
      number: "12079",
      destination: "Hubballi",
      destinationKn: "ಹುಬ್ಬಳ್ಳಿ",
      platform: 1,
      arrivesIn: "6 min",
      coaches: baseCoaches,
    },
    {
      id: "2",
      name: "Chalukya Express",
      nameKn: "ಚಾಲುಕ್ಯ ಎಕ್ಸ್‌ಪ್ರೆಸ್",
      number: "11006",
      destination: "Mumbai",
      destinationKn: "ಮುಂಬೈ",
      platform: 4,
      arrivesIn: "20 min",
      coaches: baseCoaches,
    },
    {
      id: "3",
      name: "Vijayanagar Express",
      nameKn: "ವಿಜಯನಗರ ಎಕ್ಸ್‌ಪ್ರೆಸ್",
      number: "17307",
      destination: "Mysuru",
      destinationKn: "ಮೈಸೂರು",
      platform: 2,
      arrivesIn: "38 min",
      coaches: baseCoaches,
    },
  ],
};

// ================= FUNCTION =================
export function getTrainsForStation(id: string): Train[] {
  return TRAINS_BY_STATION[id] ?? [];
}

// ================= COACH COLORS =================
export const COACH_COLORS: Record<CoachType, { bg: string; label: string }> = {
  engine: { bg: "bg-coach-engine", label: "Engine" },
  general: { bg: "bg-coach-general", label: "General" },
  sleeper: { bg: "bg-coach-sleeper", label: "Sleeper" },
  ac: { bg: "bg-coach-ac", label: "AC" },
};