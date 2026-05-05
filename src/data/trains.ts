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

export const STATIONS: Station[] = [
  { id: "ksr", name: "KSR Bengaluru", nameKn: "ಕೆಎಸ್‌ಆರ್ ಬೆಂಗಳೂರು", code: "SBC" },
  { id: "ydk", name: "Yadgir", nameKn: "ಯಾದಗಿರಿ", code: "YG" },
  { id: "hpt", name: "Hosapete", nameKn: "ಹೊಸಪೇಟೆ", code: "HPT" },
  { id: "tk", name: "Tumakuru", nameKn: "ತುಮಕೂರು", code: "TK" },
  { id: "asr", name: "Arsikere", nameKn: "ಅರಸೀಕೆರೆ", code: "ASK" },
  { id: "dvg", name: "Davangere", nameKn: "ದಾವಣಗೆರೆ", code: "DVG" },
];

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

export const TRAINS_BY_STATION: Record<string, Train[]> = {
  ksr: [
    {
      id: "1",
      name: "Hampi Express",
      nameKn: "ಹಂಪಿ ಎಕ್ಸ್‌ಪ್ರೆಸ್",
      number: "16591",
      destination: "Hubballi",
      destinationKn: "ಹುಬ್ಬಳ್ಳಿ",
      platform: 4,
      arrivesIn: "8 min",
      coaches: baseCoaches,
    },
    {
      id: "2",
      name: "Karnataka Express",
      nameKn: "ಕರ್ನಾಟಕ ಎಕ್ಸ್‌ಪ್ರೆಸ್",
      number: "12627",
      destination: "New Delhi",
      destinationKn: "ಹೊಸ ದೆಹಲಿ",
      platform: 1,
      arrivesIn: "23 min",
      coaches: [
        { label: "ENG", type: "engine" },
        { label: "GEN", type: "general" },
        { label: "S1", type: "sleeper" },
        { label: "S2", type: "sleeper" },
        { label: "B1", type: "ac" },
        { label: "A1", type: "ac" },
        { label: "A2", type: "ac" },
        { label: "GEN", type: "general" },
      ],
    },
    {
      id: "3",
      name: "Rani Chennamma",
      nameKn: "ರಾಣಿ ಚೆನ್ನಮ್ಮ",
      number: "16589",
      destination: "Kolhapur",
      destinationKn: "ಕೊಲ್ಹಾಪುರ",
      platform: 7,
      arrivesIn: "47 min",
      coaches: baseCoaches,
    },
  ],
};

export function getTrainsForStation(id: string): Train[] {
  return TRAINS_BY_STATION[id] ?? TRAINS_BY_STATION.ksr;
}

export const COACH_COLORS: Record<CoachType, { bg: string; label: string }> = {
  engine: { bg: "bg-coach-engine", label: "Engine" },
  general: { bg: "bg-coach-general", label: "General" },
  sleeper: { bg: "bg-coach-sleeper", label: "Sleeper" },
  ac: { bg: "bg-coach-ac", label: "AC" },
};