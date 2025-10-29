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
        <div style={{ marginBottom: "1rem" }}>
            <div style={{ display: "flex", gap: "2px" }}>
                {struct.map((note, i) => (
                <div
                    key={i}
                    onClick={() => toggleNote(i)}
                    style={{
                    width: 25,
                    height: 50,
                    backgroundColor: note === "bd" ? "white" : "#171717",
                    border: "1px solid #797979",
                    cursor: "pointer",
                    transition: "background-color 0.15s",
                    }}
                />
                ))}
            </div>
            <div
                style={{
                marginTop: "0.3rem",
                fontSize: "0.8rem",
                color: play ? "lime" : "gray",
                }}
            >
                Gain: {gain.toFixed(2)}
            </div>
        </div>
    );
    }
