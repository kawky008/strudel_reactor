import { useDrumStore } from "../../stores/use-drum-store.js";

export default function HighTom() {
    // get drum settings
    const { struct, play, gain } = useDrumStore((state) => state.drums.high_tom);
    const updateDrum = useDrumStore((state) => state.updateDrum);

    const toggleNote = (index) => {
        const newStruct = [...struct];
        newStruct[index] = struct[index] === "ht" ? "~" : "ht";
        updateDrum("high_tom", { struct: newStruct });
    };

    return (
        <div style={{ display: "flex", gap: "0.1rem" }}>
            {struct.map((note, i) => (
            <div
                key={i}
                onClick={() => toggleNote(i)}
                className="drum-bar"
                style={{
                backgroundColor: note === "ht" ? "white" : "#171717",
                transition: "background-color 0.10s",
                }}
            />
            ))}
        </div>
    );
    }
