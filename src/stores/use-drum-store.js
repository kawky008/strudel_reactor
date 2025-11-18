import { create } from "zustand";

export const useDrumStore = create((set, get) => ({
    drums: {
        settings: {
            play: false,
            bank: "RolandTR808",
            slow: 2,
            gain: 1,
        },
        hihat: {
            struct: Array.from({ length: 32 }, () => "~"),
            play: true,
            gain: 1
        },
        open_hihat: {
            struct: Array.from({ length: 32 }, () => "~"),
            play: true,
            gain: 1
        },
        snare_drum: {
            struct: Array.from({ length: 32 }, () => "~"),
            play: true,
            gain: 1
        },
        rim_shot: {
            struct: Array.from({ length: 32 }, () => "~"),
            play: true,
            gain: 1
        },
        low_tom: {
            struct: Array.from({ length: 32 }, () => "~"),
            play: true,
            gain: 1
        },
        middle_tom: {
            struct: Array.from({ length: 32 }, () => "~"),
            play: true,
            gain: 1
        },
        high_tom: {
            struct: Array.from({ length: 32 }, () => "~"),
            play: true,
            gain: 1
        },
        ride_cymbal: {
            struct: Array.from({ length: 32 }, () => "~"),
            play: true,
            gain: 1
        },
        crash_cymbal: {
            struct: Array.from({ length: 32 }, () => "~"),
            play: true,
            gain: 1
        },
        bass_drum: {
            struct: Array.from({ length: 32 }, () => "~"),
            play: true,
            gain: 1
        }
    },

    updateDrum: (name, updates) => {
        set((state) => ({
            drums: {
                ...state.drums,
                [name]: { ...state.drums[name], ...updates }
            }
        }))
    },

    resetTrack: (track) => {
        set((state) => {
            const structLength = state.drums[track].struct.length;

            const resetStruct = Array.from({ length: structLength }, () => "~");

            return {
                drums: {
                    ...state.drums,
                    [track]: {
                        ...state.drums[track],
                        struct: resetStruct,
                        play: true,
                        gain: 1,
                    },
                },
            };
        });
    },

    resetState: () => {
        const initial = {
            settings: {
                play: false,
                bank: "RolandTR808",
                slow: 2,
                gain: 1,
            },
            hihat: {
                struct: Array.from({ length: 32 }, () => "~"),
                play: true,
                gain: 1
            },
            open_hihat: {
                struct: Array.from({ length: 32 }, () => "~"),
                play: true,
                gain: 1
            },
            snare_drum: {
                struct: Array.from({ length: 32 }, () => "~"),
                play: true,
                gain: 1
            },
            rim_shot: {
                struct: Array.from({ length: 32 }, () => "~"),
                play: true,
                gain: 1
            },
            low_tom: {
                struct: Array.from({ length: 32 }, () => "~"),
                play: true,
                gain: 1
            },
            middle_tom: {
                struct: Array.from({ length: 32 }, () => "~"),
                play: true,
                gain: 1
            },
            high_tom: {
                struct: Array.from({ length: 32 }, () => "~"),
                play: true,
                gain: 1
            },
            ride_cymbal: {
                struct: Array.from({ length: 32 }, () => "~"),
                play: true,
                gain: 1
            },
            crash_cymbal: {
                struct: Array.from({ length: 32 }, () => "~"),
                play: true,
                gain: 1
            },
            bass_drum: {
                struct: Array.from({ length: 32 }, () => "~"),
                play: true,
                gain: 1
            }
        };

        set(() => ({
            drums: initial
        }));

        console.log("Reseted drums state")
    },


    getDrumStr: () => {
    const { drums } = get();
    /*
    drums = {
        hh: {...}, oh: {...}, sd: {...}, ...
    }
     */

    if (!drums.settings.play) return "silence";

    const stack = Object.entries(drums)    // [["hh", {struct: [...], play: true, gain: 1}], ...]
        .filter(([name]) => name !== "settings")    // remove "settings"
        .map(([name, { struct, play, gain }]) => {
        // mute track
        if (!play) {
            return `// ${name} muted`;
        };
        return `s("${struct.join(" ")}").postgain(${gain})`;
    })
    .join(",\n    ");

    return `stack(
    ${stack})`;
    },
}))