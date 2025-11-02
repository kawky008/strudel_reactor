import { useDrumStore } from "../../../stores/use-drum-store.js";
import VolumeSlider from "../../volume-slider.js";

export default function SnareDrum() {
    // get drum settings
    const { struct, play, gain } = useDrumStore((state) => state.drums.snare_drum);
    const updateDrum = useDrumStore((state) => state.updateDrum);

    const toggleNote = (index) => {
        const newStruct = [...struct];
        newStruct[index] = struct[index] === "sd" ? "~" : "sd";
        updateDrum("snare_drum", { struct: newStruct });
    };

    const reset = () => {
        updateDrum("snare_drum", { struct: Array(struct.length).fill("~") });
        updateDrum("snare_drum", { play: true });
        updateDrum("snare_drum", { gain: 1 });
    }

    return (
        <div style={{ display: "flex", gap: "1rem"}}>
            <div className="drum-settings">
                <div className="name">Snare Drum</div>

                {/* mute button */}
                <div
                    className="mute-button"
                    onClick={() => updateDrum("snare_drum", { play: !play })}
                >
                    {play ? <i className="fa-solid fa-volume-high" /> : <i className="fa-solid fa-volume-xmark" /> }
                </div>

                {/* volume slider */}
                <VolumeSlider name={"snare_drum"} gain={gain} update={updateDrum} />

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
                    backgroundColor: note === "sd" ? "white" : "#171717",
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
