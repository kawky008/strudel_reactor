import { useDrumStore } from "../../stores/use-drum-store.js";

export default function RideCymbal() {
    // get drum settings
    const { struct, play, gain } = useDrumStore((state) => state.drums.ride_cymbal);
    const updateDrum = useDrumStore((state) => state.updateDrum);

    const toggleNote = (index) => {
        const newStruct = [...struct];
        newStruct[index] = struct[index] === "rd" ? "~" : "rd";
        updateDrum("ride_cymbal", { struct: newStruct });
    };

    return (
        <div style={{ display: "flex", gap: "0.1rem" }}>
            {struct.map((note, i) => (
            <div
                key={i}
                onClick={() => toggleNote(i)}
                className="drum-bar"
                style={{
                backgroundColor: note === "rd" ? "white" : "#171717",
                transition: "background-color 0.10s",
                }}
            />
            ))}
        </div>
    );
    }
