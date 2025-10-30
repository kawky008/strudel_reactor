import { useDrumStore } from "../../stores/use-drum-store.js";

export default function CrashCymbal() {
    // get drum settings
    const { struct, play, gain } = useDrumStore((state) => state.drums.crash_cymbal);
    const updateDrum = useDrumStore((state) => state.updateDrum);

    const toggleNote = (index) => {
        const newStruct = [...struct];
        newStruct[index] = struct[index] === "cr" ? "~" : "cr";
        updateDrum("crash_cymbal", { struct: newStruct });
    };

    return (
        <div style={{ display: "flex", gap: "0.1rem" }}>
            {struct.map((note, i) => (
            <div
                key={i}
                onClick={() => toggleNote(i)}
                className="drum-bar"
                style={{
                backgroundColor: note === "cr" ? "white" : "#171717",
                transition: "background-color 0.10s",
                }}
            />
            ))}
        </div>
    );
    }
