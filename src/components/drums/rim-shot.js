import { useDrumStore } from "../../stores/use-drum-store.js";

export default function RimShot() {
    // get drum settings
    const { struct, play, gain } = useDrumStore((state) => state.drums.rim_shot);
    const updateDrum = useDrumStore((state) => state.updateDrum);

    const toggleNote = (index) => {
        const newStruct = [...struct];
        newStruct[index] = struct[index] === "rim" ? "~" : "rim";
        updateDrum("rim_shot", { struct: newStruct });
    };

    return (
        <div style={{ display: "flex", gap: "0.1rem" }}>
            {struct.map((note, i) => (
            <div
                key={i}
                onClick={() => toggleNote(i)}
                className="drum-bar"
                style={{
                backgroundColor: note === "rim" ? "white" : "#171717",
                transition: "background-color 0.10s",
                }}
            />
            ))}
        </div>
    );
    }
