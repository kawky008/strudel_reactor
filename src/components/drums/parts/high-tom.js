import { useDrumStore } from "../../../stores/use-drum-store.js";
import VolumeSlider from "../../volume-slider.js";

export default function HighTom() {
    // get drum settings
    const { struct, play, gain } = useDrumStore((state) => state.drums.high_tom);
    const updateDrum = useDrumStore((state) => state.updateDrum);

    const toggleNote = (index) => {
        const newStruct = [...struct];
        newStruct[index] = struct[index] === "ht" ? "~" : "ht";
        updateDrum("high_tom", { struct: newStruct });
    };

    const reset = () => {
        updateDrum("high_tom", { struct: Array(struct.length).fill("~") });
        updateDrum("high_tom", { play: true });
        updateDrum("high_tom", { gain: 1 });
    }

    return (
        <div style={{ display: "flex", gap: "1rem"}}>
            <div className="drum-settings">
                <div className="name">High Tom</div>

                {/* mute button */}
                <div
                    className="mute-button"
                    onClick={() => updateDrum("high_tom", { play: !play })}
                >
                    {play ? <i className="fa-solid fa-volume-high" /> : <i className="fa-solid fa-volume-xmark" /> }
                </div>

                {/* volume slider */}
                <VolumeSlider name={"high_tom"} gain={gain} update={updateDrum} />

                {/* reset button */}
                <i className="fa-solid fa-rotate-left ms-2" onClick={() => reset()} />
                
            </div>
            <div className="drum-bars">
                {struct.map((note, i) => (
                <div
                    key={i}
                    onClick={() => toggleNote(i)}
                    className="drum-bar"
                    style={{
                    backgroundColor: note === "ht" ? "white" : "#171717",
                    transition: "background-color 0.10s",
                    marginRight: (i + 1) % 16 === 0 && "0.75rem",
                    flexShrink: 0
                    }}
                />
                ))}
            </div>
        </div>
    );
    }
