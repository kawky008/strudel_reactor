import { create } from "zustand";

export const usePianoStore = create((set, get) => ({
    piano: {
        settings: {
            play: false,
            bank: "gm_piano",
            slow: 2,
            gain: 1,
        },
        c: {
            struct: Array(32).fill("~"),
            play: true,
            gain: 1
        },
        cs: {
            struct: Array(32).fill("~"),
            play: true,
            gain: 1
        },
        d: {
            struct: Array(32).fill("~"),
            play: true,
            gain: 1
        },
        ds: {
            struct: Array(32).fill("~"),
            play: true,
            gain: 1
        },
        e: {
            struct: Array(32).fill("~"),
            play: true,
            gain: 1
        },
        f: {
            struct: Array(32).fill("~"),
            play: true,
            gain: 1
        },
        fs: {
            struct: Array(32).fill("~"),
            play: true,
            gain: 1
        },
        g: {
            struct: Array(32).fill("~"),
            play: true,
            gain: 1
        },
        gs: {
            struct: Array(32).fill("~"),
            play: true,
            gain: 1
        },
        a: {
            struct: Array(32).fill("~"),
            play: true,
            gain: 1
        },
        as: {
            struct: Array(32).fill("~"),
            play: true,
            gain: 1
        },
        b: {
            struct: Array(32).fill("~"),
            play: true,
            gain: 1
        }
    },

    updatePiano: (name, updates) => {
        set((state) => ({
            piano: {
                ...state.piano,
                [name]: { ...state.piano[name], ...updates }
            }
        }))
    },

    getPianoStr: () => {
    const { piano } = get();
    /*
    piano = {
        c: {...}, cs: {...}, d: {...}, ...
    }
     */

    if (!piano.settings.play) return "silence";

    const stack = Object.entries(piano)    // [["c", {struct: [...], play: true, gain: 1}], ...]
        .filter(([name]) => name !== "settings")    // remove "settings"
        .map(([name, { struct, play, gain }]) => {
        // mute track
        if (!play) {
            return `// ${name} muted`;
        };
        return `s("${struct.join(" ")}").gain(${gain})`;
    })
    .join(",\n    ");

    return `stack(
    ${stack})`;
    },
}))