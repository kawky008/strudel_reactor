import { useDrumStore } from "../../stores/use-drum-store.js";

export default function Hihat() {
    // get drum settings
    const { struct, play, gain } = useDrumStore((state) => state.drums.middle_tom);
    const updateDrum = useDrumStore((state) => state.updateDrum);

    const toggleNote = (index) => {
        const newStruct = [...struct];
        newStruct[index] = struct[index] === "mt" ? "~" : "mt";
        updateDrum("middle_tom", { struct: newStruct });
    };

    return (
        <div style={{ display: "flex", gap: "0.1rem" }}>
            {struct.map((note, i) => (
            <div
                key={i}
                onClick={() => toggleNote(i)}
                className="drum-bar"
                style={{
                backgroundColor: note === "mt" ? "white" : "#171717",
                transition: "background-color 0.10s",
                }}
            />
            ))}
        </div>
    );
    }
