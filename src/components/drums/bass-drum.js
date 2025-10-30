import { useDrumStore } from "../../stores/use-drum-store.js";

export default function BassDrum() {
    // get drum settings
    const { struct, play, gain } = useDrumStore((state) => state.drums.bass_drum);
    const updateDrum = useDrumStore((state) => state.updateDrum);

    const toggleNote = (index) => {
        const newStruct = [...struct];
        newStruct[index] = struct[index] === "bd" ? "~" : "bd";
        updateDrum("bass_drum", { struct: newStruct });
    };

    return (
        <div style={{ display: "flex", gap: "0.1rem" }}>
            {struct.map((note, i) => (
            <div
                key={i}
                onClick={() => toggleNote(i)}
                className="drum-bar"
                style={{
                backgroundColor: note === "bd" ? "white" : "#171717",
                transition: "background-color 0.10s",
                }}
            />
            ))}
        </div>
    );
    }
