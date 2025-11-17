import { create } from "zustand";

export const useBassStore = create((set, get) => ({
    bass: {
        settings: {
            play: false,
            bank: "gm_acoustic_bass",
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

    updateBass: (name, updates) => {
        set((state) => ({
            bass: {
                ...state.bass,
                [name]: { ...state.bass[name], ...updates }
            }
        }))
    },

    updateNote: (track, index, updates) => {
        set((state) => {
            const oldStruct = state.bass[track].struct;
            const newStruct = oldStruct.map((obj, i) =>
            i === index ? { ...obj, ...updates } : obj
            );

            return {
            bass: {
                ...state.bass,
                [track]: {
                    ...state.bass[track],
                    struct: newStruct
                }
            }
            };
        });
    },

    resetTrack: (track) => {
        set((state) => {
            const structLength = state.bass[track].struct.length;
            const resetStruct = Array.from({ length: structLength }, () => ({
                note: "~",
                gain: 1,
                release: 1,
            }));

            return {
                bass: {
                    ...state.bass,
                    [track]: {
                        ...state.bass[track],
                        struct: resetStruct,
                        play: true,
                        gain: 1,
                    },
                },
            };
        });
    },

    resetState: () => {
        const initialStruct = () => Array.from({ length: 32 }, () => ({
            note: "~",
            gain: 1,
            release: 1,
        }));

        set({
            bass: {
                settings: {
                    play: false,
                    bank: "gm_acoustic_bass",
                    slow: 2,
                    gain: 1,
                },
                c: { struct: initialStruct(), play: true, gain: 1 },
                cs: { struct: initialStruct(), play: true, gain: 1 },
                d: { struct: initialStruct(), play: true, gain: 1 },
                ds: { struct: initialStruct(), play: true, gain: 1 },
                e: { struct: initialStruct(), play: true, gain: 1 },
                f: { struct: initialStruct(), play: true, gain: 1 },
                fs: { struct: initialStruct(), play: true, gain: 1 },
                g: { struct: initialStruct(), play: true, gain: 1 },
                gs: { struct: initialStruct(), play: true, gain: 1 },
                a: { struct: initialStruct(), play: true, gain: 1 },
                as: { struct: initialStruct(), play: true, gain: 1 },
                b: { struct: initialStruct(), play: true, gain: 1 },
            }
        });

        console.log("Reseted bass state")
    },


    getBassStr: () => {

        /*
        bass = {
            c: {...}, cs: {...}, d: {...}, ...
        }
        */
        const { bass } = get();
        const bassBank = bass.settings.bank;

        // mute
        if (!bass.settings.play) return `seq(["~"])`;

        const stack = Object.entries(bass)    // [["c", {struct: [...], play: true, gain: 1}], ...]
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
                        : `makeNote("${obj.note}", "${bassBank}", ${obj.gain * gain}, ${obj.release})`
                    ).join(", ") +
                    "])";

                return seq;
            })
            .join(",\n    ");

        return `stack(
        ${stack})`;
    },
}))