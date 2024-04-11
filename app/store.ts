import { create } from "zustand";

interface StoreState {
  people: string[];
  addPerson: (person: string) => void;

  languages: string[];
  setLanguage: (newLanguage: string) => void;
  
  selectedLanguage: string;

  drop_off: { [key: string]: string };
  drop_off_ID: string;
  setDrop_off_ID: (drop_off_ID: string) => void;
  
  pick_up: { [key: string]: string };
  pick_up_ID: string;
  setPick_up_ID: (pick_up_ID: string) => void;

  Mpesa_names: { [key: string]: string };
  Mpesa_numbers: { [key: string]: string };

  cost: number; // Add cost state variable

  setCost: (cost: number) => void; // Add setCost function
}

const useStore = create<StoreState>((set) => ({
  people: ["raymond", "ray", "rayray"],
  languages: ["Sesotho", "English"],
  selectedLanguage: "English",

  drop_off: {
    Sesotho: "Sebaka seo u lo theoha ho sona",
    English: "Drop-off location",
    Sesotho_placeholder: "sebaka",
    English_placeholder: "location",
  },

  pick_up: {
    Sesotho: "Sebaka seo u tlohang ho sona",
    English: "Pick-up location",
    Sesotho_placeholder: "sebaka",
    English_placeholder: "location",
  },

  Mpesa_names: {
    Sesotho: "Mabitso a hau a Mpesa",
    English: "Mpesa names",
    Sesotho_placeholder: "mabitso",
    English_placeholder: "names"
  },

  Mpesa_numbers: {
    Sesotho: "Nomoro tsa hau tsa Mpesa",
    English: "Mpesa Numbers",
    Sesotho_placeholder: "linomoro",
    English_placeholder: "numbers"
  },

  drop_off_ID: "", // Initialize drop_off_ID
  setDrop_off_ID: (drop_off_ID: string) =>
    set((state) => ({ drop_off_ID: drop_off_ID })), // Set drop_off_ID

  pick_up_ID: "", // Initialize pick_up_ID
  setPick_up_ID: (pick_up_ID: string) =>
    set((state) => ({ pick_up_ID: pick_up_ID })), // Set pick_up_ID

  addPerson: (person) =>
    set((state) => ({ people: [...state.people, person] })),

  setLanguage: (newLanguage: string) =>
    set((state) => ({ selectedLanguage: newLanguage })),

  cost: 0, // Initialize cost

  setCost: (cost: number) =>
    set((state) => ({ cost: cost })), // Set cost
}));

export default useStore;
