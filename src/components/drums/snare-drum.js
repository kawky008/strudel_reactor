import { useDrumStore } from "../../stores/use-drum-store.js";

export default function SnareDrum() {
    // get drum settings
    const { struct, play, gain } = useDrumStore((state) => state.drums.snare_drum);
    const updateDrum = useDrumStore((state) => state.updateDrum);

    const toggleNote = (index) => {
        const newStruct = [...struct];
        newStruct[index] = struct[index] === "sd" ? "~" : "sd";
        updateDrum("snare_drum", { struct: newStruct });
    };

    return (
        <div style={{ display: "flex", gap: "0.1rem" }}>
            {struct.map((note, i) => (
            <div
                key={i}
                onClick={() => toggleNote(i)}
                className="drum-bar"
                style={{
                backgroundColor: note === "sd" ? "white" : "#171717",
                transition: "background-color 0.10s",
                }}
            />
            ))}
        </div>
    );
    }
