import { create } from "zustand";

export const useGlobalStore = create((set) => ({
    BPM: 120,

    setBPM: (BPM) => set({ BPM }),
}))