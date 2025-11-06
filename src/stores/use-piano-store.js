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
            struct: Array.from({ length: 32 }, () => ({
                note: "~",
                gain: 1,
                release: 1,
            })),
            play: true,
            gain: 1
        },
        cs: {
            struct: Array.from({ length: 32 }, () => ({
                note: "~",
                gain: 1,
                release: 1,
            })),
            play: true,
            gain: 1
        },
        d: {
            struct: Array.from({ length: 32 }, () => ({
                note: "~",
                gain: 1,
                release: 1,
            })),
            play: true,
            gain: 1
        },
        ds: {
            struct: Array.from({ length: 32 }, () => ({
                note: "~",
                gain: 1,
                release: 1,
            })),
            play: true,
            gain: 1
        },
        e: {
            struct: Array.from({ length: 32 }, () => ({
                note: "~",
                gain: 1,
                release: 1,
            })),
            play: true,
            gain: 1
        },
        f: {
            struct: Array.from({ length: 32 }, () => ({
                note: "~",
                gain: 1,
                release: 1,
            })),
            play: true,
            gain: 1
        },
        fs: {
            struct: Array.from({ length: 32 }, () => ({
                note: "~",
                gain: 1,
                release: 1,
            })),
            play: true,
            gain: 1
        },
        g: {
            struct: Array.from({ length: 32 }, () => ({
                note: "~",
                gain: 1,
                release: 1,
            })),
            play: true,
            gain: 1
        },
        gs: {
            struct: Array.from({ length: 32 }, () => ({
                note: "~",
                gain: 1,
                release: 1,
            })),
            play: true,
            gain: 1
        },
        a: {
            struct: Array.from({ length: 32 }, () => ({
                note: "~",
                gain: 1,
                release: 1,
            })),
            play: true,
            gain: 1
        },
        as: {
            struct: Array.from({ length: 32 }, () => ({
                note: "~",
                gain: 1,
                release: 1,
            })),
            play: true,
            gain: 1
        },
        b: {
            struct: Array.from({ length: 32 }, () => ({
                note: "~",
                gain: 1,
                release: 1,
            })),
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

    updateNote: (track, index, updates) => {
        set((state) => {
            const oldStruct = state.piano[track].struct;
            const newStruct = oldStruct.map((obj, i) =>
            i === index ? { ...obj, ...updates } : obj
            );

            return {
            piano: {
                ...state.piano,
                [track]: {
                    ...state.piano[track],
                    struct: newStruct
                }
            }
            };
        });
    },

    resetTrack: (track) => {
        set((state) => {
            const structLength = state.piano[track].struct.length;
            const resetStruct = Array.from({ length: structLength }, () => ({
                note: "~",
                gain: 1,
                release: 1,
            }));

            return {
                piano: {
                    ...state.piano,
                    [track]: {
                        ...state.piano[track],
                        struct: resetStruct,
                        play: true,
                        gain: 1,
                    },
                },
            };
        });
    },

    getPianoStr: () => {

        /*
        piano = {
            c: {...}, cs: {...}, d: {...}, ...
        }
        */
        const { piano } = get();
        const pianoBank = piano.settings.bank;

        // mute
        if (!piano.settings.play) return `seq(["~"])`;

        const stack = Object.entries(piano)    // [["c", {struct: [...], play: true, gain: 1}], ...]
            .filter(([name]) => name !== "settings")
            .map(([name, { struct, play, gain }]) => {

                // mute track
                if (!play) {
                    return `// ${name} muted`;
                };

                let seq = "seq([" +
                    struct.map(obj =>
                        obj.note === "~"
                        ? `"~"`
                        : `makeNote("${obj.note}", "${pianoBank}", ${obj.gain * gain}, ${obj.release})`
                    ).join(", ") +
                    "])";

                return seq;
            })
            .join(",\n    ");

        return `stack(
        ${stack})`;
    },
}))