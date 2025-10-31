import { create } from "zustand";

export const useStrudelStore = create((set) => ({
    play: null,
    stop: null,
    proc: null,

    setControls: (controls) => set(controls),
}))